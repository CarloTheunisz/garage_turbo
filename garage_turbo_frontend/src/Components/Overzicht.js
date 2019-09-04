import React, { Component } from 'react';
import { Table } from 'reactstrap';

class Overzicht extends Component {
    render() { 
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
                        <tr>
                            <td>Jean-Pierre</td>
                            <td>47-PZM-1</td>
                            <td>Honda</td>
                            <td>7979</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        );
    }
}
 
export default Overzicht;