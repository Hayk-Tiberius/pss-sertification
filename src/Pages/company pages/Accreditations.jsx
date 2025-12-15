import React from "react"
import Header from "../../tools/Header"
import Footer from "../../tools/Footer";
import CompanyHeader from "./CompanyHeader"

import Oblast from "../../components/img/accreditaions/Oblast.pdf"
import Attestat from "../../components/img/accreditaions/Attestat.pdf"
import System from "../../components/img/accreditaions/System.pdf"
import File from "../../components/img/main__img/file_logo.png"

const accreditaions_files = [
    { name: "Порядок жалоб", link: Oblast },
    { name: "Схема сертификации", link: Attestat },
    { name: "Политика конфиденциальности", link:System },
]

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
                   {accreditaions_files.map((file) => (
                    <div>
                        <a href={file.link} onClick={(e) => { e.preventDefault(); window.open(file.link, '_blank') }} 
                            style={{ width: '100%', fontSize:"1.8rem",display:"flex",flexDirection:"column", alignItems:"center"  }}>
                                <img src={File} alt="" style={{width: "50%", textAlign:"center"}} />
                                <span style={{ textAlign: "center" }}>{file.name}</span>
                        </a>
                    </div>)
                    )} 
                    
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Accreditations