import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Student from "./Student";
import Contact from "./Contact";
import StoreData from "./Store";
import AddStudent from "./AddStudent";
import EditStudent from "./EditStudent";
import LinkComp from "./LinkComp";

const RouteComp = () => {
    const [data, setData] = useState([
        { Name: 'Prince', Age: 20, Course: 'MERN', Batch: "EA23" },
        { Name: 'Percy', Age: 22, Course: 'MERN', Batch: "EA23" },
        { Name: 'John', Age: 21, Course: 'MERN', Batch: "EA23" },
        { Name: 'Wick', Age: 25, Course: 'MERN', Batch: "EA23" },
        { Name: 'Jackson', Age: 24, Course: 'MERN', Batch: "EA23" }
    ])
    return (
        <>
            <BrowserRouter >
               <LinkComp />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/students" element={
                        <StoreData.Provider value={{ stdName: data, updateStd: setData }}>
                            <Student />
                        </StoreData.Provider>
                    } />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/students/addstudent" element={
                        <StoreData.Provider value={{ stdName: data, updateStd: setData }}>
                            <AddStudent />
                        </StoreData.Provider>
                    } />
                    <Route path="/editstudent" element={
                        <StoreData.Provider value={{ stdName: data, updateStd: setData }}>
                            <EditStudent />
                        </StoreData.Provider>
                    } />
                </Routes>
            </BrowserRouter>

        </>
    )
}

export default RouteComp