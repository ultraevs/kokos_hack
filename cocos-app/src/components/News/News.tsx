import React from "react";
import "./News.css";
import NewsCard from "../NewsCard/NewsCard";
import newsBG from "../../assets/news-card-bg.jpg";

interface newsNode {
    date: Date;
    title: string;
    description: string;
    background: string;
}

const newsDate: Array<newsNode> = [
    {
        date: new Date("2024-10-01"),
        title: "Павел Погребняк дебютировал в Лиге F",
        description:
            "И сразу забил гол, послематчевый пенальти и принес команде первые очки!",
        background: newsBG,
    },
    {
        date: new Date("2024-10-01"),
        title: "Павел Погребняк дебютировал в Лиге F",
        description:
            "И сразу забил гол, послематчевый пенальти и принес команде первые очки!",
        background: newsBG,
    },
    {
        date: new Date("2024-10-01"),
        title: "Павел Погребняк дебютировал в Лиге F",
        description:
            "И сразу забил гол, послематчевый пенальти и принес команде первые очки!",
        background: newsBG,
    },
];

const News = () => {
    return (
        <section id="news-section" className="news-section">
            <div className="container">
                <h2 className="section-title">Новости</h2>
                <div className="news_cards">
                    {[
                        newsDate.map((item, i) => (
                            <NewsCard
                                key={i}
                                date={item.date}
                                title={item.title}
                                description={item.description}
                                background={item.background}
                            />
                        )),
                    ]}
                </div>
                <a href="##" className="news-button orange-button">
                    К новостям
                </a>
            </div>
        </section>
    );
};

export default News;
