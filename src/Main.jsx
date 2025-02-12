import React from "react";
import { Link } from "react-router-dom";
import VideoSlider from "./tools/VideoSlider.js"
import Header from "./tools/Header";
import Footer from "./tools/Footer";
import video1 from "./components/video/slider1.mp4"
import video2 from "./components/video/slider2.mp4"
import video3 from "./components/video/slider3.mp4"
import photo1 from "..//src/components/img/main__img/achievement.png"
import photo3 from "..//src/components/img/main__img/ecology.png"
import photo2 from "..//src/components/img/main__img/quality.png"
import "./Slider.scss";
import "./Main.scss";


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
            <Link to="/Sertification">
            <div className="sertification__title">О сертификации</div>
            </Link>
        </section>
        <section className="main_applications">
            <Link to="/QualityManagment">
            <div className="main_applications_item">
                <img src={photo1} alt="" />
                
                    <span>Менеджмент качества</span>
                
            </div>
            </Link>
            <Link to="/SecurityManagment">
                <div className="main_applications_item">
                    <img src={photo2} alt="" />
                    <span>Менеджмент безопасности</span>
                </div>
            </Link>
            <Link to="/EcologyManagment">
                <div className="main_applications_item">
                    <img src={photo3} alt="" />
                    <span>Экологический менеджмент</span>
                </div>
            </Link>
        </section>
        <Footer />
        </>
    )
}

export default Main