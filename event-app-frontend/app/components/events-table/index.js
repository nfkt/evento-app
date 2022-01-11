import React from "react";
import './index.css';

function EventsTable(props) {

    const [tHeader, setTHeader] = useState({});
    const [tRow, setTrow]=useState([]);


    return (
        <center>
            <table id="events">
                <tr>
                    <th>Event Title</th>
                    <th>Status</th>
                    <th>Start Date</th>
                    <th>Actions</th>
                </tr>
                <tr>
                    <td>Alfreds Futterkiste</td>
                    <td>Maria Anders</td>
                    <td>Germany</td>
                    <td>Germany</td>
                </tr>
                
            </table>
        </center>

    )
}

export default EventsTable;