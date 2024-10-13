import React, { FC } from "react";
import classes from "./GamesCard.module.css";
import smallLogo from "../../assets/small-logo.svg";
import { getDate } from "../NewsCard/NewsCard";

interface GamesCardProps {
    logo: string;
    date: Date;
}

const GamesCard: FC<GamesCardProps> = ({ logo, date }) => {
    return (
        <a href="##" className={classes.card}>
            <img src={smallLogo} alt="Kokos logo" className={classes.logo} />
            <span className={classes.date}>{`${getDate(date)} ${String(
                date.getHours()
            ).padStart(2, "0")}:${String(date.getMinutes()).padStart(
                2,
                "0"
            )}`}</span>
            <img src={logo} alt="Opponent logo" className={classes.logo} />
        </a>
    );
};

export default GamesCard;
