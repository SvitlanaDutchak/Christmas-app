import React from "react";
import HeroImage from "../images/hero.png";
import { Button } from "./Button";

export const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__item">
        {" "}
        <img src={HeroImage} alt="" />
      </div>
      <div className="hero__content">
        <h1 className="title">Merry Christmas and Happy New Year!</h1>
        <p className="text">
          Christmas and a new year is about to begin, all good wishes and
          successes.
        </p>
        <Button text="Get Started" />
      </div>
    </section>
  );
};
