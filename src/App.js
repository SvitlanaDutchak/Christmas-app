import React from "react";
import "./styles/main.scss";
import Header from "./components/Header";
import { Container } from "./components/Container";
import { Hero } from "./components/Hero";
import { SelebrateSection } from "./components/SelebrateSection";
import { Giving } from "./components/Giving";
import { SendWish } from "./components/SendWish";

function App() {
  return (
    <Container>
      <Header />
      <Hero />
      <Giving />
      <SelebrateSection />
      <SendWish />
    </Container>
  );
}

export default App;
