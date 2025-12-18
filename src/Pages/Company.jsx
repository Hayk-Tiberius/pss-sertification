import { useState } from 'react';
import Header from "../tools/Header.jsx"
import CompanyHeader from "./company pages/CompanyHeader.jsx"
import Footer from "../tools/Footer";



const history = [
    { year: "1999", text: "14 октября зарегистрировано ООО «ПРОМСТРОЙ-Сертификация» для оказания услуг по независимой оценке систем менеджмента в организациях строительного комплекса" },
    { year: "2001", text: "В составе организации в системе «Мосстройстройсертификация» аккредитован орган по сертификации «ПРОМСТРОЙ-Сертификация» в области систем менеджмента качества.Проведена первая сертификации организации на соответствие требованиям ГОСТ Р ИСО 9001." },
    { year: "2003", text: "Расширена область аккредитации «ПРОМСТРОЙ-Сертификация» в части систем экологического менеджмента (ИСО 14001) и систем менеджмента безопасности (OHSAS 18001)" },
    { year: "2004", text: "Заключен договор о партнерстве с международным сертификационным обществом Det Norske Veritas (DNV) по проведению аудитов систем менеджмента." },
    { year: "2009", text: "Заключен договор о партнерстве с ООО «Интерсертифика-ТЮФ совместно с ТЮФ Тюренген» по проведению аудитов систем менеджмента совместно с международным сертификационным обществом TÜV Thürengen" },
    { year: "2010", text: "В составе организации аттестованы эксперты для аккредитации лабораторий в строительстве по ИСО/МЭК 17025.Получено свидетельство об аккредитации Саморегулируемой организации (некоммерческим партнерством) «Первая национальная организация строителей» о соответствии услуг ООО «ПРОМСТРОЙ-Сертификация» требованиям партнерства." },
    { year: "2011", text: "Аккредитация в федеральной службе по аккредитации" },
    { year: "2017", text: "Расширена область по сертификации ФСА Уполномочен в качества органа по сертификации в СДС Система" }
]

const Company = () => {

    const [index, setIndex] = useState()

    function Prev() {
        setIndex(index - 1)
    }

    function Next() {
        setIndex(index + 1)
    }

    return (
        <>
            <Header />
            <CompanyHeader />
            <main>
                <section
                    style={{ textAlign: "justify", width: "50%", border: "0.1rem white solid", boxShadow: "0 0 3rem 0.4rem rgba(0,0,0,0.3)", fontSize: "1.11rem", overflow: "hidden", padding: "0rem 2rem 2rem 2rem", borderRadius: "3rem" }}>
                    <span style={{ lineHeight: "6rem", fontSize: "2rem", textDecoration: "underline" }}>О компании</span> <br />
                    <span style={{ lineHeight: "2.2rem", }}>«ПРОМСТРОЙ-Сертификация» – это аккредитованный орган по сертификации.
                        Мы проводим сертификацию в организациях различных отраслей народного хозяйства,
                        на соответствие требованиям международных и национальных стандартов, а также
                        отраслевых норм. Выдаваемые нами сертификаты соответствия действуют и признаются
                        на всей территории Российской Федерации и стран Таможенного союза.
                    </span>
                    <button></button>
                </section>
                <section style={{ textAlign: "justify", width: "50%", border: "0.1rem white solid", boxShadow: "0 0 3rem 0.4rem rgba(0,0,0,0.3)", fontSize: "1.11rem", overflow: "hidden", padding: "0rem 2rem 2rem 2rem", borderRadius: "3rem" }}>
                    {history.map((item, index, arr) => (
                        <div key={index}>
                            {arr[index].year}

                        </div>

                    ))}
                    <button onClick={Next} style={{ color: "white", cursor: "pointer", borderRadius: "1rem", width: "7vw", height: "3.7vh", background: "#111", border: "none" }}
                        type="submit" name="access_key" >                  </button>
                    <button onClick={Prev}></button>
                </section>
            </main>
            <Footer />
        </>
    )

}

export default Company