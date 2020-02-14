import React from 'react'
import logo_v2 from '../img/logo_v2.png'

import '../style/logo.css'

function logo() {
    return (
        <div className="logo_div">
            <img src={logo_v2} alt="notfound"/>
            <h3>Placeholder</h3>
        </div>
    );
}

export default logo;