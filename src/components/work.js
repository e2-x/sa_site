import React, { Component } from 'react'
import Gallery from 'react-grid-gallery'

import '../style/App.css';

const IMAGES = 
        [{
            src: 'http://i.imgur.com/5bMgMvP.png',
            thumbnail: 'http://i.imgur.com/5bMgMvP.png',
            thumbnailWidth: 320,
            thumbnailHeight: 174
        }]

class work extends Component{
    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
    }

    callAPI() {
        fetch("http://localhost:3000/api/hello")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }));
    }

    componentWillMount() {
        this.callAPI();
    }
    
    render(){
        return (
            <div className="gallery_div">
                <h3>Work</h3>
                <Gallery images={IMAGES}/>
            </div>
        );
    }
}

export default work;