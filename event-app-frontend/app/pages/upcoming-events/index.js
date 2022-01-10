import React from "react";
import SizedBox from "../../components/sized-box";
import EventTile from "../../components/event-tile";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';
import CreateEvent from "../../components/create-event";
import { useNavigate, Link } from "react-router-dom";


function UpcomingEvents() {
    const navigate = useNavigate();
    const navigateToEvent = (id)=>{
        navigate(`../view-event/${id}`);
       
    }


    return (
        <div>
            <SizedBox height="2vh" />

            <div className="alignButtonEnd">
                <SizedBox width="2vh" />
            </div>
            <SizedBox height="100px" width="100%" />
            <EventTile Click={()=> navigateToEvent(1)} />
            <SizedBox height="1rem" />
            <EventTile />
            <SizedBox height="1rem" />
            <EventTile />
            <SizedBox height="1rem" />
            <FontAwesomeIcon icon={faAngleDoubleDown} size="3x" />
        </div>

    )
}

export default UpcomingEvents;