import React, { Component } from "react";
import "../Plan/Plan.css";
export class Plan extends Component {
  state = {
    cardsInfo: [
      {
        Items: "basic plan",
        price: "$ 700",
        text: "Content marketing is nothing but offering users value.",
        offers: [
          "Increase traffic 50%",
          "Social Media Marketing",
          "10 Free Optimization",
          "24/7 support",
        ],
      },
      {
        Items: "basic plan",
        price: "$ 500",
        text: "Content marketing is nothing but offering users value.",
        offers: [
          "Increase traffic 50%",
          "Social Media Marketing",
          "10 Free Optimization",
          "24/7 support",
        ],
      },
      {
        Items: "basic plan",
        price: "$ 300",
        text: "Content marketing is nothing but offering users value.",
        offers: [
          "Increase traffic 50%",
          "Social Media Marketing",
          "10 Free Optimization",
          "24/7 support",
        ],
      },
    ],
  };

  render() {
    return (
      <div>
        <section className="plan">
          <div className="container">
            <div className="row">
              <div className="text">
                <h1>Affordable pricing plan</h1>

                <p>
                  Content marketing is nothing but offering users value. It is
                  not just about traffic minion consectetur adipiscing elitd do
                  eiusmod tempor incididun.
                </p>
              </div>
                        <div className="cards " data-aos="fade-down">
                <div className="card col-lg-3 ">
                  <span>{this.state.cardsInfo[0].Items}</span>
                  <p>{this.state.cardsInfo[0].price}</p>
                  <h4>{this.state.cardsInfo[0].text}</h4>
                  <hr />
                  <ul>
                    <li>
                      <a href="">{this.state.cardsInfo[0].offers[0]} </a>
                    </li>
                    <li>
                      <a href="">{this.state.cardsInfo[0].offers[1]} </a>
                    </li>
                    <li>
                      <a href="">{this.state.cardsInfo[0].offers[2]} </a>
                    </li>
                    <li>
                      <a href="">{this.state.cardsInfo[0].offers[3]} </a>
                    </li>
                  </ul>
                  <button>get started now</button>
                </div>

                <div className="card col-lg-3 ">
                  <span>{this.state.cardsInfo[1].Items}</span>
                  <p>{this.state.cardsInfo[1].price}</p>
                  <h4>{this.state.cardsInfo[1].text}</h4>
                  <hr />
                  <ul>
                    <li>
                      <a href="">{this.state.cardsInfo[1].offers[0]} </a>
                    </li>
                    <li>
                      <a href="">{this.state.cardsInfo[1].offers[1]} </a>
                    </li>
                    <li>
                      <a href="">{this.state.cardsInfo[1].offers[2]} </a>
                    </li>
                    <li>
                      <a href="">{this.state.cardsInfo[1].offers[3]} </a>
                    </li>
                  </ul>
                  <button>get started now</button>
                </div>

                <div className="card col-lg-3 ">
                  <span>{this.state.cardsInfo[2].Items}</span>
                  <p>{this.state.cardsInfo[2].price}</p>
                  <h4>{this.state.cardsInfo[2].text}</h4>
                  <hr />
                  <ul>
                    <li>
                      <a href="">{this.state.cardsInfo[2].offers[0]} </a>
                    </li>
                    <li>
                      <a href="">{this.state.cardsInfo[2].offers[1]} </a>
                    </li>
                    <li>
                      <a href="">{this.state.cardsInfo[2].offers[2]} </a>
                      <li>
                        <a href="">{this.state.cardsInfo[1].offers[3]} </a>
                      </li>
                    </li>
                  </ul>
                  <button>get started now</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Plan;
