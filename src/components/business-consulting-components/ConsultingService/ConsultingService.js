import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Bg = 'https://portfolio-vercel-bi43.vercel.app/images/backgrounds/bg_image_3.webp';
const BASE_URL = 'https://portfolio-vercel-bi43.vercel.app'; // Base URL for images

const ConsultingService = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch data from both pages of the API
    useEffect(() => {
        const fetchServices = async () => {
            try {
                setLoading(true);
                // Fetch page 1
                const response1 = await fetch('https://portfolio-vercel-bi43.vercel.app/api/Services?page=1');
                if (!response1.ok) throw new Error('Failed to fetch page 1');
                const data1 = await response1.json();

                // Fetch page 2
                const response2 = await fetch('https://portfolio-vercel-bi43.vercel.app/api/Services?page=2');
                if (!response2.ok) throw new Error('Failed to fetch page 2');
                const data2 = await response2.json();

                // Combine services from both pages
                const allServices = [...(data1.services || []), ...(data2.services || [])];
                // Sort by Id in descending order to match original order (17 to 1)
                const sortedServices = allServices.sort((a, b) => parseInt(b.Id) - parseInt(a.Id));
                setServices(sortedServices);
                setLoading(false);
            } catch (err) {
                console.error('Error fetching services:', err);
                setError('Failed to load services. Please try again later.');
                setLoading(false);
            }
        };

        fetchServices();
    }, []);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    };

    // Handle image load errors
    const handleImageError = (e) => {
        console.error('Image failed to load:', e.target.src);
        e.target.src = '/path/to/fallback-image.svg'; // Replace with a fallback image path
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <section className="business_consulting_service_section section_space" style={{ backgroundImage: `url(${Bg})` }}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-7">
                        <div className="heading_block text-center">
                            <h2 className="heading_text">
                                Transformative Solutions Tailored to Your Needs
                            </h2>
                            <p className="heading_description mb-0 text-dark">
                                Driving Growth and Innovation Through Customized Strategies
                            </p>
                        </div>
                    </div>
                </div>

                <div className="business_consulting_services row">
                    {services.slice(11, 17).map((service, srv) => (
                        <div className="col-lg-4" key={srv}>
                            <div className="iconbox_block" style={{
    width: '100%',
    height: '370px',
    objectFit: 'cover',
    borderRadius: '10px',
  }}>
                                <div className="iconbox_icon">
                                    <img
                                        src={`${BASE_URL}/${service.sImg.replace(/^\.\.\//, '')}`} // Remove "../" and prepend base URL
                                        alt={`Techco - ${service.title} icon`}
                                        onError={handleImageError}
                                        
                                    />
                                </div>
                                <div className="iconbox_content">
                                    <h3 className="iconbox_title">
                                        <Link onClick={ClickHandler} to={`/service-single/${service.slug}`}>
                                            {service.title}
                                        </Link>
                                    </h3>
                                    <p className="mb-0">
                                        {service.description || 'Our consulting services are customized to suit the unique needs and goals of each client, ensuring precise alignment with their business objectives.'}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="btns_group pb-0">
                    <Link onClick={ClickHandler} className="creative_btn" to="/service">
                        <span className="btn_label bg-primary">Get Started Today</span>
                        <span className="btn_icon">
                            <i className="bg-primary fa-solid fa-arrow-up-right"></i>
                            <i className="bg-primary fa-solid fa-arrow-up-right"></i>
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ConsultingService;