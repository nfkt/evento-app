import React from 'react';
import Navbar from '../../components/navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindowClose, faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons'
import SizedBox from '../../components/sized-box';
import EventTile from '../../components/event-tile';
import './index.css';


function Admin() {

    const closeMenu = () => {
        document.querySelector('.sidebar').classList.remove('open');
    };

    return (
        <div>
            <div className="container">
                <nav>
                    <Navbar />
                </nav>
                <main>
                    <SizedBox height="100px" width="100%" />

                    <EventTile />
                    <SizedBox height="1rem" />
                    <EventTile />
                    <SizedBox height="1rem" />
                    <EventTile />
                    <SizedBox height="1rem" />  
                    <FontAwesomeIcon icon={faAngleDoubleDown} size="3x" />



                </main>
                <div className="sidebar">
                    <FontAwesomeIcon icon={faWindowClose} size="2x" onClick={closeMenu} />
                    <SizedBox height="20vh" />
                    <ul>
                        <li>Upcoming Events</li>
                        <li>Past Events</li>
                        <li>Cancelled Events</li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Admin;