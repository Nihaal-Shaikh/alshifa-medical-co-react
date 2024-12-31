import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImageOne from "/1.png";
import ImageTwo from "/2.png";
import ImageThree from "/3.png";
import ImageFour from "/4.png";

export default function PauseOnHoveSlider() {
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true
    };
    return (
        <div className="slider-container">
            <Slider {...settings}>
                <div>
                    <img src={ImageOne} alt="" />
                </div>
                <div>
                <img src={ImageTwo} alt="" />
                </div>
                <div>
                <img src={ImageThree} alt="" />
                </div>
                <div>
                <img src={ImageFour} alt="" />
                </div>
            </Slider>
        </div>
    );
}
