import React, { Component } from 'react'
// import Gallery from 'react-grid-gallery'
import Gallery from 'react-awesome-slider'


import '../style/App.css';
import '../style/gallery.css';

import img1 from '../img/spray_1.jpg';
import img2 from '../img/spray_2.jpg';
import img3 from '../img/spray_3.jpg';
import img4 from '../img/spray_4.jpg';
import img5 from '../img/spray_5.jpg';
import img6 from '../img/spray_6.jpg';

import AwesomeSlider from 'react-awesome-slider';

import AnimationStyles from 'react-awesome-slider/src/styled/fold-out-animation/fold-out-animation.scss';
import CoreStyles from 'react-awesome-slider/src/core/styles.scss'

import 'react-awesome-slider/dist/styles.css';

function importAll(r){
    let images = [];
    images.push(r);
    console.log(typeof(r));
    console.log(r);
    return images
}

// TODO: Switch to AwesomeSlider for displaying images
const IMAGES = (
    <AwesomeSlider animation="foldOutAnimation" cssModule={CoreStyles}>
        <div data-src={img1}/>
        <div data-src={img2}/>
        <div data-src={img3}/>
        <div data-src={img4}/>
        <div data-src={img5}/>
    </AwesomeSlider>
);

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
        return (
            <div className="gallery_div">
                {IMAGES}
            </div>
        );
    }
}

export default gallery;