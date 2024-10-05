import React from "react";
import LinkComponent from "./LinkComponent";

const NavPanel = () => {
    return (
        <nav>
            <LinkComponent link="#" content="Главная" />
            <LinkComponent link="#" content="Новости" />
            <LinkComponent link="#" content="Турниры" />
            <LinkComponent link="#" content="Команда" />
            <LinkComponent
                link="#"
                content="Вход"
                classes="header__login-button"
            />
        </nav>
    );
};

export default NavPanel;
