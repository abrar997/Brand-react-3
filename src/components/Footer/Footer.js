import React, { Component } from "react";
import "../Footer/Footer.css";
export class Footer extends Component {
  render() {
    return (
      <div>
        <footer  data-aos="fade-right"
 
          >
          <div className="container py-5">
            <div className="row py-4">
              <div className="col-lg-4 col-md-6 mb-4 mb-lg-0 ">
                <span className="logo">
                  code/<span className="mu">Mu.</span>{" "}
                </span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt.
                </p>
                <ul className="list-inline mt-4">
                  <li className="list-inline-item">
                    <a href="#" target="_blank" title="twitter">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" target="_blank" title="facebook">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" target="_blank" title="instagram">
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" target="_blank" title="pinterest">
                      <i className="fa fa-pinterest"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" target="_blank" title="vimeo">
                      <i className="fa fa-vimeo"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
                <h6 className="text-uppercase font-weight-bold mb-4">
                  Company
                </h6>
                <ul className="list-unstyled mb-0">
                  <li className="mb-2">
                    <a href="#" className="text-muted">
                      about
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="text-muted">
                      contact us
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="text-muted">
                      Q/F
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="text-muted"></a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
                <h6 className="text-uppercase font-weight-bold mb-4">
                  Services
                </h6>
                <ul className="list-unstyled mb-0">
                  <li className="mb-2">
                    <a href="#" className="text-muted">
                      Advice
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="text-muted">
                      Work
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="text-muted">
                      .Abcd
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="text-muted">
                      Our dailing
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4 col-md-6 mb-lg-0">
                <h6 className="text-uppercase font-weight-bold mb-4">
                  Newsletter
                </h6>
                <p className="mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
                  itaque temporibus.
                </p>
                <div className="p-1 rounded border">
                  <div className="input-group">
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      aria-describedby="button-addon1"
                      className="form-control border-0 shadow-0"
                    />
                    <div className="input-group-append">
                      <button
                        id="button-addon1"
                        type="submit"
                        className="btn btn-link"
                      >
                        <i className="bi bi-search"></i>{" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-search"
                          viewBox="0 0 16 16"
                        >
                          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="copyright py-4 ">
            <div className="container text-center">
              <p className=" mb-0 py-2">
                © 2021 Abrar Muthanna Alrawi All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
