import './global.css';
import { useEffect, useState } from 'react';
import Axios from 'axios';
import Button from 'react-bootstrap/Button';
import AddFormSnack from './addFormSnack';
import EditFormSnack from './editFormSnack';

const TableSnack = () => {

    const [snackList, setSnackList] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [openEditModal, setOpenEditModal] = useState(false);

    const handleShowModal = () => {
        setOpenModal(true);
    }

    const handleCloseEditModal = () => {
        setOpenEditModal(false);
    }

    useEffect(()=> {
        Axios.get('http://localhost:3000/api/snacks').then(res => {
            setSnackList(res.data)
        }).catch(err => console.log(err))
    }, [])

    const [getName, setGetName] = useState();
    const [getJml, setGetJml] = useState();
    const [getPrice, setGetPrice] = useState();

    return (
        <div className='container'>
            <div className='heading-group'>
                <h2>Snack Table</h2>
                <Button onClick={handleShowModal}>Add Snacks</Button>
                {openModal && <AddFormSnack />}
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Jumlah</th>
                        <th>Harga</th>
                        <th>Action</th>
                    </tr>
                </thead>
                
                {snackList.map((val, idx) => {

                    const handleEditModal = () => {
                        setOpenEditModal(true);
                        setGetName(val.nama_snack);
                        setGetJml(val.jumlah);
                        setGetPrice(val.harga);
                    }

                    const handleDeletion = () => {

                        Axios.delete(`http://localhost:3000/api/snacks/${val.nama_snack}`).then(response => {
                            setSnackList(response.data);
                        });

                        window.location.reload(false);
                    }

                    return (
                        <tbody key={idx}>
                            <tr>
                                <td>{val.nama_snack}</td>
                                <td>{val.jumlah}</td>
                                <td>{val.harga}</td>
                                <td className='tbl-button-group'>
                                    <Button variant='info' onClick={handleEditModal}>Edit</Button>
                                    {openEditModal && <EditFormSnack closeModal={handleCloseEditModal}nama_snack={getName} jumlah={getJml} harga={getPrice} />}
                                    <Button variant='danger' onClick={handleDeletion}>Delete</Button>
                                </td>
                            </tr>
                        </tbody>
                    )
                })}
            </table>
        </div>
    )
}
 
export default TableSnack;