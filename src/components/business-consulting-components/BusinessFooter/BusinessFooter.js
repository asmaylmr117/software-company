import React from 'react'
import { Link } from 'react-router-dom'


const ClickHandler = () => {
    window.scrollTo(10, 0);
}


const BusinessFooter = (props) => {
    return (
        <footer className="site_footer footer_layout_3">
        <div className="footer_main_content bg-dark">
          <div className="container">
            <div className="row mb-5">
              <div className="col-lg-6">
                <div className="heading_block mb-lg-0 text-white">
                  <h2 className="heading_text mb-1">
                    Tell Us About Your Project.
                  </h2>
                  <p className="heading_description mb-0 text-uppercase">
                    Let's collaborate and make great stuff.
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="social_wrap">
                  <h3 className="footer_info_title text-white mb-4 mb-md-0">Follow Us</h3>
                  <ul className="social_icons_block unordered_list">
                    <li>
                      <Link onClick={ClickHandler} to="/home_business_consulting">
                        <i className="fa-brands fa-facebook-f"></i>
                      </Link>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} to="/home_business_consulting">
                        <i className="fa-brands fa-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} to="/home_business_consulting">
                        <i className="fa-brands fa-linkedin-in"></i>
                      </Link>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} to="/home_business_consulting">
                        <i className="fa-brands fa-youtube"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="row justify-content-lg-between pt-lg-4">
              <div className="col-lg-5">
                <div className="row">
                  <div className="col-md-6 col-sm-6">
                    <div className="footer_widget">
                      <h3 className="footer_info_title">Start a Conversation</h3>
                      <ul className="icon_list unordered_list_block">
                        <li>
                          <a href="mailto:work@techco.com">
                            <span className="icon_list_text">
                              work@techco.com
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6">
                    <div className="footer_widget">
                      <h3 className="footer_info_title">Call Us:</h3>
                      <ul className="icon_list unordered_list_block">
                        <li>
                          <a href="tel:+15733434096">
                            <span className="icon_list_text">
                              +1 573 343 4096
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="footer_widget">
                  <h3 className="footer_info_title">Useful Links</h3>
                  <ul className="icon_list unordered_list_block">
                    <li>
                      <Link onClick={ClickHandler} to="/service">
                        <span className="icon_list_text">
                          Careers
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} to="/team">
                        <span className="icon_list_text">
                          Our Team
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} to="/portfolio">
                        <span className="icon_list_text">
                          Latest Projects
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} to="/portfolio">
                        <span className="icon_list_text">
                          Awarded portfolio
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} to="/about">
                        <span className="icon_list_text">
                          FAQ
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="footer_widget">
                  <h3 className="footer_info_title">Address</h3>
                  <ul className="icon_list unordered_list_block">
                    <li>
                      <Link onClick={ClickHandler} to="/home_business_consulting">
                        <span className="icon_list_text">
                          Las Vegas, NV, USA
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} to="/home_business_consulting">
                        <span className="icon_list_text">
                          201 Spear Street,
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} to="/home_business_consulting">
                        <span className="icon_list_text">
                          San Francisco, CA, USA
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer_bottom bg-primary text-white">
          <div className="container d-md-flex align-items-md-center justify-content-md-between">
            <p className="copyright_text m-0">
              Copyright © 2024 Techco, All rights reserved.
            </p>
            <p className="copyright_text m-0">
              Developed by <Link onClick={ClickHandler} to="/" target="_blank">XpressBuddy</Link>
            </p>
          </div>
        </div>
      </footer>
    )
}

export default BusinessFooter;