import React from "react";
import logo from "../components/img/pss_logo.svg";
import { Link } from "react-router-dom";
import "../../src/Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="logo" />
          <span className="logo__title">
            ПРОМСТРОЙ-
            <br />
            сертификации
          </span>
        </Link>
      </div>
      <div className="menu">
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
    </header>
  );
};

export default Header;
