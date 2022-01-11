import React, { useEffect, useState } from "react";
import './index.css';

function EventsTable(props) {

    const [tHeader, setTHeader] = useState([]);
    const [tRow, setTrow] = useState([
        {
            'Event Title': "React",
            'Status': "Active",
            'Start Date': "20/12/2021",
            'Actions': 'Completed',
            'End Date': "20/12/2021"

        },
        {
            'Event Title': "Angular",
            'Status': "Inactive",
            'Start Date': "20/01/2021",
            'Actions': "Inactive",
            'End Date': "20/12/2021"
        },
        {
            'Event Title': "Vue",
            'Status': "Inactive",
            'Start Date': "20/01/2021",
            'Actions': "Deactivate",
            'End Date': "20/12/2021"
        }
    ]);
const checkPage = (page,tHeader, tRow)=>{
    switch (page){
        case 'UPCOMING_EVENT':
            console.log("UPCOMING EVENT");
            // setTHeader(props.titles);
            tHeader = tHeader.filter((title, i)=>{return title !== 'End Date'});
            setTHeader(tHeader);
            tRow = tRow.filter((content, i)=>{ return delete content["End Date"]})
            setTrow(tRow);
            break;

        case 'COMPLETED_EVENT':
            console.log("COMPLETED EVENT");
            tHeader = tHeader.filter((title, i)=>{return title !== 'Actions'});
            setTHeader(tHeader);
            tRow = tRow.filter((content, i)=>{ return delete content["Actions"]})
            setTrow(tRow);
            break;
            
        case 'CANCELLED_EVENT':
            console.log("CAMCELLED EVENT");
            break;
        default:
            console.log("Nothing Selected")
    }


}

    useEffect(() => {
        if (props.titles)
            setTHeader(props.titles);
            checkPage(props.eventType, props.titles, tRow);
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