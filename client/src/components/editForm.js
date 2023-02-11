import { useState } from 'react';
import Axios from "axios";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const EditForm = (props) => {

    // useState to set new value of specific field
    const [editTiket, setEditTiket] = useState(props.nama_film);
    const [editJml, setEditJml] = useState(props.jumlah);
    const [editHarga, setEditHarga] = useState(props.harga_tiket);

    const editHandler = () => {
        console.log("data edited");

        Axios.put(`http://localhost:3000/api/tikets/${props.TiketId}`, {
            tiket_id: props.tiketId,
            nama_film: editTiket,
            jumlah: editJml,
            harga_tiket: editHarga
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
            <Modal.Title>Edit Product</Modal.Title>
            </Modal.Header>

            <Form onSubmit={editHandler}>
                <Modal.Body>

                    <Form.Group className="mb-3">
                        <Form.Label>Nama Film</Form.Label>
                        <Form.Control type="text" placeholder="Set nama film" value={editTiket} onChange={(e) => setEditTiket(e.target.value)}/>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Jumlah</Form.Label>
                        <Form.Control type="text" placeholder="Set jumlah" value={editJml} onChange={(e) => setEditJml(e.target.value)}/>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Harga Tiket</Form.Label>
                        <Form.Control type="text" placeholder="Set harga tiket" value={editHarga} onChange={(e) => setEditHarga(e.target.value)}/>
                    </Form.Group>

                    <Button variant="primary" type="submit" style={{marginRight: '10px'}}>Submit</Button>
                    <Button variant="outline-danger" onClick={props.closeModal}>Cancel</Button>
                </Modal.Body>
            </Form>
        </Modal.Dialog>
        </div>
    );
}
 
export default EditForm;