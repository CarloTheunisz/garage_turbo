import React, { Component } from 'react';
import afbeelding from './../afbeelding.png';
import Header from './Header';

class Startpagina extends Component {
    render() { 
        return (
            <React.Fragment>
                <Header path={ this.props.location.pathname }/>
                <div className="App-header">
                    <div>
                        <b>Auto Onderhoud Planner</b>
                    </div>
                    <img src= { afbeelding } alt="logo"/>
                    <div>
                        <b>Garage Turbo</b>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default Startpagina;