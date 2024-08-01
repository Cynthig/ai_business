import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar">
            <h1>Market Trend Predictor</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/trends">Trends</Link></li>
                {/* <li><Link to="/recommendations">Recommendations</Link></li> */}
                <li><Link to="/reports">Reports</Link></li>
                <li><Link to="/settings">Settings</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
