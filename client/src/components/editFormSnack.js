import { useState } from 'react';
import Axios from "axios";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const EditFormAccesories = (props) => {

    // useState to set new value of specific field
    const [editSnack, setEditSnack] = useState(props.nama_Snack);
    const [editJml, setEditJml] = useState(props.Jumlah);
    const [editHarga, setEditHarga] = useState(props.Harga);

    const editHandler = () => {
        console.log("data edited");

        Axios.put(`http://localhost:3000/api/snacks/${props.SnackName}`, {
            nama_Snack: editSnack,
            jumlah: editJml,
            harga: editHarga
        });
        
        window.location.reload(false);

    }

    return (
        <div
        className="modal show"
        style={{ display: 'block', textAlign: 'left'}}
        >
        <Modal.Dialog>
            <Modal.Header>
            <Modal.Title>Edit Accesories</Modal.Title>
            </Modal.Header>

            <Form onSubmit={editHandler}>
                <Modal.Body>

                    <Form.Group className="mb-3">
                        <Form.Label>Nama Snack</Form.Label>
                        <Form.Control type="text" placeholder="Set Nama snack" value={editSnack} onChange={(e) => setEditSnack(e.target.value)}/>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Jumlah</Form.Label>
                        <Form.Control type="text" placeholder="Set Jumlah" value={editJml} onChange={(e) => setEditJml(e.target.value)}/>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Harga</Form.Label>
                        <Form.Control type="text" placeholder="Set Harga" value={editHarga} onChange={(e) => setEditHarga(e.target.value)}/>
                    </Form.Group>

                    <Button variant="primary" type="submit" style={{marginRight: '10px'}}>Submit</Button>
                    <Button variant="outline-danger" onClick={props.closeModal}>Cancel</Button>
                </Modal.Body>
            </Form>
        </Modal.Dialog>
        </div>
    );
}
 
export default EditFormAccesories;