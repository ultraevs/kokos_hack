import React from "react";
import "./Team.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sliderImage from "../../assets/slider-image.jpg";

const SliderData: Array<string> = [
    sliderImage,
    sliderImage,
    sliderImage,
    sliderImage,
    sliderImage,
];

const Team = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };
    return (
        <section className="team" id="team">
            <div className="container">
                <div className="team-slider-wrap">
                    <Slider {...settings}>
                        {[
                            SliderData.map((item, i) => (
                                <div>
                                    <img
                                        key={i}
                                        src={item}
                                        alt="Фото команды"
                                    />
                                    <a href="##">К странице команды</a>
                                </div>
                            )),
                        ]}
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default Team;
