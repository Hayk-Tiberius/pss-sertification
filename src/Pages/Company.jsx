import Header from "../tools/Header.jsx"
import CompanyHeader from "./company pages/CompanyHeader.jsx"
import Footer from "../tools/Footer";

const Company = () => {
    return (
        <>
        <Header />
        <CompanyHeader />
        <main>
            <section 
                style={{ textAlign:"justify",width:"50%",border:"0.1rem white solid", boxShadow:"0 0 3rem 0.4rem rgba(0,0,0,0.3)", fontSize:"1.11rem", overflow:"hidden", padding:"0rem 2rem 2rem 2rem", borderRadius:"3rem"}}>
                <span style={{lineHeight:"6rem",fontSize:"2rem", textDecoration:"underline"}}>О компании</span> <br/>
                <span style={{lineHeight:"2.2rem",}}>«ПРОМСТРОЙ-Сертификация» – это аккредитованный орган по сертификации.  
                    Мы проводим сертификацию в организациях различных отраслей народного хозяйства,   
                    на соответствие требованиям международных и национальных стандартов, а также 
                    отраслевых норм. Выдаваемые нами сертификаты соответствия действуют и признаются
                    на всей территории Российской Федерации и стран Таможенного союза.
                </span>
            </section>
            <section style={{ textAlign:"justify",width:"50%",border:"0.1rem white solid", boxShadow:"0 0 3rem 0.4rem rgba(0,0,0,0.3)", fontSize:"1.11rem", overflow:"hidden", padding:"0rem 2rem 2rem 2rem", borderRadius:"3rem"}}>
                <span style={{lineHeight:"6rem",fontSize:"2rem", textDecoration:"underline"}}>О компании</span> <br/>
                <span style={{lineHeight:"2.2rem",}}>«ПРОМСТРОЙ-Сертификация» – это аккредитованный орган по сертификации.  
                    Мы проводим сертификацию в организациях различных отраслей народного хозяйства,   
                    на соответствие требованиям международных и национальных стандартов, а также 
                    отраслевых норм. Выдаваемые нами сертификаты соответствия действуют и признаются
                    на всей территории Российской Федерации и стран Таможенного союза.
                </span>
            </section>
        </main>
        <Footer />
        </>
    )
}

export default Company