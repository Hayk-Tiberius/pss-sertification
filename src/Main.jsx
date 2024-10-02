import React from "react";
import { Link } from "react-router-dom";
import VideoSlider from "./tools/VideoSlider.js"
import Header from "./tools/Header";
import video1 from "./components/video/slider1.mp4"
import video2 from "./components/video/slider2.mp4"
import video3 from "./components/video/slider3.mp4"
import "./Slider.scss";

const Main = () => {
    const slides = [
        video1,
        video2,
        video3,
    ]
    return (
        <>
        <Header />
        <section className="slider">
            <VideoSlider slides={slides} />
        
        </section>
        <section className="sertification">
            <Link to="Sertification.jsx">
            <div className="sertification__title">О сертификации</div>
            </Link>
        </section>
        </>
    )
}

export default Main