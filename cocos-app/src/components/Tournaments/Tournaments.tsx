import React from "react";
import TournamentsCard from "../TournamentsCard/TournamentsCard";
import "./Tournaments.css";
interface TournamentsNode {
    dateFrom: Date;
    dateTo: Date;
    name: string;
}

const TournamentsData: Array<TournamentsNode> = [
    {
        dateFrom: new Date("2024-10-01"),
        dateTo: new Date("2024-10-21"),
        name: "Премьер-лига",
    },
    {
        dateFrom: new Date("2024-11-02"),
        dateTo: new Date("2024-10-21"),
        name: "Премьер-лига",
    },
    {
        dateFrom: new Date("2024-06-21"),
        dateTo: new Date("2024-07-03"),
        name: "Премьер-лига",
    },
    {
        dateFrom: new Date("2024-08-04"),
        dateTo: new Date("2024-08-08"),
        name: "Премьер-лига",
    },
];

const Tournaments = () => {
    return (
        <section>
            <div className="container">
                <h2 className="section-title">Турниры</h2>
                <div className="tournament-cards">
                    {[
                        TournamentsData.map((item, i) => (
                            <TournamentsCard
                                key={i}
                                dateFrom={item.dateFrom}
                                dateTo={item.dateTo}
                                name={item.name}
                            />
                        )),
                    ]}
                </div>
            </div>
        </section>
    );
};

export default Tournaments;
