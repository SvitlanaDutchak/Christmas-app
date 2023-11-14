import React from "react";
import { Button } from "./Button";
import Image from "../images/section-item-2.png";

export const SelebrateSection = () => {
  return (
    <section className="selebrate">
      <div className="selebrate__content">
        <h2 className="subtitle">Celebrate With A Lot Of Love</h2>
        <p className="text">
          In this holidays, celebrate with much love and peace, offering many
          blessings to our loved ones, friends and neighbors, wishing them a
          good Christmas message.
        </p>
        <Button text="Send Good Wishes" />
      </div>
      <div className="selebrate__item">
        <img src={Image} alt="img" />
      </div>
    </section>
  );
};
