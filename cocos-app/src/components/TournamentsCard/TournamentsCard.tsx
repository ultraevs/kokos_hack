import React, { FC } from "react";
import classes from "./TournamentsCard.module.css";
import { getDate } from "../NewsCard/NewsCard";

export interface TournamentsCardProps {
    dateFrom: Date;
    dateTo: Date;
    name: string;
}

const TournamentsCard: FC<TournamentsCardProps> = ({
    dateFrom,
    dateTo,
    name,
}) => {
    function isGoingNow(dateFrom: Date, dateTo: Date): boolean {
        const currDate = +new Date();
        if (+dateFrom < currDate && +dateTo > currDate) {
            return true;
        }
        return false;
    }
    return (
        <a
            href="##"
            className={`${classes.card} ${
                isGoingNow(dateFrom, dateTo) ? classes.goNow : ""
            }`}
        >
            {isGoingNow(dateFrom, dateTo) && (
                <span className={classes.goingNow}>Идет сейчас</span>
            )}
            <div className={classes.cardBottom}>
                <span className={classes.dates}>
                    {getDate(dateFrom)} - {getDate(dateTo)}
                </span>
                <span className={classes.name}>{name}</span>
            </div>
        </a>
    );
};

export default TournamentsCard;
