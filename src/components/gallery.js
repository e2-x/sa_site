import React, { Component } from 'react'
import Gallery from 'react-grid-gallery'

import '../style/App.css';
import '../style/gallery.css';

import img1 from '../img/spray_1.jpg';
import img2 from '../img/spray_2.jpg';
import img3 from '../img/spray_3.jpg';
import img4 from '../img/spray_4.jpg';
import img5 from '../img/spray_5.jpg';
import img6 from '../img/spray_6.jpg';

function importAll(r){
    let images = [];
    images.push(r);
    console.log(typeof(r));
    console.log(r);
    return images
}

const IMAGES = 
        [{
            src: img1,
            thumbnail: img1,
            thumbnailWidth: 520,
            thumbnailHeight: 570 
        },
        {
            src: img2,
            thumbnail: img2,
            thumbnailWidth: 320,
            thumbnailHeight: 270 
        },
        {
            src: img3,
            thumbnail: img3,
            thumbnailWidth: 520,
            thumbnailHeight: 570 
        },
        {
            src: img4,
            thumbnail: img4,
            thumbnailWidth: 520,
            thumbnailHeight: 570 
        },
        {
            src: img5,
            thumbnail: img5,
            thumbnailWidth: 520,
            thumbnailHeight: 570 
        },
        {
            src: img6,
            thumbnail: img6,
            thumbnailWidth: 520,
            thumbnailHeight: 570 
        }]

class gallery extends Component{
    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
    }

    callAPI() {
        fetch("http://localhost:5000/api/img")
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
            )
        }
    }

    render(){

        const imgImport = importAll(this.state.apiResponse);
        // console.dir(this.state.apiResponse);
        return (
            <div className="gallery_div">
                <Gallery images={IMAGES} lightboxWidth={500}/>
            </div>
        );
    }
}

export default gallery;