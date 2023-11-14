import React from "react";
import image1 from "../images/giftpng.png";
import image2 from "../images/gift2.png";
import image3 from "../images/gift3.png";

const items = [
  {
    image: image1,
    title: "Surprise gifts",
    text: "They are the best gifts there is.",
  },
  { image: image2, title: "Ornaments", text: "Give a moment to decorate" },
  {
    image: image3,
    title: "Lots of love",
    text: "Give away feelings that last forever",
  },
];

export const Giving = () => {
  return (
    <section className="giving">
      <h2 className="subtitle">Start Giving This Christmas</h2>
      <div className="giving__content">
        {items.map((item) => (
          <div div className="giving__item" key={item.title}>
            <img src={item.image} alt={item.title} />
            <h3 className="title-item">{item.title}</h3>
            <p className="text">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
