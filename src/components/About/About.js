import React, { Component } from "react";
import "./About.css";
import img from "../images/circl.png";
import imgplan from "../images/paper.jpg";

export class About extends Component {
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


  render() {
    return (
      <div className="about">
        <header
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="3600"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-5 mt-4 pt-4 left">
                <img
                  src={imgplan}
                  style={{
                    width: "12%",
                    marginTop: "25px",
                    marginLeft: "170px",
                  }}
                />
                <h1>code/Mu. company </h1>
                <p>
                  content marketing is nothing but offering users value . <br />
                  it is not just about traffic minion customers Content
                  marketing is nothing but offering users value. It is not just
                  about traffic minion customers.Content marketing is nothing
                  but offering users value. It is not just about traffic minion
                  customers.Content marketing is nothing but offering users
                  value.
                </p>
                <div className="btn">explore us </div>
                <img src={img}></img>
              </div>
              <div className="col-lg-9 right ml-4 "> </div>
            </div>
          </div>
        </header>
 
      </div>
    );
  }
}

export default About;
