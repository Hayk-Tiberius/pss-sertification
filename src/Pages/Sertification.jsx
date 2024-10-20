import React from "react";
import Header from "../tools/Header";
import "./Sertification.scss"

import poryadok_zhalob  from "../components/files/serification/poryadok_zhalob.pdf"
import sertification_schema  from "../components/files/serification/sertification_schema.pdf"
import politic_conf  from "../components/files/serification/politic_conf.pdf"
import politic_non_involve  from "../components/files/serification/politic_non_invol.pdf"
import politic_cancel  from "../components/files/serification/politic_cancel.pdf"
import politic_accordance  from "../components/files/serification/politic_accordance.pdf"
import politic_distance  from "../components/files/serification/politic_distance.pdf"


const Sertification = () => {
    return(
        <>
        <Header />
        <span className="sertification_title">НОРМАТИВНЫЕ ДОКУМЕНТЫ, ИСПОЛЬЗУЕМЫЕ ПРИ ВЫПОЛНЕНИИ РАБОТ ПО СЕРТИФИКАЦИИ СИСТЕМ МЕНЕДЖМЕНТА</span>
        <div className="sertification_list">
            <li>ГОСТ Р ИСО 9001-2015 Системы менеджмента качества. Требования</li>
            <li>ГОСТ Р ИСО 14001-2016 Системы экологического менеджмента. Требования и руководство по применению</li>
            <li>ГОСТ Р ИСО 45001-2020. Системы менеджмента безопасности труда и охраны здоровья. Требования и руководство по применению.</li>
            <li>ГОСТ Р ИСО/МЭК 17021-1-2017 Оценка соответствия. Требования к органам, проводящим аудит и сертификацию систем менеджмента</li>
        </div>

        <div className="files">
            <div className="files_item">
                <a href={poryadok_zhalob} onClick={(e) => { e.preventDefault(); window.open(poryadok_zhalob, '_blank'); }}>Скачать файл</a>
            </div>
            <div className="files_item">
                <a href={sertification_schema}  onClick={(e) => { e.preventDefault(); window.open(sertification_schema, '_blank'); }}>Скачать файл</a>
            </div>
            <div className="files_item">
                <a href={politic_conf}  onClick={(e) => { e.preventDefault(); window.open(politic_conf, '_blank'); }}>Скачать файл</a>
            </div>
            <div className="files_item">
                <a href={politic_non_involve}  onClick={(e) => { e.preventDefault(); window.open(politic_non_involve, '_blank'); }}>Скачать файл</a>
            </div>
            <div className="files_item">
                <a href={politic_cancel}  onClick={(e) => { e.preventDefault(); window.open(politic_cancel, '_blank'); }}>Скачать файл</a>
            </div>
            <div className="files_item">
                <a href={politic_accordance}  onClick={(e) => { e.preventDefault(); window.open(politic_accordance, '_blank'); }}>Скачать файл</a>
            </div>
            <div className="files_item">
                <a href={politic_distance}  onClick={(e) => { e.preventDefault(); window.open(politic_distance, '_blank'); }}>Скачать файл</a>
            </div>
        </div>
        
        </>
    )
}

export default Sertification