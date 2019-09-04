import React, { Component } from 'react';
import API from '../Library/API';

class Genereer extends Component {
    generate() {
        API.deleteData('http://localhost/garage_turbo/garage_turbo_backend/public/api/delete/all')
        .catch( error => {
            console.log(error)
        });
        API.postData('http://localhost/garage_turbo/garage_turbo_backend/public/api/create/testdata')
        .catch( error => {
            console.log(error)
        });
        console.log('Functie zou nu klaar moeten zijn. Test de get in postman om te zien of er records zijn toegevoegd.');
    }

    render() {
        return (
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
                <button type="button" className="btn btn-primary" onClick={ this.generate.bind(this) }>
                    Genereer
                </button>
            </div>
        );
    }
}
 
export default Genereer;