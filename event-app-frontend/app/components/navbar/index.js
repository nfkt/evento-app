import React from "react";
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faBars, faCalendar, faPowerOff } from '@fortawesome/free-solid-svg-icons'
import SearchBar from "./search-bar";
import SizedBox from "../sized-box";

function Navbar() {

    const openMenu = () => {
        document.querySelector(".sidebar").classList.add("open");
    }

    

    return (
        <div>
            <div className="mainFlex">

                <div className="flexLeftItem">
                    <SizedBox width="10px" />
                    <FontAwesomeIcon icon={faBars} size="4x" onClick={openMenu} />
                    <div>
                        Event Oh
                    </div>
                </div>

                <div className="flexRightItem">

                    <FontAwesomeIcon icon={faCalendar} size="2x" />
                    <SearchBar />
                    <FontAwesomeIcon icon={faPowerOff} size="2x" />
                    <div className="sizedBox" />

                </div>
            </div>
        </div>

    )
}

export default Navbar;