import React, { Component } from 'react';

import fb_logo from '../img/fb.png';

import '../style/contact.css'

function contact (){
    return(
        <div className="contact_div">
            <div>
                <a className="fa fa-facebook"/>
                <a className="fa fa-twitter"/>
                <a className="fa fa-instagram"/>
            </div>
        </div>
    );
}

export default contact;
