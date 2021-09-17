import React, { Component } from "react";
import "../BetterText/BetterText.css";
import image from "../images/better solutions.png";
export class BetterText extends Component {
  state = {
    
      h1: "We are here to help you for better solutions",
      pargraph:
        "Content marketing is nothing but offering users value. It is not just about traffic minion consectetur adipiscing elitd do eiusmod tempor incididun.",
    }
 

    // this.setState ( {
    //   h1: "want advice or notice ?",
    //   pargraph: "we will give u what u want and help to grow ur bussiness",
    // })
  render() {
    return (
      <div>
          <section className="BetterText" data-aos="fade-up-right"> 
        <div className="container">
          <div className="row">
              <div className="col-lg-6 col-sm-12  col-md-12">
              <h1>{this.state.h1}</h1>
              <p>{this.state.pargraph}</p>

              <div className="btn" onClick={this.ChhangeInfo}>
                Explore Us
              </div>
            </div>
            <div className="col-lg-6 col-sm-12 col-md-9">
              <img src={image} />
            </div>
          </div>
        </div></section>
      </div>
    );
  }
}

export default BetterText;
