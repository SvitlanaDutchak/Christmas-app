import React from "react";
import Img from "../images/footer-item.png";
import Img1 from "../images/footer-item1.png";
import { Logo } from "./Logo";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__about">
        <Logo />
        <p className="text">This Christmas give a lot of love</p>
      </div>

      <div className="footer__about">
        <p className="subtitle">Our Services</p>
        <p className="text">Pricing</p>
        <p className="text">Discounts</p>
        <p className="text">Shipping mode</p>
      </div>

      <div className="footer__about">
        <p className="subtitle">Support</p>
        <p className="text">FAQs</p>
        <p className="text">Support center</p>
        <p className="text">Contact Us</p>
      </div>

      <div className="footer__about">
        <p className="subtitle">Available On</p>
      </div>

      {/* <p className="footer__date"> Bedimcode. All rigths reserved</p> */}
    </footer>
  );
};
