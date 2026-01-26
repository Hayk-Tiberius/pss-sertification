import React from "react";
import { Link } from "react-router-dom";
import "./CompanyHeader.scss";

const CompanyHeader = () => {
  return (
    <>
      <nav className="menu">
        <ul className="menu-list">
          <Link to="/Accreditations">
            <li>Аккредитация</li>
          </Link>
          <Link to="/Policy">
            <li>Политика</li>
          </Link>
          <Link to="/Structure">
            <li>Структура</li>
          </Link>
          <Link to="/Partners">
            <li>Партнеры</li>
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default CompanyHeader;
