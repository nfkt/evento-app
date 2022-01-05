import React, { useState } from 'react';
import Navbar from '../../components/navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import UpcomingEvents from '../upcoming-events';
import SizedBox from '../../components/sized-box';
import './index.css';
import CreateEvent from '../../components/create-event';

import { Outlet, useNavigate } from 'react-router-dom';


function Home() {
  
    const navigate = useNavigate();

    const changeEvent = (event) => {

        setEvent(event);
    }

    const navigateEvents = (eventype)=>{
            navigate(`/user/${eventype}`);
    }

    const openMenu = () => {
        document.querySelector(".sidebar").classList.add("open");
    }

    const closeMenu = () => {
        document.querySelector('.sidebar').classList.remove('open');
    }
    return (<div className="container" onLoad={openMenu}>
        <nav>
            <Navbar onCalenderClick={() => navigateEvents("calender-events")} />
        </nav>


        <main>
            <Outlet />
        </main>

        <div className="sidebar">
            
            <FontAwesomeIcon icon={faWindowClose} size="2x" onClick={closeMenu} />
            <SizedBox height="20vh" />
            
            <ul>
                <li onClick={() => navigateEvents("upcoming-events")}>Upcoming Events</li>
                <li onClick={() => changeEvent('CANCELLED_EVENT')}>Cancelled Events</li>
                <li onClick={() => changeEvent('PAST_EVENT')}>Past Events</li>
            </ul>
        </div>
    </div>
    )
}

export default Home;