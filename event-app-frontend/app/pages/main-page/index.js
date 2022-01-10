import React, { useEffect, useState } from 'react';
import Navbar from '../../components/navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose, faSearch, faCalendar, faFastForward, faCheckCircle, faStopCircle } from '@fortawesome/free-solid-svg-icons';
import UpcomingEvents from '../upcoming-events';
import SizedBox from '../../components/sized-box';
import './index.css';
import CreateEvent from '../../components/create-event';
import SideBar from '../../components/sidebar';
import { Outlet, useNavigate } from 'react-router-dom';


function MainPage() {

    const navigate = useNavigate();

    const [dimension, setDimension] = useState({})
    const [sideCheck, setSideCheck] = useState(false);

    useEffect(() => {
        console.log("width");
        // navbarCheck();
        setDimension({
            height: window.innerHeight,
            width: window.innerWidth
        })
    }, [sideCheck]);

    const navbarCheck = () => {
        if (document.querySelector('.sidebar').classList.contains('open')) {
            setSideCheck(true);
        } else {
            setSideCheck(false);
        }

    }

    const navigateEvents = (eventype) => {
        navigate(`/user/${eventype}`);
    }

    const clickMenu = () => {
        if (!sideCheck) {
            document.querySelector(".sidebar").classList.add("open");
            setSideCheck(true);
        } else {
            document.querySelector('.sidebar').classList.remove('open');
            setSideCheck(false);
        }

    }

    return (<div className="container">
        <nav>
            <Navbar onCalenderClick={() => navigateEvents("calender-events")} openMenu={clickMenu} />
        </nav>


        <main>
            <div>{dimension.height}, {dimension.width}</div>
            <Outlet />
        </main>

        <div className="sidebar">

            {sideCheck ?
                <ul>
                    {dimension.width > 1000 ? (<>
                        <SizedBox height="20vh" /></>) : null}
                    <li onClick={() => navigateEvents("upcoming-events")}>Upcoming Events</li>
                    <li>Cancelled Events</li>
                    <li>Past Events</li>
                </ul> : <div>
                    <div className='sideBarIcons'><FontAwesomeIcon icon={faSearch} size="3x" color="#91A4B7" /></div>
                    <div className='sideBarIcons'><FontAwesomeIcon icon={faCalendar} size="3x" color="#91A4B7" /></div>
                    <div className='sideBarIcons'><FontAwesomeIcon icon={faFastForward} size="3x" color="#91A4B7" /></div>
                    <div className='sideBarIcons'><FontAwesomeIcon icon={faCheckCircle} size="3x" color="#91A4B7" /></div>
                    <div className='sideBarIcons'><FontAwesomeIcon icon={faStopCircle} size="3x" color="#91A4B7" /></div>
                </div>}
            {/* <SideBar listContent = {["Upcoming Events"]} listItemFn={[navigateEvents("upcoming-events")]} /> */}
        </div>
    </div>
    )
}

export default MainPage;