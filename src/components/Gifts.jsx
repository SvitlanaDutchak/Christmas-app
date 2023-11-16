import React from "react";
import { CiHeart } from "react-icons/ci";
import image1 from "../images/gift1-1.png";
import image2 from "../images/gift1-2.png";
import image3 from "../images/gift1-3.png";
import image4 from "../images/gift1-4.png";
import image5 from "../images/gift1-5.png";

const gifrtsItems = [
  {
    image: image1,
    title: "Gingerbread",
    price: "$15",
  },
  {
    image: image2,
    title: "Santa Claus Hat",
    price: "$22",
  },
  {
    image: image3,
    title: "Candy Stick",
    price: "$12",
  },
  {
    image: image4,
    title: "Christmas Tree",
    price: "$48",
  },
  {
    image: image5,
    title: "Snowman",
    price: "$35",
  },
];

const GiftItem = () => {
  return (
    <>
      {gifrtsItems.map((item) => (
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
    </>
  );
};

export const Gifts = () => {
  return (
    <section className="gifts">
      <h2 className="subtitle">Share A Gift</h2>
      <div className="gifts__content">
        <GiftItem />
      </div>
    </section>
  );
};
