import React, { Component } from "react";
import "../Features/Feature.css";

export class Features extends Component {
  render() {
    
    // understand code before u write it
    // بكل احوال اسوي لوب لكن يبقى الشرط يحدد ل يتنفذ لو لاء
    // اذا عندي طول الانديكس لل
    // h
    // سويليل تكرار حيث اضيفهم ل
    // div  اكبر من 2 مثلا
    // اذا لاء طلع غير شرط
    // syntax condition (items.prop (from state))? (result of if) :(result of else )

    const { data } = this.props; // every single item ,key
    const dataFeatues = data.map((item, ind) => {
      return item.p.length > 2 ? (
        <div key={ind} className="item d-flex col-lg-5">
          <h3>
            <i className="bi bi-chat"></i>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-chat"
              viewBox="0 0 16 16"
            >
              <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z" />
            </svg>
            {item.h}
          </h3>
          <p>{item.p}</p>
        </div>
      ) : (
        <h2>Feture is update </h2>
      );

    });


    return (
      <div>
        <section className="Features" data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="3500">
          <div className="container">
            <div className="row">
              <h1>Some Features that Made us Unique</h1>
              <p>Who are in extremely love with eco friendly system.</p>
              <div className="cards">{dataFeatues}</div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Features;
