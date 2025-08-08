import React from 'react';
import { Link } from 'react-router-dom';
import Bg1 from '../../images/shapes/it_solution_hero_bg_1.svg';
import Bg2 from '../../images/hero/it_solution_hero_image_2.webp';
import heroImg from '../../images/hero/it_solution_hero_image_1.webp';
import icon from '../../images/icons/icon_stars_trustpilot.svg';

const Hero = () => {
    return (
        <section className="it_solution_hero_section">
            <div className="container">
                <div className="row">
                    {/* Left Content Column */}
                    <div className="col-lg-7">
                        <div className="it_solution_hero_content" style={{ backgroundImage: `url(${Bg1})` }}>
                            <div className="heading_focus_text mb-0 d-inline-flex align-items-center">
                                👋 Hi We <span className="badge bg-secondary text-white">Are Techco</span>
                            </div>
                            <h1>
                                Grow your Business with Organic & IT Solution Technology
                            </h1>
                            <p>
                                In today's competitive business environment, the demand for efficient and 
                                cost-effective IT solutions has never been more critical for success.
                            </p>
                            <ul className="btns_group unordered_list p-0 justify-content-start">
                                <li>
                                    <Link className="btn" to="/pricing">
                                        <span className="btn_label" data-text="Get Started">Get Started</span>
                                        <span className="btn_icon">
                                            <i className="fa-solid fa-arrow-up-right"></i>
                                        </span>
                                    </Link>
                                </li>
                                <li>
                                    <div className="review_short_info">
                                        <div className="d-flex align-items-center">
                                            <img 
                                                src={icon} 
                                                alt="Trustpilot Review Stars" 
                                                loading="lazy"
                                            />
                                            <span>4.8</span>
                                        </div>
                                        <div className="review_counter">From <b>200+</b> reviews</div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Right Images Column */}
                    <div className="col-lg-5">
                        <ul className="it_solution_hero_images unordered_list">
                            {/* Main Hero Image */}
                            <li>
                                <img 
                                    src={heroImg} 
                                    alt="Techco IT Solutions - Professional Technology Services" 
                                    loading="lazy"
                                />
                            </li>

                            {/* Worldwide Clients Stats */}
                            <li>
                                <div className="worldwide_clients">
                                    <div className="counter_value">150+</div>
                                    <p>Worldwide clients across different countries</p>
                                    <ul className="avatar_group unordered_list">
                                        <li style={{ backgroundColor: '#0957ff', color: '#fff' }}>
                                            1k+
                                        </li>
                                        <li style={{ backgroundColor: '#2209ff', color: '#fff' }}>
                                            2k+
                                        </li>
                                        <li style={{ backgroundColor: '#1909ff', color: '#fff' }}>
                                            3k+
                                        </li>
                                        <li>
                                            5k+
                                        </li>
                                    </ul>
                                </div>
                            </li>

                            {/* Service Categories */}
                            <li className="categories-container">
                                <ul className="categories unordered_list_block">
                                    <li>
                                        <Link to="/service-single/Data-Tracking-and-Security">
                                            <span>Data Security</span>
                                            <i className="fa-solid fa-plus"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/service-single/IT-Management-Servicesent">
                                            <span>Web Development</span>
                                            <i className="fa-solid fa-plus"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/service">
                                            <span>Analytics & Optimization</span>
                                            <i className="fa-solid fa-plus"></i>
                                        </Link>
                                    </li>
                                </ul>
                            </li>

                            {/* Business Growth Progress Chart */}
                            <li>
                                <div className="business_growth_content" style={{ backgroundColor: '#ff5709ea' }}>
                                    <div className="business_growth">
                                        <svg
                                            role="progressbar"
                                            width="260"
                                            height="260"
                                            viewBox="0 0 100 100"
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                            aria-valuenow="88"
                                        >
                                            <circle
                                                cx="50%"
                                                cy="50%"
                                                r="42"
                                                shapeRendering="geometricPrecision"
                                                fill="none"
                                                stroke="rgba(255, 255, 255, 0.5)"
                                                strokeWidth="5"
                                            />
                                            <circle
                                                cx="50%"
                                                cy="50%"
                                                r="42"
                                                shapeRendering="geometricPrecision"
                                                className="business_growth-circle-58"
                                                fill="none"
                                                strokeWidth="8"
                                                strokeDashoffset="31.680000000000007"
                                                strokeDasharray="264"
                                                strokeLinecap="round"
                                                style={{ transform: 'rotate(-90deg)', transformOrigin: '50% 50%' }}
                                                stroke="#fff"
                                                data-angel="88"
                                            />
                                            <text
                                                className="business_growth-text-58"
                                                x="50%"
                                                y="50%"
                                                fill="#fff"
                                                textAnchor="middle"
                                                dy="0.35em"
                                                fontSize="24px"
                                                fontWeight="700"
                                            >
                                                <tspan className="business_growth-percent-58">88</tspan>
                                                <tspan className="business_growth-unit-58">%</tspan>
                                            </text>
                                        </svg>
                                        <p>
                                            get 88% of the best services and growth business
                                        </p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;