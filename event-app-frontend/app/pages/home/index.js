import React, { useState } from 'react';
import Navbar from '../../components/navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import UpcomingEvents from '../upcoming-events';
import SizedBox from '../../components/sized-box';
import './index.css';
import CreateEvent from '../../components/create-event';
import CalenderEvents from '../calender-events';
import ViewEvents from '../event-details';
import { Outlet, useNavigate } from 'react-router-dom';


function Home() {
    const [event, setEvent] = useState('UPCOMING_EVENT');
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
            {/* {(() => {

                switch (event) {
                    case 'UPCOMING_EVENT':
                        return (
                            <div>
                                <SizedBox height="2vh" />

                                <div className="alignButtonEnd">
                                    <CreateEvent />
                                    <SizedBox width="2vh" />
                                </div>
                                <UpcomingEvents SetEvent={() => changeEvent('VIEW_EVENT')} />
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
                    case 'CALENDER_EVENTS':
                        return (
                            <CalenderEvents />
                        )
                    case 'VIEW_EVENT':
                        return (
                            <div>
                                <SizedBox height="2vh" />
                                <ViewEvents />
                            </div>
                        )
                    default:
                        return (
                            <UpcomingEvents />

                        )
                }

            })()} */}

        </main>

        <div className="sidebar">
            <FontAwesomeIcon icon={faWindowClose} size="2x" onClick={closeMenu} />
            <SizedBox height="20vh" />
            <ul>
                {/* <li onClick={() => changeEvent('UPCOMING_EVENT')}>Upcoming Events</li> */}
                <li onClick={() => navigateEvents("upcoming-events")}>Upcoming Events</li>
                <li onClick={() => changeEvent('CANCELLED_EVENT')}>Cancelled Events</li>
                <li onClick={() => changeEvent('PAST_EVENT')}>Past Events</li>
            </ul>
        </div>
    </div>
    )
}

export default Home;