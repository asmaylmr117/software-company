import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Bg from '../../../images/shapes/shape_title_under_line.svg';
import shape1 from '../../../images/shapes/shape_line_5.svg';
import shape2 from '../../../images/shapes/shape_line_6.svg';
import shape3 from '../../../images/shapes/shape_space_1.svg';
import shape4 from '../../../images/shapes/shape_angle_1.webp';
import shape5 from '../../../images/shapes/shape_angle_2.webp';

const ServiceSection = (props) => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    };

    useEffect(() => {
        const fetchServices = async () => {
            try {
                // Fetch page 1
                const responsePage1 = await fetch('https://portfolio-vercel-bi43.vercel.app/api/services?page=1');
                const dataPage1 = await responsePage1.json();
                console.log('Page 1 response:', dataPage1);
                
                // Fetch page 2
                const responsePage2 = await fetch('https://portfolio-vercel-bi43.vercel.app/api/services?page=2');
                const dataPage2 = await responsePage2.json();
                console.log('Page 2 response:', dataPage2);

                // Handle different response structures for page 1
                let servicesPage1 = [];
                if (Array.isArray(dataPage1)) {
                    servicesPage1 = dataPage1;
                } else if (dataPage1.data && Array.isArray(dataPage1.data)) {
                    servicesPage1 = dataPage1.data;
                } else if (dataPage1.services && Array.isArray(dataPage1.services)) {
                    servicesPage1 = dataPage1.services;
                } else {
                    console.warn('Unexpected page 1 response structure:', dataPage1);
                    servicesPage1 = [];
                }

                // Handle different response structures for page 2
                let servicesPage2 = [];
                if (Array.isArray(dataPage2)) {
                    servicesPage2 = dataPage2;
                } else if (dataPage2.data && Array.isArray(dataPage2.data)) {
                    servicesPage2 = dataPage2.data;
                } else if (dataPage2.services && Array.isArray(dataPage2.services)) {
                    servicesPage2 = dataPage2.services;
                } else {
                    console.warn('Unexpected page 2 response structure:', dataPage2);
                    servicesPage2 = [];
                }

                // Filter services with IDs 8, 9, 10, 11 from page 1 and 6, 7 from page 2
                const filteredPage1 = servicesPage1.filter(service => 
                    service && service.id && [8, 9, 10, 11].includes(service.id)
                );
                const filteredPage2 = servicesPage2.filter(service => 
                    service && service.id && [6, 7].includes(service.id)
                );

                // Combine and sort services by ID
                const combinedServices = [...filteredPage1, ...filteredPage2].sort((a, b) => a.id - b.id);

                // Map to match the expected structure
                const formattedServices = combinedServices.map(service => ({
                    id: service.id,
                    slug: service.slug || `service-${service.id}`,
                    title: service.title || service.name || 'Untitled Service',
                    sImg: service.image || service.sImg || '/images/services/default-service.webp',
                    features: service.features || service.description ? [service.description] : []
                }));

                setServices(formattedServices);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching services:', error);
                setError(error.message);
                setLoading(false);
            }
        };

        fetchServices();
    }, []);

    if (loading) {
        return (
            <section className="service_section pt-175 pb-80 bg-light section_decoration xb-hidden">
                <div className="container">
                    <div className="text-center">Loading services...</div>
                </div>
            </section>
        );
    }

    if (error) {
        return (
            <section className="service_section pt-175 pb-80 bg-light section_decoration xb-hidden">
                <div className="container">
                    <div className="text-center text-danger">Error loading services: {error}</div>
                </div>
            </section>
        );
    }

    return (
        <section className="service_section pt-175 pb-80 bg-light section_decoration xb-hidden">
            <div className="container">
                <div className="heading_block text-center">
                    <div className="heading_focus_text has_underline d-inline-flex" style={{ backgroundImage: `url(${Bg})` }}>
                        Our Services
                    </div>
                    <h2 className="heading_text mb-0">
                        How We Can <mark>Help</mark> You
                    </h2>
                </div>

                <div className="row">
                    {services.length > 0 ? (
                        services.map((service, srv) => (
                            <div className="col-lg-4" key={service.id || srv}>
                                <div className="service_block_2">
                                    <div className="service_icon">
                                        <img 
                                            src={service.sImg} 
                                            alt={`${service.title} - Service icon`}
                                            onError={(e) => {
                                                e.target.src = '/images/services/default-service.webp';
                                            }}
                                        />
                                    </div>
                                    <h3 className="service_title">
                                        <Link onClick={ClickHandler} to={`/service-single/${service.slug}`}>
                                            {service.title}
                                        </Link>
                                    </h3>
                                    <ul className="icon_list unordered_list_block">
                                        {service.features && service.features.length > 0 ? (
                                            service.features.map((feature, featureitem) => (
                                                <li key={featureitem}>
                                                    <span className="icon_list_icon">
                                                        <i className="fa-regular fa-circle-dot"></i>
                                                    </span>
                                                    <span className="icon_list_text">
                                                        {feature}
                                                    </span>
                                                </li>
                                            ))
                                        ) : (
                                            <li>
                                                <span className="icon_list_icon">
                                                    <i className="fa-regular fa-circle-dot"></i>
                                                </span>
                                                <span className="icon_list_text">
                                                    Professional service available
                                                </span>
                                            </li>
                                        )}
                                    </ul>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="col-12 text-center">
                            <p>No services available at the moment.</p>
                        </div>
                    )}
                </div>
            </div>

            <div className="decoration_item shape_image_1">
                <img src={shape1} alt="Techco Shape"/>
            </div>
            <div className="decoration_item shape_image_2">
                <img src={shape2} alt="Techco Shape"/>
            </div>
            <div className="decoration_item shape_image_3">
                <img src={shape3} alt="Techco Shape"/>
            </div>
            <div className="decoration_item shape_image_4">
                <img src={shape4} alt="Techco Shape Angle"/>
            </div>
            <div className="decoration_item shape_image_5">
                <img src={shape5} alt="Techco Shape Angle"/>
            </div>
        </section>
    );
};

export default ServiceSection;
