import React from "react";
import { Button } from "./Button";
import Image from "../images/letter-msg.png";

export const SendWish = () => {
  return (
    <section className="send-wish">
      <div className="send-wish__content">
        <h2 className="subtitle">Send Good Wishes!</h2>
        <form action="" className="send-wish__content">
          <input
            type="text"
            placeholder="Write your message"
            className="input"
          />
          <Button text="Send Message" />
        </form>
      </div>
      <div className="send-wish__item">
        <img src={Image} alt="" />
      </div>
    </section>
  );
};
