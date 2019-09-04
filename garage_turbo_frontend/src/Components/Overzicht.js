import React, { Component } from 'react';
import { Table } from 'reactstrap';
import API from './../Library/API';
import Tabellenrij from './TabellenRij';

class Overzicht extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            rawData: []
        }
    }

    componentDidMount() {
        API.fetchData('http://localhost/garage_turbo/garage_turbo_backend/public/api')
        .then( data => {
            console.log(data);
            this.setState({
                isLoaded: true,
                rawData: data
            })
        })
        .catch( error => {
            console.log(error)
        });
    }

    render() { 
        console.log(this.state.data);
        return (
            <div className="normal-page">
                <div className="space-below">
                    <b>Overzicht klanten</b>
                </div>
                <div className="radio">
                    <label className="radio-label"><input type="radio" name="optradio"/>Toon alle auto's</label>
                </div>
                <div className="radio">
                    <label className="radio-label"><input type="radio" name="optradio"/>Binnenkort op onderhoud</label>
                </div>
                <div className="radio space-below">
                    <label className="radio-label"><input type="radio" name="optradio"/>Onlangs op onderhoud</label>
                </div>
                <Table size="sm" bordered responsive>
                    <thead>
                        <tr>
                            <th>Klant</th>
                            <th>Kenteken</th>
                            <th>Merk</th>
                            <th>Kilometerstand</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.state.rawData.map( item => {
                            return(
                                <Tabellenrij data={ item }/>
                            );
                        })}
                    </tbody>
                </Table>
            </div>
        );
    }
}
 
export default Overzicht;