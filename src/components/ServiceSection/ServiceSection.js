import React from 'react';
import Services from '../../api/service'
import { Link } from "react-router-dom";

const ServiceSection = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="service_section section_space xb-hidden pb-0">
            <div className="container">
                <div className="heading_block text-center">
                    <div className="heading_focus_text">
                        Our
                        <span className="badge bg-secondary text-white">Specialize</span>
                    </div>
                    <h2 className="heading_text mb-0">
                        Featured Services
                    </h2>
                </div>

                <div className="row">
                    {Services.slice(0, 5).map((service, srv) => (
                        <div className={`${service.col} mt-30`} key={srv}>
                            {service.title ?
                                <div className="service_block">
                                    <div className="service_image">
                                        <img src={service.sImg} alt="IT Management Services" />
                                    </div>
                                    <div className="service_content">
                                        <h3 className="service_title"><Link onClick={ClickHandler} to={`/service-single/${service.slug}`}>{service.title}</Link>
                                        </h3>

                                        <div className="links_wrapper">
                                            <ul className="category_btns_group unordered_list">
                                                <li><Link onClick={ClickHandler} to={`/service-single/${service.slug}`}>{service.thumb1}</Link></li>
                                                <li><Link onClick={ClickHandler} to={`/service-single/${service.slug}`}>{service.thumb2}</Link></li>
                                            </ul>
                                            <Link onClick={ClickHandler} to={`/service-single/${service.slug}`} className="icon_block">
                                                <i className="fa-regular fa-arrow-up-right"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                : ''}
                        </div>
                    ))}
                </div>

                <div className="btns_group pb-0">
                    <Link onClick={ClickHandler} className="btn btn-outline-light" to="/service">
                        <span className="btn_label" data-text="More Services">More Services</span>
                        <span className="btn_icon">
                            <i className="fa-solid fa-arrow-up-right"></i>
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default ServiceSection;