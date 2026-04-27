import React from 'react';
import { Link } from 'react-router-dom'
import CountUp from 'react-countup';
import Bg from '../../images/hero/business_consulting_hero_section_bg.jpg'
import shape1 from '../../images/hero/logo_google.svg'
import shape2 from '../../images/hero/business_consulting_hero_image_1.webp'
import shape3 from '../../images/hero/business_consulting_hero_image_2.webp'
import icon1 from '../../images/icons/icon_user_3.svg'
import icon2 from '../../images/icons/icon_wallet.svg'

const Hero3 = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    return (
        <section className="business_consulting_hero_section section_decoration mb-0" style={{ backgroundImage: `url(${Bg})` }}>
            <div className="container">
                <div className="row align-items-center justify-content-lg-between">
                    <div className="col-lg-5">
                        <div className="business_consulting_hero_content">
                            <h1>
                                Innovative <mark><u>Growth</u></mark> Strategies
                            </h1>
                            <p>
                                Navigating the Path to Success: Insightful Consulting for Thriving Businesses
                            </p>
                            <Link onClick={ClickHandler} className="creative_btn" to="/pricing">
                                <span className="btn_label bg-primary">Get Started Today</span>
                                <span className="btn_icon">
                                    <i className="bg-primary fa-solid fa-arrow-up-right"></i>
                                    <i className="bg-primary fa-solid fa-arrow-up-right"></i>
                                </span>
                            </Link>
                            <div className="google_reviews">
                                <div className="review_admin_logo">
                                    <img src={shape1} alt="Google Logo" />
                                </div>
                                <div className="review_info_content">
                                    <ul className="rating_block unordered_list">
                                        <li><i className="fa-solid fa-star fa-fw"></i></li>
                                        <li><i className="fa-solid fa-star fa-fw"></i></li>
                                        <li><i className="fa-solid fa-star fa-fw"></i></li>
                                        <li><i className="fa-solid fa-star fa-fw"></i></li>
                                        <li><i className="fa-solid fa-star fa-fw"></i></li>
                                    </ul>
                                    <div className="review_counter">4.8 Google Reviews <b>(128 Reviews)</b></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="business_consulting_hero_image">
                            <img className="hero_image" src={shape2} alt="Business Consulting" />
                            <div className="funfact_block capsule_layout wow fadeInUp" data-wow-delay=".1s">
                                <div className="funfact_content">
                                    <div className="counter_value">
                                        <span><CountUp end={20} enableScrollSpy /></span>
                                        <span>M+</span>
                                    </div>
                                    <h3 className="funfact_title mb-0">Happy Customer</h3>
                                </div>
                                <div className="funfact_icon">
                                    <img src={icon1} alt="Techco - SVG Icon User" />
                                </div>
                            </div>
                            <div className="funfact_block middle capsule_layout wow fadeInUp" data-wow-delay=".2s">
                                <div className="funfact_icon">
                                    <img src={icon2} alt="Techco - SVG Icon Wallet" />
                                </div>
                                <div className="funfact_content">
                                    <h3 className="funfact_title mb-0">Company Value</h3>
                                    <div className="counter_value">
                                        <span>$</span>
                                        <span><CountUp end={500000} enableScrollSpy /></span>
                                    </div>
                                </div>
                            </div>
                            <div className="funfact_block capsule_layout wow fadeInUp" data-wow-delay=".3s">
                                <div className="funfact_content pt-2 pb-1">
                                    <h3 className="funfact_title mb-0 text-center">Success Rate</h3>
                                    <div className="counter_value justify-content-center">
                                        <span><CountUp end={98} enableScrollSpy /></span>
                                        <span>%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="decoration_item shape_1">
                <img src={shape3} alt="Shape" />
            </div>
        </section>
    )
}

export default Hero3;