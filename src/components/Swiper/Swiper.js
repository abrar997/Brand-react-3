import React, { Component } from "react";
import "../Swiper/Swiper.css";
import img1 from "../images/1.webp";
import img2 from "../images/2.webp";
import img3 from "../images/3.webp";
import img4 from "../images/4.png";
import img5 from "../images/5.webp";
import img6 from "../images/6.webp";

export class Swiper extends Component {
  
  render() {

    return (
      <div>
        <section className="swiper " data-aos="fade-down">
          <div className="container">
            <div className="row">
              <div className="text col-lg-12">
                <h2>Trusted by over 3,000 world’s leading companies .</h2>
                <p>
                  Content marketing is nothing but offering users value. It is
                  not just about traffic minion consectetur adipiscing elitd do
                  eiusmod tempor incididun.
                </p>
              </div>

              <div className="images mt-4 pt-4 col-sm-12" >
                    <img src={img1} alt="..." /> <img src={img2} alt="..." />
                    <img src={img3} alt="..." />
                    <img src={img4} alt="..." />
                    <img src={img5} alt="..." />
                    <img src={img6} alt="..." />

                  </div>
                
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Swiper;
