import React from 'react'
import {NavLink} from "react-router-dom";

export const Tabs = () => {
    return (
        <div className="header-tabs-container">
            <NavLink to="/" className='header-tab-link'>Home</NavLink>
            <NavLink to="/services" className='header-tab-link'>Services</NavLink>
            <NavLink to="/payments" className='header-tab-link'>Payments</NavLink>
        </div>
    )
}
