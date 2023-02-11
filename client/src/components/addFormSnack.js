import { useState } from 'react';
import Axios from "axios";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function AddFormSnack() {

    // useState to set new value of specific field
    const [addSnack, setAddSnack] = useState('');
    const [addJml, setAddJml] = useState('');
    const [addHarga, setAddHarga] = useState('');

    const submitAdd = () => {
        const snackData = {"nama_snack": addSnack, "jumlah": addJml, "harga": addHarga};
        Axios.post("http://localhost:3000/api/add-snacks", snackData).then(() => alert('Snack successfully added!'));

        setAddSnack('');
        setAddJml('');
        setAddHarga('');

    }
    return (
        <div
        className="modal show"
        style={{ display: 'block', textAlign: 'left'}}
        >
        <Modal.Dialog>
            <Modal.Header closeButton>
            <Modal.Title>Add Snack</Modal.Title>
            </Modal.Header>

            <Form onSubmit={submitAdd}>
                <Modal.Body>

                    <Form.Group className="mb-3">
                        <Form.Label>Nama Snack</Form.Label>
                        <Form.Control type="text" placeholder="Set nama snack" value={addSnack} onChange={(e) => setAddSnack(e.target.value)}/>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Jumlah</Form.Label>
                        <Form.Control type="text" placeholder="Set jumlah" value={addJml} onChange={(e) => setAddJml(e.target.value)}/>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Harga</Form.Label>
                        <Form.Control type="text" placeholder="Set harga" value={addHarga} onChange={(e) => setAddHarga(e.target.value)}/>
                    </Form.Group>

                    <Button variant="primary" type="submit" style={{marginRight: '10px'}}>Add</Button>
                    <Button variant="outline-danger">Cancel</Button>
                </Modal.Body>
            </Form>
        </Modal.Dialog>
        </div>
    );
}

export default AddFormSnack;