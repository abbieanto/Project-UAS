import { useState } from 'react';
import Axios from "axios";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function AddForm() {

    // useState to set new value of specific field
    const [addTiket, setAddTiket] = useState('');
    const [addJml, setAddJml] = useState('');
    const [addHarga, setAddHarga] = useState('');
    const [addID, setAddID] = useState('');

    const submitAdd = () => {
        const tiketData = {"nama_film": addTiket, "jumlah": addJml, "harga_tiket": addHarga};
        Axios.post("http://localhost:3000/api/add-tikets", tiketData).then(() => alert('tiket successfully added!'));

        setAddTiket('');
        setAddJml('');
        setAddHarga('');
        setAddID('');

    }
    return (
        <div
        className="modal show"
        style={{ display: 'block', textAlign: 'left'}}
        >
        <Modal.Dialog>
            <Modal.Header closeButton>
            <Modal.Title>Add Film</Modal.Title>
            </Modal.Header>

            <Form onSubmit={submitAdd}>
                <Modal.Body>

                    <Form.Group className="mb-3">
                        <Form.Label>Nama Film</Form.Label>
                        <Form.Control type="text" placeholder="Set Nama Film" value={addTiket} onChange={(e) => setAddTiket(e.target.value)}/>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Tiket ID</Form.Label>
                        <Form.Control type="text" placeholder="Set Tiket ID" value={addID} onChange={(e) => setAddID(e.target.value)}/>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Jumlah</Form.Label>
                        <Form.Control type="text" placeholder="Set jumlah" value={addJml} onChange={(e) => setAddJml(e.target.value)}/>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Harga tiket</Form.Label>
                        <Form.Control type="text" placeholder="Set harga tiket" value={addHarga} onChange={(e) => setAddHarga(e.target.value)}/>
                    </Form.Group>
                                       

                    <Button variant="primary" type="submit" style={{marginRight: '10px'}}>Add</Button>
                    <Button variant="outline-danger">Cancel</Button>
                </Modal.Body>
            </Form>
        </Modal.Dialog>
        </div>
    );
}

export default AddForm;