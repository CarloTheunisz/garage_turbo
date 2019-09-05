import React, { Component } from 'react';
import config from './../Config/Config';
import API from './../Library/API'

class Tabellenrij extends Component {
    onClick(event) {
        var id = event.target.name;
        API.fetchData(config.baseUrl + config.performOnderhoud + id, 'PUT')
        .catch( error => {
            console.log(error)
        });
    }

    render() { 
        return (
            <tr>
                <td>{ this.props.data.klantnaam }</td>
                <td>{ this.props.data.kenteken }</td>
                <td>{ this.props.data.automerk.merknaam }</td>
                <td>{ this.props.data.kilometerstand }</td>
                <td>{ this.props.data.beurtenAantal }</td>
                <td><button className="btn btn-primary btn-body" name={ this.props.data.id } onClick={ this.onClick.bind(this) }>Voer uit</button></td>
            </tr>
        );
    }
}
 
export default Tabellenrij;