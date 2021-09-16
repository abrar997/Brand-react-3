import React, { Component } from "react";
import Header from "../Header/Header";
import Ask from "../Ask/Ask";
import BetterText from "../BetterText/BetterText";
import Footer from "../Footer/Footer";
import Features from "../Features/Features";
import Swiper from "../Swiper/Swiper";
import TextCol from "../TextCol/TextCol";
import Plan from "../Plan/Plan";

export class Home extends Component {
  // state
  state = {
    Features: [
      {
        h: "Expert Technicians",
        p: "Usage of the Internet is becoming more common due to rapid advancement of technology and power.",
      },
      {
        h: "Professional Service",
        p: "Usage of the Internet is becoming more common due to rapid advancement of technology and power.",
      },
      {
        h: "Great Support",
        p: "Usage of the Internet is becoming more common due to rapid advancement of technology and power.",
      },
      {
        h: "Technical Skills",
        p: "Usage of the Internet is becoming more common due to rapid advancement of technology and power.",
      },
      {
        h: "Highly Recomended",
        p: "Usage of the Internet is becoming more common due to rapid advancement of technology and power.",
      },
      {
        h: "Positive Reviews",
        p: "Usage of the Internet is becoming more common due to rapid advancement of technology and power.",
      },
    ],
  };
  // ---------
  render() {
    return (
      <div>
        <Header />
        <Swiper />
        <TextCol />
        <Ask />
        <Features data={this.state.Features} />

        <BetterText />

        <Plan />

        <Footer />
      </div>
    );
  }
}

export default Home;
