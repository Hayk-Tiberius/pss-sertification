import React from "react"
import Header from "../../tools/Header"
import Footer from "../../tools/Footer";
import CompanyHeader from "./CompanyHeader"
import "../../Pages/company pages/Structure.scss"
import photo1 from "../../components/img/structure/Structure.PNG"


const Structure = () => {
    return ( 
        <>
        <Header/>
        <CompanyHeader/>
        <main>
            <div>
            <span>Организационная структура Органа по сертификации систем менеджмента качества ООО ПРОМСТРОЙ-Сертификация</span><br/>
            <span>ОС – орган по сертификации систем менеджмента качества ООО ПРОМСТРОЙ-Сертификация</span><br/>
            <img src={photo1} alt="" /><br/>
            <span>* - комиссия формируется на период рассмотрения апелляции или жалобы</span>
            </div>
        </main>
        <Footer />
        </>
    )
}

export default Structure