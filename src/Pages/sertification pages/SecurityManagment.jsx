import React from "react"
import { Link } from "react-router-dom";
import Header from "../../tools/Header";
import Footer from "../../tools/Footer";
import security_img from "../../components/img/sertificate_img/sys_m_o_z_o_b_t_inv.png"

const SecurityManagment = () => {
    return (
        <>
            <Header />
            <main style={{ width: "100%" }} className="quality">
                <span style={{ fontSize: "1.8rem" }}>Системы менеджмента охраны здоровья <br />и обеспечения безопасности труда</span>
                <img src={security_img} alt="" />
                <span>ГОСТ Р ИСО 45001-2020</span>
                <section className="sertification">
                    <Link to="/Applications">
                        <button style={{ borderRadius: "2rem" }} className="sertification__title">Оформить заявку</button>
                    </Link>
                    <button style={{ borderRadius: "2rem" }} className="sertification__title">Документация</button>

                </section >
                <section style={{ textAlign: "justify", width: "62%", border: "0.1rem white solid", boxShadow: "0 0 3rem 0.4rem rgba(0,0,0,0.3)", fontSize: "1.11rem", overflow: "hidden", padding: "2rem 2rem 2rem 2rem", borderRadius: "3rem" }}>
                    <span style={{ lineHeight: "1.77rem" }}>Организации всех видов проявляют растущую заинтересованность в том, чтобы достичь хороших показателей деятельности в области охраны здоровья и обеспечения безопасности труда. Они делают это в свете растущей требовательности со стороны законодательства, совершенствования экономической политики и других мер, поддерживающих передовой опыт в области охраны здоровья и обеспечения безопасности труда.</span>
                    <br />
                    <br />
                    <span style={{ lineHeight: "1.77rem" }}><b>Система менеджмента охраны здоровья и обеспечения безопасности труда (OH&S management system)</b> — часть системы менеджмента организации, используемая для разработки и реализации ее политики в области охраны здоровья и обеспечения безопасности труда и менеджмента ее рисков в этой области.</span>
                    <br />
                    <br />
                    <span style={{ lineHeight: "1.77rem" }}>Сертификат соответствия системы менеджмента профессиональной безопасности и здоровья требованиям ГОСТ Р ИСО 45001-2020 необходим организациям, которые стремятся:</span>
                    <br />
                    <ul style={{ fontSize: "1.33rem" }}>
                        <br />
                        <li>устранять или сокращать риски для работников в области профессиональной безопасности и здоровья;</li>
                        <li>осуществлять контроль за опасными производственными факторами и процессами;</li>
                        <li>управлять рисками, возникающими в процессе производственной деятельности;</li>
                        <li>предотвращать возникновение аварий и прочих нештатных ситуаций;</li>
                        <li>уменьшить прямые и непрямые издержки бизнеса.</li>
                    </ul>
                    <br />
                    <span style={{ lineHeight: "1.77rem" }}>
                        Сертификация проводится на соответствие: <br />
                        <b>ГОСТ Р ИСО 45001-2020 – Requirements</b> <br />
                        <b>(Системы менеджмента охраны здоровья и обеспечения безопасности труда. Требования)</b>
                    </span>
                    <br />
                    <br />
                    <span style={{ lineHeight: "1.77rem" }}>OHSAS включает общие требования к построению системы менеджмента для устранения или минимизации рисков для работников и других заинтересованных сторон, здоровье которых может подвергаться опасностям, связанным с осуществляемой ими деятельностью.</span>
                </section>
            </main >
            <Footer />

        </>
    )
}

export default SecurityManagment