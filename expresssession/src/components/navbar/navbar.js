import React from 'react'
import { Link } from 'react-router-dom'
import classes from './navbar.module.css'
const Navbar = () => {

    return (
        <div className = {classes.link}>
            <span><Link to="/">Users</Link></span>
            <span><Link to="/addusers">Add Users</Link></span>
            <span><a href="http://localhost:5000/aboutus">About Us</a></span>
        </div>

    )
}


export default Navbar;