import React, { Component } from 'react';

class Tabellenrij extends Component {
    render() { 
        return (
            <tr>
                <td>{ this.props.data.klantnaam }</td>
                <td>{ this.props.data.kenteken }</td>
                <td>{ this.props.data.automerk.merknaam }</td>
                <td>{ this.props.data.kilometerstand }</td>
            </tr>
        );
    }
}
 
export default Tabellenrij;