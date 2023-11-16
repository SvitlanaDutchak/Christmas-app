import React from "react";
import Slider from "react-slick";
import { CiHeart } from "react-icons/ci";
import SliderImg1 from "../images/gift4.png";
import SliderImg2 from "../images/gift4-1.png";
import SliderImg3 from "../images/gift4-2.png";

const gifrtsSlider = [
  {
    image: SliderImg1,
    title: "Christmas Wreath",
    price: "$18",
  },
  {
    image: SliderImg2,
    title: "Reindeer",
    price: "$95",
  },
  {
    image: SliderImg3,
    title: "Snow globe",
    price: "$20",
  },
  {
    image: SliderImg2,
    title: "Christmas Tree",
    price: "$48",
  },
];

export const GiftsSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <section className="gifts">
      <h3 className="subtitle">New Gifts</h3>

      <Slider {...settings}>
        {" "}
        {gifrtsSlider.map((item) => (
          <div key={item.title} className="gifts__card">
            {" "}
            <div className="gifts__favorite">
              <CiHeart style={{ color: "red" }} />
            </div>
            <img src={item.image} alt={item.title} />
            <p className="subtitle">{item.price} </p>
            <p className="text">{item.title} </p>
          </div>
        ))}
      </Slider>
    </section>
  );
};
