import React from 'react'
import { NavLink } from 'react-router-dom'

import '../style/nav.css'

function nav(){
    return (
        <div className="nav fixed">
            <h2>Placeholder</h2>
            <ul className="header">
                <li><NavLink exact to="/">About</NavLink></li>
                <li><NavLink to="/work">Work</NavLink></li>
            </ul>
        </div>
    );
}

export default nav;