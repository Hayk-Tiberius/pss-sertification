import React from "react"
import Header from "../../tools/Header"
import CompanyHeader from "./CompanyHeader"
//SCSS В STRUCTURE

const Partners = () => {
    return ( 
        <>
        <Header/>
        <CompanyHeader/>
        <main>
            <span>
                Профессиональные объединения (партнерства):
            </span>
            <div className="partners__block">
                <div></div>
                <div></div>
                <div></div>
            </div>
            
        </main>
        </>
    )
}

export default Partners