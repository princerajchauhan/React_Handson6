import React from "react";
import { NavLink } from "react-router-dom";
import './LinkComp.css'

const LinkComp = () => {
    return (
        <>
            <nav>
                <NavLink className="navStyle" to="/">Home</NavLink>
                <NavLink className="navStyle" to="/students">Students</NavLink>
                <NavLink className="navStyle" to="/contact">ContactUs</NavLink>
            </nav>
        </>
    )
}

export default LinkComp