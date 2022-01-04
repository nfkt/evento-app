import React, { useState } from 'react';
import Navbar from '../../components/navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import UpcomingEvents from '../upcoming-events';
import SizedBox from '../../components/sized-box';
import './index.css';
import CreateEvent from '../../components/create-event';


function Home() {
    const [event, setEvent] = useState('UPCOMING_EVENT');

    const changeEvent = (event) => {

        setEvent(event);
    }

    const closeMenu = () => {
        document.querySelector('.sidebar').classList.remove('open');
    }
    return (<div className="container">
        <nav>
            <Navbar />
        </nav>


        <main>
            {(() => {

                switch (event) {
                    case 'UPCOMING_EVENT':
                        return (
                            <div>
                                <SizedBox height="2vh" />

                                <div className="alignButtonEnd">
                                    <CreateEvent />
                                    <SizedBox width="2vh" />
                                </div>
                                <UpcomingEvents />
                            </div>
                        )
                    case 'CANCELLED_EVENT':
                        return (
                            <div>
                                Cancelled Event Page
                            </div>
                        )
                    case 'PAST_EVENT':
                        return (
                            <div>
                                Past Event Page
                            </div>
                        )
                    default:
                        return (
                            <UpcomingEvents />

                        )
                }

            })()}

        </main>

        <div className="sidebar">
            <FontAwesomeIcon icon={faWindowClose} size="2x" onClick={closeMenu} />
            <SizedBox height="20vh" />
            <ul>
                <li onClick={() => changeEvent('UPCOMING_EVENT')}>Upcoming Events</li>
                <li onClick={() => changeEvent('CANCELLED_EVENT')}>Cancelled Events</li>
                <li onClick={() => changeEvent('PAST_EVENT')}>Past Events</li>
            </ul>
        </div>
    </div>
    )
}

export default Home;