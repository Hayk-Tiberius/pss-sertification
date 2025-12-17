import React from "react"
import { Link } from "react-router-dom";
import Header from "../../tools/Header"
import Footer from "../../tools/Footer";
import quality_img from "../../components/img/sertificate_img/sys_m_k_inv.png"

const QualityManagment = () => {
    return (
        <>
            <Header />
            <main style={{ width: "100%" }} className="quality">
                <span style={{ fontSize: "1.8rem" }}>Система менеджмента качества</span>
                <img src={quality_img} alt="" />
                <span>ГОСТ ISO 9001 (ISO 9001)</span>
                <section className="sertification">
                    <Link to="/Applications">
                        <button style={{ borderRadius: "2rem" }} className="sertification__title">Оформить заявку</button>
                    </Link>
                    <button style={{ borderRadius: "2rem" }} className="sertification__title">Документация</button>

                </section>
                <section style={{ textAlign:"justify",width:"62%",border:"0.1rem white solid", boxShadow:"0 0 3rem 0.4rem rgba(0,0,0,0.3)", fontSize:"1.11rem", overflow:"hidden", padding:"2rem 2rem 2rem 2rem", borderRadius:"3rem"}}>
                    <span style={{lineHeight:"1.77rem"}}><b>Системы менеджмента качества</b> — это системы менеджмента для руководства и управления организацией, для обеспечения способности всегда поставлять продукцию, отвечающую требованиям потребителей и соответствующим обязательным (нормативным) требованиям, а также повышения удовлетворенности потребителей.</span>
                    <br/>
                    <br/>
                    <span style={{lineHeight:"1.77rem"}}>Сертификат соответствия системы менеджмента качества требованиям <b>ГОСТ ISO 9001 (ISO 9001)</b> необходим для:</span>
                    <ul style={{fontSize:"1.33rem"}}>
                    <br/>    
                        <li>улучшения внутренней организации деятельности предприятия для повышения эффективности (роста прибыли);</li>
                        <li>гарантии надежности и повышения имиджа предприятия для заказчика, инвестора, потребителя и других заинтересованных сторон;</li>
                        <li>участия в торгах (тендерах) на получение выгодных и перспективных заказов в области строительства;</li>
                        <li>вступления в саморегулируемые организации и получения свидетельств о допуске к проектным, изыскательским, строительно-монтажным работам, которые оказывают влияние на безопасность объектов строительства.</li>
                    </ul>
                    <br/>
                    <span style={{lineHeight:"1.77rem"}}>Отраслевые требования: 1 февраля 2013 года введен в действие <b>ГОСТ Р 55048 «Системы менеджмента качества. Особые требования по применению ГОСТ Р ИСО 9001 в строительстве.</b><br/>
                    По заявке организации сертификация на соответствие ГОСТ ISO 9001 может быть проведена с учетом дополнительных требований, установленных ГОСТ Р 55048.
                    </span>
                    <br />
                    <span style={{lineHeight:"1.77rem"}}>
                    <br />
                        <b>Сертификация проводится на соответствие:</b> <br />
                        <b>ГОСТ ISO 9001 Системы менеджмента качества. Требования;</b> <br />
                        <b>ISO 9001 Quality management systems. Requirements.</b> <br />
                    </span>
                    <br />
                    Стандарты на систему менеджмента качества включают общие требования:
                    о внедрении процессного подхода;
                    создания добавленной ценности процессам системы менеджмента качества;
                    к постоянному улучшению отдельных процессов и системы менеджмента в целом;
                    к нацеленности системы менеджмента качества на удовлетворенность всех заинтересованных в деятельности организации сторон.
                </section>
            </main>
            <Footer />
        </>
    )
}

export default QualityManagment