import {useState}  from "react";
import Header from "../tools/Header";
import Footer from "../tools/Footer";
<<<<<<< HEAD
import { Carousel } from "antd";
import file_img from "../components/img/main__img/file_logo.png"
=======
import "./Sertification.scss";

>>>>>>> c9c7877 (aaa)

import poryadok_zhalob from "../components/files/serification/poryadok_zhalob.pdf"
import sertification_schema from "../components/files/serification/sertification_schema.pdf"
import politic_conf from "../components/files/serification/politic_conf.pdf"
import politic_non_involve from "../components/files/serification/politic_non_invol.pdf"
import politic_cancel from "../components/files/serification/politic_cancel.pdf"
import politic_accordance from "../components/files/serification/politic_accordance.pdf"
import politic_distance from "../components/files/serification/politic_distance.pdf"

const files = [
    { name: "Порядок жалоб", link: poryadok_zhalob },
    { name: "Схема сертификации", link: sertification_schema },
    { name: "Политика конфиденциальности", link: politic_conf },
    { name: "Политика невовлеченности", link: politic_non_involve },
    { name: "Политика отмены", link: politic_cancel },
    { name: "Политика согласования", link: politic_accordance },
    { name: "Политика дистанции", link: politic_distance },
];



const Sertification = () => {
    const [index,setIndex] = useState()

    const renderFilesGroup = () => {
        return (
        <div className="files_item" style={{ display: 'flex', justifyContent: 'space-around', width: '100%' }}>
            {files.map((file) => (
                <div style={{ width: '30%' }}>
                        <a href={file.link} onClick={(e) => { e.preventDefault(); window.open(file.link, '_blank'); }}>
<<<<<<< HEAD
                            <img src={file_img} style={{ width: "10rem" }} />
=======
>>>>>>> c9c7877 (aaa)
                            {file.name}
                        </a>
                </div>
            )
            
            
        )}
        </div>
        )
    };

    

    return (
        <>
            <Header />
            <span className="sertification_title">НОРМАТИВНЫЕ ДОКУМЕНТЫ, ИСПОЛЬЗУЕМЫЕ ПРИ ВЫПОЛНЕНИИ РАБОТ ПО СЕРТИФИКАЦИИ СИСТЕМ МЕНЕДЖМЕНТА</span>
            <div className="sertification_list">
                <li>ГОСТ Р ИСО 9001-2015 Системы менеджмента качества. Требования</li>
                <li>ГОСТ Р ИСО 14001-2016 Системы экологического менеджмента. Требования и руководство по применению</li>
                <li>ГОСТ Р ИСО 45001-2020. Системы менеджмента безопасности труда и охраны здоровья. Требования и руководство по применению.</li>
                <li>ГОСТ Р ИСО/МЭК 17021-1-2017 Оценка соответствия. Требования к органам, проводящим аудит и сертификацию систем менеджмента</li>
            </div>

            <div style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
<<<<<<< HEAD
                <Carousel autoplay dotPosition="bottom" effect="scrollx" style={{ width: "60vw", height: "45vh" }}>
                    {[...Array(totalSlides)].map((_, index) => (
                        <div key={index}>
                            {renderFilesGroup(index)}
                        </div>
                    ))}
                </Carousel>
=======
                {renderFilesGroup()}
>>>>>>> c9c7877 (aaa)
            </div>
            <Footer />
        </>
    );
}

export default Sertification;


