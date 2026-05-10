import React from "react";
import logo from "../components/img/pss_logo1.png";
import { Link } from "react-router-dom";
import "../../src/Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="logo" style={{ width: "30%" }} />

          <span className="logo__title">ПРОМСТРОЙ-Cертификации</span>
        </Link>
      </div>
      <div className="menu">
        <Link to="/Sertification">
          <span className="menu__hover">О сертификации</span>
        </Link>
        <Link to="/Company">
          <span className="menu__hover">О компании</span>
        </Link>
        <Link to="/Info">
          <span className="menu__hover">Информация</span>
        </Link>
        <Link to="/Applications">
          <span className="menu__hover">Заявки на услуги</span>
        </Link>
        <Link to="/Contact">
          <span className="menu__hover">Контакты</span>
        </Link>
      </div>
      <div className="login_button">
        <Link to="/Login"> Войти</Link>
      </div>
    </header>
  );
};

export default Header;
