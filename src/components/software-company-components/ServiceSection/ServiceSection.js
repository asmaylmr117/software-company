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

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    };

    useEffect(() => {
        const fetchServices = async () => {
            try {
                // Fetch page 1
                const responsePage1 = await fetch('https://portfolio-vercel-bi43.vercel.app/api/services?page=1');
                const dataPage1 = await responsePage1.json();
                
                // Fetch page 2
                const responsePage2 = await fetch('https://portfolio-vercel-bi43.vercel.app/api/services?page=2');
                const dataPage2 = await responsePage2.json();

                // Filter services with IDs 8, 9, 10, 11 from page 1 and 6, 7 from page 2
                const filteredPage1 = dataPage1.data.filter(service => [8, 9, 10, 11].includes(service.id));
                const filteredPage2 = dataPage2.data.filter(service => [6, 7].includes(service.id));

                // Combine and sort services by ID
                const combinedServices = [...filteredPage1, ...filteredPage2].sort((a, b) => a.id - b.id);

                // Map to match the expected structure
                const formattedServices = combinedServices.map(service => ({
                    id: service.id,
                    slug: service.slug,
                    title: service.title,
                    sImg: service.image || 'default-image-path', // Adjust based on actual API response
                    features: service.features || [] // Adjust based on actual API response
                }));

                setServices(formattedServices);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching services:', error);
                setLoading(false);
            }
        };

        fetchServices();
    }, []);

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

                {loading ? (
                    <div>Loading services...</div>
                ) : (
                    <div className="row">
                        {services.map((service, srv) => (
                            <div className="col-lg-4" key={srv}>
                                <div className="service_block_2">
                                    <div className="service_icon">
                                        <img src={service.sImg} alt="Techco - Service icon" />
                                    </div>
                                    <h3 className="service_title">
                                        <Link onClick={ClickHandler} to={`/service-single/${service.slug}`}>
                                            {service.title}
                                        </Link>
                                    </h3>
                                    <ul className="icon_list unordered_list_block">
                                        {service.features.map((feature, featureitem) => (
                                            <li key={featureitem}>
                                                <span className="icon_list_icon">
                                                    <i className="fa-regular fa-circle-dot"></i>
                                                </span>
                                                <span className="icon_list_text">
                                                    {feature}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
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