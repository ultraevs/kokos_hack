import React, { FC } from "react";
import classes from "./NewsCard.module.css";
interface NewsCardProps {
    date: Date;
    title: string;
    description: string;
    background: string;
}

const NewsCard: FC<NewsCardProps> = ({
    date,
    title,
    description,
    background,
}) => {
    function getDate(date: Date): string {
        const monthName = date.toLocaleString("ru-RU", { month: "short" });
        return String(date.getDay()) + " " + monthName;
    }
    return (
        <div className={classes.card}>
            <span className={classes.date}>{getDate(date)}</span>
            <span className={classes.title}>{title}</span>
            <span className={classes.description}>{description}</span>
            <img
                className={classes.background}
                src={background}
                alt="Постер с игроком"
            />
        </div>
    );
};

export default NewsCard;
