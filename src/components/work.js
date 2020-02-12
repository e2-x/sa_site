import React, { Component } from 'react'
import Gallery from 'react-grid-gallery'

import '../style/App.css';

let images = {...this.state.apiResponse};

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
        fetch("http://localhost:3000/api/img")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }));
    }

    componentWillMount() {
        this.callAPI();
    }

    createGallery = () => {
        let imgList = [];
        for(let i = 0; i < this.state.apiResponse.length; i++){
            imgList.push(
                <Gallery images=
            )
        }
    }

    render(){
        console.log(this.state.apiResponse);
        return (
            <div className="gallery_div">
                <h3>Work</h3>
                <Gallery images={IMAGES}/>
            </div>
        );
    }
}

export default work;