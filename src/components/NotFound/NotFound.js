import React, { Component, Fragment } from "react";
import "./NotFound.css";
import "../NotFound/NotFound";

import gif from "../images/gif.gif";
import { Route, Switch } from "react-router";
import Home from "../Home/Home";
import { Link } from "react-router-dom";
// import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
// import Home from "../Home/Home";
export class NotFound extends Component {
  render() {
    return (
      <div>
       <Fragment>
        <div className="container">
          <div className="row">
            <div className="gif">
              <div className="col-lg-3">
                <img src={gif} />
              </div>
              <div className="col-lg-5">
                <h1>this page not found</h1>
                <p>
                  seems like you have lost your way. let's bring you back
                  <br />
               <Link to="/Home">Home</Link>
                </p>
              </div>
              <div className="col-lg-3">
                <img src={gif} />
              </div>
            </div>
          </div>
        </div>

<Switch>
  <Route path="/" component={NotFound} exact />
  <Route path="/Home" component={Home} exact />
</Switch>


</Fragment>
      </div>
    );
  }
}
export default NotFound;
