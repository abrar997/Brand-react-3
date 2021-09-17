import React, { Fragment, Component } from "react";
import "./App.css";

import {
  BrowserRouter,
  Route,
  Router,
  Link,
  Switch,
  NavLink,
} from "react-router-dom";

// import components
import About from "./components/About/About";
import Home from "./components/Home/Home";
import FeatureLink from "./components/FeatureLink/FeatureLink";
import Contact from "./components/Contact/Contact";
import NotFound from "./components/NotFound/NotFound";

export class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div className="nav" data-aos="fade-down-left">
            <div className="container">
              <div className="row">
                <nav
                  className="navbar navbar-expand-lg "
                  data-aos="zoom-in-down"
                >
                  <div className="brand">
                    <Link className="navbar-brand" to="/Home">
                      code/<span>Mu.</span>
                    </Link>
                  </div>

                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon">
                      <i className="bi bi-border-width"></i>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="36"
                        height="36"
                        fill="currentColor"
                        className="bi bi-border-width"
                        viewBox="0 0 16 16"
                      >
                        <path d="M0 3.5A.5.5 0 0 1 .5 3h15a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-2zm0 5A.5.5 0 0 1 .5 8h15a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1zm0 4a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5z" />
                      </svg>
                    </span>
                  </button>
                  <div
                    className="collapse navbar-collapse"
                    id="navbarNavDropdown"
                  >
                    <ul className="navbar-nav">
                      <li className="nav-item ">
                        <Link className="nav-link" to="/Home">
                          Home <span className="sr-only">(current)</span>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/About">
                          About
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/FeatureLink">
                          Features
                        </Link>
                      </li>
                      <li className="nav-item ">
                        <Link className="nav-link " to="/Contact">
                          Contact
                        </Link>
                      </li>
                      <li>
                        <i className="bi bi-person"></i>
                        <Link to="Home">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="36"
                            height="36"
                            fill="currentColor"
                            className="bi bi-person"
                            viewBox="0 0 16 16"
                          >
                            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                          </svg>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>

          <Switch>
            {/* when web open home will work :problem is solved  */}
            <Route path="/" component={Home} exact />
            <Route path="/Home" component={Home} exact />
            <Route path="/About" component={About} exact />
            <Route path="/FeatureLink" component={FeatureLink} exact />
            <Route path="/Contact" component={Contact} exact />
            <Route component={NotFound} exact />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
