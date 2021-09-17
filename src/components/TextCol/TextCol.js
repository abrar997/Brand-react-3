import React, { Component } from "react";
import "../TextCol/TextCol.css";
import image from "../images/saroo.png";
export class TextCol extends Component {
  render() {
    return (
      <div>
        <section className="Text" data-aos="fade-down">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-8 col-sm-12">
                <img src={image} />
              </div>
              <div className="col-lg-6 col-md-8 col-sm-12">
                <h3>We take a steps to build a successful business</h3>
                            <p>Content marketing is nothing but offering users value. It is not just about traffic minion consectetur adipiscing elitd do eiusmod tempor incididun.</p>
                <div className="btn">Explore us</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default TextCol;
