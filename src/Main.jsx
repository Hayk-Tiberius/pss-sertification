import React from "react";
import logo from "../../pss-sertification/src/components/img/pss_logo.png"
import { Link } from 'react-router-dom'
import "./Main.scss"

const Main = () => {
    return (
        <div className="main">
            <header className="header">
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="menu">
                    <span>Главная</span>
                    <span>О компании</span>
                    <span>О сертификации</span>
                    <span>Информация</span>
                    <span>Заявки на услуги</span>
                    <span>Задать вопрос</span>
                    <Link to="/Contact.jsx">
                    <span>Контакты</span>
                    </Link>
                </div>
            </header>
            <section className="slider">
                
            </section>
        </div>
    )
}

export default Main