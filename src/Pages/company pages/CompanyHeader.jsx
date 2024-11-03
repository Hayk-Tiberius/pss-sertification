import React from "react";
import "./CompanyHeader.scss"

const CompanyHeader = () => {
    return (
        <>
            <nav className="menu">
                <ul className="menu-list">
                    <li>Аккредитация</li>
                    <li>Политика</li>
                    <li>Структура</li>
                    <li>Руководитель</li>
                    <li>Партнеры</li>
                    <li>История</li>
                    <li>Сотрудники</li>
                </ul>
            </nav>
        </>
    )
}

export default CompanyHeader