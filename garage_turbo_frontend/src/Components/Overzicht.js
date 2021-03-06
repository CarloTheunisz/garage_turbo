import React, { Component } from 'react';
import { Table } from 'reactstrap';
import config from './../Config/Config';
import API from './../Library/API';
import Header from './Header';
import Tabellenrij from './TabellenRij';

class Overzicht extends Component {
    intervalId = 0;

    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            rawData: [],
            filteredData: []
        }
    }

    componentDidMount() {
        API.fetchData(config.baseUrl, 'GET')
        .then( data => {
            this.setState({
                isLoaded: true,
                rawData: data,
                filteredData: data,
                radioChecked: false
            })
        })
        .catch( error => {
            console.log(error)
        });

        this.intervalId = setInterval(() => {
            API.fetchData(config.baseUrl, 'GET')
            .then( data => {
                if( data !== []) {
                    var filtered = this.filterData(data, this.state.radioChecked);
                    this.setState({
                        rawData: data,
                        filteredData: filtered
                    })
                }
            })
        }, 5000);
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    filterBinnenkort(data) {
        return data instanceof Array ? data.filter(item => item.kilometerstand > (item.vorigeStand + item.automerk.beurtInterval - 5000)) : data;
    }

    filterOnlangs(data) {
        return data instanceof Array ? data.filter(item => item.kilometerstand < (item.vorigeStand + 5000)) : data;
    }

    filterOne(event) {
        var filtered = this.state.rawData;
        this.setState({
            filteredData: filtered, 
            radioChecked: event.target.value
        });
    }

    filterTwo(event) {
        var filtered = this.filterBinnenkort(this.state.rawData);
        this.setState({
            filteredData: filtered,
            radioChecked: event.target.value
        });
    }

    filterThree(event) {
        var filtered = this.filterOnlangs(this.state.rawData);
        this.setState({
            filteredData: filtered,
            radioChecked: event.target.value
        });
    }

    filterData(data, filterType) {
        switch(filterType) {
            case '1':
                return data;
            case '2':
                return this.filterBinnenkort(data);
            case '3':
                return this.filterOnlangs(data);
            default:
                return data;
        }
    }

    render() { 
        if(this.state.isLoaded) {
            return (
                <React.Fragment>
                    <Header path={ this.props.location.pathname }/>
                    <div className="normal-page">
                        <div className="space-below">
                            <b>Overzicht klanten</b>
                        </div>
                        <div className="radio">
                            <label className="radio-label"><input type="radio" name="optradio" value="1" onChange={ this.filterOne.bind(this) }/>
                                Toon alle auto's
                            </label>
                        </div>
                        <div className="radio">
                            <label className="radio-label"><input type="radio" name="optradio" value="2" onChange={this.filterTwo.bind(this) }/>
                                Binnenkort op onderhoud
                            </label>
                        </div>
                        <div className="radio space-below">
                            <label className="radio-label"><input type="radio" name="optradio" value="3" onChange={ this.filterThree.bind(this) }/>
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
                                    <th>Aantal onderhoudsbeurten</th>
                                    <th>Onderhoud</th>
                                </tr>
                            </thead>
                            <tbody>
                                { this.state.filteredData instanceof Array ? this.state.filteredData.map( item => {
                                    return(
                                        <Tabellenrij data={ item }/>
                                    );
                                }) : null }
                            </tbody>
                        </Table>
                    </div>
                </React.Fragment>
            );
        } else {
            return (
                <React.Fragment>
                    <Header path={ this.props.location.pathname }/>
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
                </React.Fragment>
            );
        }
    }
}
 
export default Overzicht;