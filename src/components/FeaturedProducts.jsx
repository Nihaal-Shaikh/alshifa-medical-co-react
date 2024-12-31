import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductOne from "/product1.jpg";
import ProductTwo from "/product2.jpg";
import ProductThree from "/product3.jpg";
import ProductFour from "/product4.jpg";
import ProductFive from "/product5.jpg";

export default function FeaturedProducts() {
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true
    };
    return (
        <>
            <div className="slider-container mt-10 mb-10">
                <h2 className="text-2xl/7 font-bold text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight text-left mb-5">
                    Featured Products
                </h2>
                <Slider {...settings}>
                    <div>
                        <img src={ProductOne} alt="" />
                        <p className="text-left">Name of the product</p>
                        <p className="text-left">Price</p>
                    </div>
                    <div>
                        <img src={ProductTwo} alt="" />
                        <p className="text-left">Name of the product</p>
                        <p className="text-left">Price</p>
                    </div>
                    <div>
                        <img src={ProductThree} alt="" />
                        <p className="text-left">Name of the product</p>
                        <p className="text-left">Price</p>
                    </div>
                    <div>
                        <img src={ProductFour} alt="" />
                        <p className="text-left">Name of the product</p>
                        <p className="text-left">Price</p>
                    </div>
                    <div>
                        <img src={ProductFive} alt="" />
                        <p className="text-left">Name of the product</p>
                        <p className="text-left">Price</p>
                    </div>
                </Slider>
            </div>
        </>
    );
}
