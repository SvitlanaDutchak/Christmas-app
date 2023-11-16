import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles/main.scss";
import Header from "./components/Header";
import { Container } from "./components/Container";
import { Hero } from "./components/Hero";
import { SelebrateSection } from "./components/SelebrateSection";
import { Giving } from "./components/Giving";
import { SendWish } from "./components/SendWish";
import { Footer } from "./components/Footer";
import { Gifts } from "./components/Gifts";
import { GiftsSlider } from "./components/Slider";

function App() {
  return (
    <Container>
      <Header />
      <Hero />
      <Giving />
      <SelebrateSection />
      <Gifts />
      <GiftsSlider />
      <SendWish />
      <Footer />
    </Container>
  );
}

export default App;
