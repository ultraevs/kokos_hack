import React from "react";
import smallLogo from "../../assets/small-logo.svg";
import "./Footer.css";
const Footer = () => {
    return (
        <footer className="footer" id="footer">
            <div className="container">
                <div className="footer-flexbox">
                    <div className="footer-flexbox__socials">
                        <a
                            href="t.me/fckokocgroup"
                            target="_blanc"
                            className="footer-flexbox__socials footer-flexbox__socials_telegram"
                        >
                            @FCkokos
                        </a>
                        <a
                            href="vk.com/fckokocgroup"
                            target="_blanc"
                            className="footer-flexbox__socials footer-flexbox__socials_vkontakte"
                        >
                            @FCkokos
                        </a>
                        <a
                            href="mailto:FCkokos@mail.ru"
                            target="_blanc"
                            className="footer-flexbox__socials footer-flexbox__socials_email"
                        >
                            FCkokos@mail.ru
                        </a>
                    </div>
                    <a href="##" className="footer-flexbox__logo">
                        <img src={smallLogo} alt="Kokoc" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
