import React, { Component } from 'react';

class Genereer extends Component {
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
                <button type="button" className="btn btn-primary">
                    Genereer
                </button>
            </div>
        );
    }
}
 
export default Genereer;