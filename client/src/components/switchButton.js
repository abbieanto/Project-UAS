import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import './global.css';
import TableTiket from './tableTiket';
import TableSnack from './tableSnack';
import Container from 'react-bootstrap/esm/Container';

const SwitchButton = () => {

    const [dropdownText, setDropdownText] = useState("Select Table");
    const [activeTable, setActiveTable] = useState(false);

    const handleText = event => {
        setDropdownText(event.target.textContent);
        setActiveTable(true);
    }

    return (
            <Container>

                <Dropdown style={{marginTop: '20px'}}>
                    <Dropdown.Toggle variant="outline-primary" id="dropdown-basic" style={{width: '150px'}}>
                    {dropdownText}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                    <Dropdown.Item href="#/table-tikets" onClick={handleText}>Tikets</Dropdown.Item>
                    <Dropdown.Item href="#/table-Snacks" onClick={handleText}>Snacks</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                {activeTable && dropdownText === 'Tikets' && <TableTiket /> }
                {activeTable && dropdownText === 'Snacks' && <TableSnack /> }
            </Container>
            
        
    );
}
 
export default SwitchButton;