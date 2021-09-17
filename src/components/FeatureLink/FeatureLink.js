import React, { Component } from "react";
import "./FeatureLink.css";
import Features from "../Features/Features";
import Footer from "../Footer/Footer";
import Ask from "../Ask/Ask";
import Plan from "../Plan/Plan";
export class FeatureLink extends Component {
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
  style = {
    marginTop: "100px",
  };

  render() {
    return (
      <div className="about">
        <div className="Dtaata">
          <Features data={this.state.Features} />
        </div>
        <Ask />
        <Plan />
        <Footer />
      </div>
    );
  }
}

export default FeatureLink;
