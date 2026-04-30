import React from 'react';
import { Link } from "react-router-dom";
import { useServices } from '../../hooks/useQueries';
import { getImageUrl } from '../../api/axiosConfig';

const ServiceSection = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const { data: services = [], isLoading: loading, error } = useServices();

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

                {loading && (
                    <div className="text-center py-5">
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        <p className="mt-3">Loading services...</p>
                    </div>
                )}

                {error && (
                    <div className="alert alert-warning text-center" role="alert">
                        <i className="fa-solid fa-triangle-exclamation me-2"></i>
                        Could not load services: {error}
                    </div>
                )}

                {!loading && !error && services.length === 0 && (
                    <div className="text-center py-5">
                        <p>No services found. Please add services from the dashboard.</p>
                    </div>
                )}

                <div className="row">
                    {services.slice(0, 6).map((service, srv) => (
                        <div className={`${service.col || 'col-lg-4'} mt-30`} key={srv}>
                            <div className="service_block">
                                {service.sImg && (
                                    <div className="service_image">
                                        <img src={getImageUrl(service.sImg)} alt={service.title} />
                                    </div>
                                )}
                                <div className="service_content">
                                    <h3 className="service_title">
                                        <Link onClick={ClickHandler} to={`/service-single/${service.slug}`}>
                                            {service.title}
                                        </Link>
                                    </h3>
                                    <p className="service_description">
                                        {service.description}
                                    </p>
                                    <div className="links_wrapper">
                                        <Link onClick={ClickHandler} to={`/service-single/${service.slug}`} className="icon_block">
                                            <i className="fa-regular fa-arrow-up-right"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
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