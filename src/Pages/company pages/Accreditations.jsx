import React from "react"
import Header from "../../tools/Header"
import CompanyHeader from "./CompanyHeader"
import "../company pages/Accreditation.scss"



const Accreditations = () => {
    return ( 
        <>
        <Header/>
        <CompanyHeader/>
        <section>
            <div className="accredititaon__title">Аккредитация в 
                <a href="https://pub.fsa.gov.ru/ral/view/13235/applicant" onClick={(e) => { e.preventDefault(); window.open("https://pub.fsa.gov.ru/ral/view/13235/applicant", '_blank'); }}>
                    Федеральной службе по аккредитации
                </a>
           </div>
        </section>
        </>
    )
}

export default Accreditations