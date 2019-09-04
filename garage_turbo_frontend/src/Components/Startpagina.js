import React, { Component } from 'react';
import logo from './../logo.svg';

class Startpagina extends Component {
    render() { 
        return (
            <div className="App App-header">
                <div>
                    <b>Auto Onderhoud Planner</b>
                </div>
                <img src= { logo } className="App-logo" alt="logo"/>
                <div>
                    <b>Garage Turbo</b>
                </div>
            </div>
        );
    }
}
 
export default Startpagina;