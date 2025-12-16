import React from "react"
import Header from "../../tools/Header"
import Footer from "../../tools/Footer";
import CompanyHeader from "./CompanyHeader"
import "../company pages/Partners.scss"
import photo1 from "../../components/img/partners_logo/1nostr.png"
import photo2 from "../../components/img/partners_logo/logo.svg"
import photo3 from "../../components/img/partners_logo/spr.jpg"

const Partners = () => {
    return ( 
        <>
        <Header/>
        <CompanyHeader/>
        <main>
            <span className="partners__title">
                Профессиональные объединения (партнерства):
            </span>
            <div className="partners__block">
                <div className="partner__items">
                    <img src={photo3} alt="" width={"80%"} />
                    <a href="http://www.unpro.ru/">Союз проектировщиков Росии</a>
                </div>
                <div className="partner__items">
                    <img src={photo1} alt="" width={"80%"}/>
                    <a href="http://www.1nostr.ru/" className="partner__items__url">«Первая национальная организация строителей»</a>
                </div>
                <div className="partner__items">
                    <img src={photo2} alt="" width={"80%"}/>
                    <a href="https://np-moposs.ru/">Межрегиональное объединение СРО НП «МОПОСС»</a>
                </div>
            </div>
            
        </main>
        <Footer />
        </>
    )
}

export default Partners