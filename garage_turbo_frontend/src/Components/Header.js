import React, { Component } from 'react';
import { Navbar, Nav } from 'reactstrap';

class Header extends Component {
    getClasses(path, goal) {
        if(path === goal) {
            return "btn btn-warning header-item";
        }
        return "btn btn-primary header-item";
    }

    render() { 
        return (
            <Navbar light className="header">
                <Nav className="flex-row" navbar>
                    <a type="button" className={ this.getClasses(this.props.path, '/') } href="/">
                        Start
                    </a>
                    <a type="button" className={ this.getClasses(this.props.path, '/genereer') } href="/genereer">
                        Genereer Test Data
                    </a>
                    <a type="button" className={ this.getClasses(this.props.path, '/overzicht') } href="/overzicht">
                        Overzicht Klanten
                    </a>
                </Nav>
            </Navbar>
        );
    }
}
 
export default Header;