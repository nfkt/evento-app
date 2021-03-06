import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import CalenderEvents from "../pages/calender-events";
import ViewEvents from "../pages/event-details";
import MainPage from "../pages";
import Login from "../pages/login";
import PastEvents from "../pages/past-events";
import UpcomingEvents from "../pages/upcoming-events";
import CreateEventForm from "../pages/create-event-form";
import EditEventForm from "../pages/edit-event-form";
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
                    <Route path="create-event/" element={<CreateEventForm />} />
                    <Route path="edit-event/:id" element={<EditEventForm />} />

                </Route>



            </Routes>
        </BrowserRouter>
    )
}

export default Paths;