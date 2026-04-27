import React from 'react';
import Bg from '../../images/shapes/shape_title_under_line.svg'
import circle1 from '../../images/hero/circle_engine_1.webp'
import circle2 from '../../images/hero/circle_engine_2.webp'
import circle3 from '../../images/hero/circle_engine_3.webp'
import circle4 from '../../images/hero/circle_engine_4.webp'
import shape1 from '../../images/hero/shape_image_1.webp'
import shape2 from '../../images/hero/shape_image_2.webp'
import shape3 from '../../images/hero/shape_image_3.webp'
import shape4 from '../../images/hero/shape_image_4.webp'

const Hero2 = (props) => {

    return (

        <section className="software_company_hero_section xb-hidden">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="content_wrap">
                            <div className="heading_focus_text has_underline text-white d-inline-flex" style={{ backgroundImage: `url(${Bg})` }}>
                                Perfect Company Solution
                            </div>
                            <h1 className="text-white">
                                We Help Companies in <mark>Digitizing</mark> Their Businesses.
                            </h1>
                            <p>
                                In today's rapidly evolving digital landscape, staying ahead of the curve is essential for businesses aiming to thrive and succeed.
                            </p>
                            <ul className="step_list text-white unordered_list_block">
                                <li>Focus on quality first</li>
                                <li>Get to the market on time</li>
                            </ul>
                            <ul className="btns_group unordered_list p-0 justify-content-start">
                                <li>
                                    <a className="btn" href="pricing.html">
                                        <span className="btn_label" data-text="Contact Us Today!">Contact Us Today!</span>
                                        <span className="btn_icon">
                                            <i className="fa-solid fa-arrow-up-right"></i>
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a className="hotline_block" href="tel:+420318568511">
                                        <span className="hotline_icon">
                                            <i className="fa-solid fa-phone-volume"></i>
                                        </span>
                                        <span className="hotline_content">
                                            <small>CONTACT US DAILY</small>
                                            <strong className="text-white">(+420) 318 568 511</strong>
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="engine_image">
                            <div className="image_wrap_1">
                                <img src={circle1} alt="Engine" />
                            </div>
                            <div className="image_wrap_2">
                                <img src={circle2} alt="Engine" />
                            </div>
                            <div className="image_wrap_3">
                                <img src={circle3} alt="Engine" />
                            </div>
                            <div className="image_wrap_4">
                                <img src={circle4} alt="Engine" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="shape_image_1">
                <img src={shape1} alt="Engine" />
            </div>
            <div className="shape_image_2">
                <img src={shape2} alt="Engine" />
            </div>
            <div className="shape_image_3">
                <img src={shape3} alt="Engine" />
            </div>
            <div className="shape_image_4">
                <img src={shape4} alt="Engine" />
            </div>
        </section>
    )
}

export default Hero2;