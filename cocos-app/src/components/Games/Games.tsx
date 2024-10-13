import React from "react";
import "./Games.css";
import GamesCard from "../GamesCard/GamesCard";
import barcelonaLogo from "../../assets/barcelona-logo.svg";
interface GameCardNode {
    logo: string;
    date: Date;
}

const GameCardsData: Array<GameCardNode> = [
    {
        logo: barcelonaLogo,
        date: new Date("2024-10-08T19:10:00"),
    },
    {
        logo: barcelonaLogo,
        date: new Date("2024-10-08T19:10:00"),
    },
    {
        logo: barcelonaLogo,
        date: new Date("2024-10-08T19:10:00"),
    },
    {
        logo: barcelonaLogo,
        date: new Date("2024-10-08T19:10:00"),
    },
];

const Games = () => {
    return (
        <section className="games" id="games">
            <div className="container">
                <h2 className="section-title">Матчи</h2>
                <div className="games-flexbox">
                    {[
                        GameCardsData.map((item, i) => (
                            <GamesCard
                                key={i}
                                date={item.date}
                                logo={item.logo}
                            />
                        )),
                    ]}
                </div>
                <a href="##" className="orange-button">
                    К матчам
                </a>
            </div>
        </section>
    );
};

export default Games;
