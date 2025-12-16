import React from "react";
import { Link } from "react-router-dom";
import VideoSlider from "./tools/VideoSlider.js"
import Header from "./tools/Header";
import Footer from "./tools/Footer";
import "./Main.scss";

import video1 from "./components/video/slider1.mp4"
import video2 from "./components/video/slider2.mp4"
import video3 from "./components/video/slider3.mp4"
import profile from "../src/components/img/RON/profile.png"
import photo1 from "..//src/components/img/main__img/achievement.png"
import photo3 from "..//src/components/img/main__img/ecology.png"
import photo2 from "..//src/components/img/main__img/quality.png"

const Main = () => {
    const slides = [
        video1,
        video2,
        video3,
    ]
    return (
        <>
            <Header />
            <main>
            
                <section className="slider">
                    <div className="video_title">
                            <img src={profile} alt="" style={{width:"17%", border:"white 0.35rem solid", borderRadius:"15rem"}}/>
                        <div>
                            <span style={{color:"white", fontSize:"3.3rem", fontWeight:"900", lineHeight:"6rem"}}>Ромашко Олег Николаевич</span> <br/>
                            <span style={{color:"white", lineHeight:"2rem"}}>Директор, руководитель органа по сертификации <br/> систем менеджмента качества</span>
                            <hr />
                            <span style={{color:"white", lineHeight:"2rem"}}>Сертификация и независимая оценка <br/>
                                в промышленности и строительстве <br/>
                                тел. +7(499)578-26-59
                            </span>
                        </div>
                    </div>
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
            </main>
            <Footer />
        </>
    )
}

export default Main