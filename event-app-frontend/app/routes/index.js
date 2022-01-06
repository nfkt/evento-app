import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import CalenderEvents from "../pages/calender-events";
import ViewEvents from "../pages/event-details";
import MainPage from "../pages/main-page";
import Login from "../pages/login";
import PastEvents from "../pages/past-events";
import UpcomingEvents from "../pages/upcoming-events";
import Home from "../pages/home";


function Paths() {



    return (
        <BrowserRouter>


            <Routes>

                <Route path="/" element={<Login />} />
                <Route path="/user/" element={<MainPage />} >
                    <Route index element={<Home />} />
                    <Route path="upcoming-events/" element={<UpcomingEvents />} />
                    <Route path="past-events" element={<PastEvents />} />
                    <Route path="calender-events" element={<CalenderEvents />} />
                    <Route path="view-event/:id/" element={<ViewEvents />} />

                </Route>



            </Routes>
        </BrowserRouter>
    )
}

export default Paths;