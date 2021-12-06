import React from "react"
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
            </div>
            <ul>
                <li><Link to="/">HomePage</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </div>
    )
}

export default Header