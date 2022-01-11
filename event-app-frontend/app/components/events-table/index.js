import React, { useEffect, useState } from "react";
import './index.css';

function EventsTable(props) {

    const [tHeader, setTHeader] = useState(['Event Title', 'Status', 'Start Date', 'Actions']);
    const [tRow, setTrow] = useState([
        {
            'Event Title': "React",
            'Status': "Active",
            'Start Date': "20/12/2021",
            'Actions': 'Completed'

        },
        {
            'Event Title': "Angular",
            'Status': "Inactive",
            'Start Date': "20/01/2021",
            'Actions': "Inactive"
        },
        {
            'Event Title': "Vue",
            'Status': "Inactive",
            'Start Date': "20/01/2021",
            'Actions': "Deactivate"
        }
    ]);


    useEffect(() => {
        if (props.titles)
            setTHeader(props.titles);
        if (props.content)
            setTrow(props.content);

    }, [props.titles, props.content])


    return (
        <center>
            <table id="events">
                <tbody>
                    <tr>
                        {tHeader.map((item, i) =>

                            <th key={i}>{tHeader[i]}</th>

                        )}

                    </tr>
                    {tRow.map((item, i) =>
                        <tr key={i}>
                            {Object.entries(item).map((itemTitle, key) =>
                                <td key={key} onClick={props.onClick}>{itemTitle[1]}</td>
                            )}

                        </tr>
                    )}
                </tbody>



            </table>
        </center>

    )
}

export default EventsTable;