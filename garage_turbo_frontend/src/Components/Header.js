import React, { Component } from 'react';
import { Navbar, Nav } from 'reactstrap';

class Header extends Component {
    render() { 
        return (
            <Navbar light className="header">
                <Nav className="flex-row" navbar>
                    <a type="button" className="btn btn-primary header-item" href="/">Start</a>
                    <a type="button" className="btn btn-primary header-item" href="/genereer">Genereer Test Data</a>
                    <a type="button" className="btn btn-primary header-item" href="/overzicht">Overzicht Klanten</a>
                </Nav>
            </Navbar>
        );
    }
}
 
export default Header;