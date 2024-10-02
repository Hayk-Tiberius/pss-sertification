import React from "react"
import logo from "../components/img/pss_logo.svg"
import { Link } from 'react-router-dom'
import "../../src/Header.scss"


const Header = () => {
    return (   
    <header className="header">
        <div className="logo">
            <Link to="/">
            <img src={logo} alt="logo" />
            <span className="logo__title">ПРОМСТРОЙ-</span>
            <span className="logo__title">Сертификация</span>
            </Link>
        </div>
        <div className="menu">
            <Link to="Company.jsx">
                <span className="menu__hover">О компании</span>
            </Link>
            <Link to="Info.jsx">
                <span className="menu__hover">Информация</span>
            </Link>
            <Link to="Applications.jsx">
                <span className="menu__hover">Заявки на услуги</span>
            </Link>
            <Link to="/Contact.jsx">
                <span className="menu__hover">Контакты</span>
            </Link>
        </div>
    </header>
    )
}

export default Header