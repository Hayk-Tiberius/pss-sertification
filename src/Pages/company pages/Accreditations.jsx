import React from "react"
import Header from "../../tools/Header"
import Footer from "../../tools/Footer";
import CompanyHeader from "./CompanyHeader"
import Oblast from "../../components/img/accreditaions/Oblast.pdf"
import Attestat from "../../components/img/accreditaions/Attestat.pdf"
import System from "../../components/img/accreditaions/System.pdf"


const Accreditations = () => {
    return (
        <>
            <Header />
            <CompanyHeader />
            <section>
                <div className="accredititaon__title">Аккредитация в
                    <a href="https://pub.fsa.gov.ru/ral/view/13235/applicant" onClick={(e) => { e.preventDefault(); window.open("https://pub.fsa.gov.ru/ral/view/13235/applicant", '_blank'); }}>
                        Федеральной службе по аккредитации
                    </a>
                </div>
            </section>
            <section>
                <div className="accredititaon__grid">
                    <div><img src={Oblast} alt="Область аккредитации" />Область аккредитации</div>
                    <div><img src={Attestat} alt="Аттестат акредитации" />Аттестат аккредитации</div>
                    <div><img src={System} alt="Система добровольной сертификации Система" />Система добровольной сертификации "Система"</div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Accreditations