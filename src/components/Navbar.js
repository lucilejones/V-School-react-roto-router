import React from "react";
import { Link } from "react-router-dom"

function Navbar() {
    return (
        <nav className="nav-container">
            <Link className="text-link" to="/">
                Home
            </Link>
            <Link className="text-link" to="/about">
                About
            </Link>
            <Link className="text-link" to="/services">
                Services
            </Link>
            <Link className="text-link" to="/contact">
                Contact
            </Link>
        </nav>
    )
}

export default Navbar