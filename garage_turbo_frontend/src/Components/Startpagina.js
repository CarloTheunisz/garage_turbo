import React, { Component } from 'react';
import logo from './../logo.svg';
import Header from './Header';

class Startpagina extends Component {
    render() { 
        return (
            <React.Fragment>
                <Header path={ this.props.location.pathname }/>
                <div className="App App-header">
                    <div>
                        <b>Auto Onderhoud Planner</b>
                    </div>
                    <img src= { logo } className="App-logo" alt="logo"/>
                    <div>
                        <b>Garage Turbo</b>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default Startpagina;