import React from "react";
import NavPanel from "./NavPanel";
import smallLogo from "../assets/small-logo.svg";
import "./Header.css";

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="header__top-panel">
                    <a href="##">
                        <img src={smallLogo} alt="" />
                    </a>
                    <NavPanel />
                </div>
                <div className="header__content">
                    <h1 className="header__title">ФК КОКОС</h1>
                    <p className="header__text">
                        Добро пожаловать на официальный сайт нашего футбольного
                        клуба! Ознакомьтесь с последними новостями, профилями
                        игроков и турнирной таблицей ваших любимых команд.
                    </p>
                    <a href="##" className="header__button">
                        button
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;
