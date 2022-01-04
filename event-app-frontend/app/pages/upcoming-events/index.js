import React from "react";
import SizedBox from "../../components/sized-box";
import EventTile from "../../components/event-tile";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';

function UpcomingEvents(){



    return(
        <div>
        <SizedBox height="100px" width="100%" />
        <EventTile />
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