import './global.css';
import { useEffect, useState } from 'react';
import Axios from 'axios';
import Button from 'react-bootstrap/Button';
import AddForm from './addForm';
import EditForm from './editForm';

const TableTiket = () => {

    const [tiketList, settiketList] = useState([]);
    const [openModal, setOpenModal] = useState(false);

    const [openEditModal, setOpenEditModal] = useState(false);

    const handleCloseEditModal = () => {
        setOpenEditModal(false);
    }

    
    const handleShowModal = () => {
        setOpenModal(true);
    }
    


    useEffect(()=> {
        Axios.get('http://localhost:3000/api/tikets').then(res => {
            settiketList(res.data)
        }).catch(err => console.log(err))
    }, [])

    const [getID, setGetID] = useState();
    const [getName, setGetName] = useState();
    const [getJml, setGetJml] = useState();
    const [getHarga, setGetHarga] = useState();

    return (
        <div className='container'>
            <div className='heading-group'>
                <h2>Tiket Table</h2>
                <Button onClick={handleShowModal}>Add Movie</Button>
                {openModal && <AddForm />}

            </div>
            
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                

                {tiketList.map((val, idx) => {

                    const handleEditModal = () => {
                        setOpenEditModal(true);
                        setGetID(val.tiket_id);
                        setGetName(val.nama_film);
                        setGetJml(val.jumlah);
                        setGetHarga(val.harga_tiket);
                    }

                    const handleDeletion = () => {
                        // setTarget(val.product_id);

                        Axios.delete(`http://localhost:3000/api/tikets/${val.tiket_id}`).then(response => {
                            settiketList(response.data);
                        });

                        window.location.reload(false);
                    }
                    
                    return (
                        <tbody key={idx}>
                            <tr>
                                <td>{val.tiket_id}</td>
                                <td>{val.nama_film}</td>
                                <td>{val.jumlah}</td>
                                <td>{val.harga_tiket}</td>
                                <td className='tbl-button-group'>
                                    <Button variant='info' onClick={handleEditModal}>Edit</Button>
                                    {openEditModal && <EditForm closeModal={handleCloseEditModal} tiketId={getID} namaTiket={getName} Jumlah={getJml} hargaTiket={getHarga} />}
                                    <Button variant='danger' onClick={handleDeletion}>Delete</Button>
                                </td>
                            </tr>
                        </tbody>
                    )
                }   
            )}
            </table>
        </div>
    )
}
 
export default TableTiket;