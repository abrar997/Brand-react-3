import React, { Component } from "react";
import "../Header/Header.css";
import img from "../images/circl.png";
import imgplan from "../images/paper.jpg";
export class Header extends Component {
  render() {
    return (
      <div>
        <header
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="3600"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-5 mt-4 pt-4 headerleft">
                <img
                  src={imgplan}
                  style={{
                    width: "12%",
                    marginTop: "25px",
                    marginLeft: "170px",
                  }}
                />
                <h1>build your audience and grow your brand </h1>
                <p>
                  content marketing is nothing but offering users value . <br />
                  it is not just about traffic minion customers .
                </p>
                <div className="btn">explore us </div>
                <img src={img}></img>
              </div>
              <div className="col-lg-9 headerright ml-4 "></div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default Header;
