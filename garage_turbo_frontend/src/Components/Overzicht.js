import React, { Component } from 'react';
import { Table } from 'reactstrap';
import API from './../Library/API';
import Tabellenrij from './TabellenRij';

class Overzicht extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            rawData: [],
            filteredData: []
        }
    }

    componentDidMount() {
        API.fetchData('http://localhost/garage_turbo/garage_turbo_backend/public/api')
        .then( data => {
            this.setState({
                isLoaded: true,
                rawData: data,
                filteredData: data
            })
        })
        .catch( error => {
            console.log(error)
        });
    }

    filterOne() {
        var filtered = this.state.rawData;
        this.setState({
            filteredData: filtered
        });
    }

    filterTwo() {
        var filtered = this.state.rawData.filter(
            item => item.kilometerstand > (item.vorigeStand + item.automerk.beurtInterval - 5000));
        this.setState({
            filteredData: filtered
        });
    }

    filterThree() {
        var filtered = this.state.rawData.filter(
            item => item.kilometerstand < (item.vorigeStand + 5000));
        this.setState({
            filteredData: filtered
        });
    }

    render() { 
        if(this.state.isLoaded) {
            return (
                <div className="normal-page">
                    <div className="space-below">
                        <b>Overzicht klanten</b>
                    </div>
                    <div className="radio">
                        <label className="radio-label"><input type="radio" name="optradio" onChange={ this.filterOne.bind(this) }/>
                            Toon alle auto's
                        </label>
                    </div>
                    <div className="radio">
                        <label className="radio-label"><input type="radio" name="optradio" onChange={this.filterTwo.bind(this) }/>
                            Binnenkort op onderhoud
                        </label>
                    </div>
                    <div className="radio space-below">
                        <label className="radio-label"><input type="radio" name="optradio" onChange={ this.filterThree.bind(this) }/>
                            Onlangs op onderhoud
                        </label>
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
                            { this.state.filteredData.map( item => {
                                return(
                                    <Tabellenrij data={ item }/>
                                );
                            })}
                        </tbody>
                    </Table>
                </div>
            );
        } else {
            return (
                <div className="normal-page">
                    <div className="space-below">
                        <b>Overzicht klanten</b>
                    </div>
                    <div className="radio">
                        <label className="radio-label"><input type="radio" name="optradio" disabled/>
                            Toon alle auto's
                        </label>
                    </div>
                    <div className="radio">
                        <label className="radio-label"><input type="radio" name="optradio" disabled/>
                            Binnenkort op onderhoud
                        </label>
                    </div>
                    <div className="radio space-below">
                        <label className="radio-label"><input type="radio" name="optradio" disabled/>
                            Onlangs op onderhoud
                        </label>
                    </div>
                    <div>
                        Het overzicht wordt geladen...
                    </div>
                </div>
            );
        }
    }
}
 
export default Overzicht;