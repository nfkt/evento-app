import React, { useEffect, useState } from "react";
import './index.css';

function EventsTable(props) {

    const [tHeader, setTHeader] = useState(['Event Title', 'Status', 'Start Date', 'Actions']);
    const [tRow, setTrow] = useState([{ 'Event Title': "React", 'Status': "Active" }, { 'Event Title': "Angular", 'Status': "Inactive" }]);


    useEffect(() => {

        
    })


    return (
        <center>
            <table id="events">
                <tr>
                    {tHeader.map((item, i) =>
                        <th>{tHeader[i]}</th>
                    )}
                 
                </tr>
                {tRow.map((item, i)=>
                    <tr>
                        <td>{item["Event Title"]}</td>
                        <td>{item["Status"]}</td>
                        <td>Germany</td>
                        <td>Germany</td>
                    </tr>
                )}


            </table>
        </center>

    )
}

export default EventsTable;