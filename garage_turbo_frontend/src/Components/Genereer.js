import React, { Component } from 'react';
import API from '../Library/API';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import Overzicht from './Overzicht';

class Genereer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasGenerated: false
        }
    }

    generate() {
        API.fetchData('http://localhost/garage_turbo/garage_turbo_backend/public/api/delete/all', 'DELETE')
        .catch( error => {
            console.log(error)
        });
        API.fetchData('http://localhost/garage_turbo/garage_turbo_backend/public/api/create/testdata', 'POST')
        .catch( error => {
            console.log(error)
        });
        this.setState({
            hasGenerated: true
        })
    }

    render() {
        if(this.state.hasGenerated) {
            return (
                <BrowserRouter>
                    <Route exact path='/genereer' component={ Overzicht }/>
                </BrowserRouter>
            )
        } else {
            return (
                <React.Fragment>
                    <Header path={ this.props.location.pathname }/>
                    <div className="normal-page">
                        <div className="space-below">
                            <b>Genereer Test Data</b>
                        </div>
                        <div>
                            Er worden willekeurig tussen 10 en 100 klanten toegevoegd aan de database.
                        </div>
                        <div className="space-below">
                            Bestaande gegevens worden verwijderd!
                        </div>
                        <button type="button" className="btn btn-primary btn-body space-below" onClick={ this.generate.bind(this) }>
                            Genereer
                        </button>
                    </div>
                </React.Fragment>
            );
        }
    }
}
 
export default Genereer;