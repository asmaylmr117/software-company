import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ServiceSection = (props) => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    };

    // Helper function to construct proper URLs
    const constructImageUrl = (imagePath, baseUrl) => {
        if (!imagePath) return null;
        
        if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
            return imagePath;
        }
        
        let cleanPath = imagePath.replace(/^\.\./, '').replace(/^\/+/, '/');
        if (!cleanPath.startsWith('/')) {
            cleanPath = '/' + cleanPath;
        }
        
        return `${baseUrl}${cleanPath}`;
    };

    useEffect(() => {
        const fetchServices = async () => {
            try {
                const response = await fetch('https://portfolio-vercel-bi43.vercel.app/api/services?page=2');
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                console.log('API Response:', data);
                
                if (!data || !data.services || !Array.isArray(data.services)) {
                    throw new Error('Invalid API response: services array is missing');
                }
                
                const baseUrl = 'https://portfolio-vercel-bi43.vercel.app';
                
                // Filter services to include only IDs 1 to 5
                const targetIds = ['1', '2', '3', '4', '5'];
                const filteredServices = data.services.filter(service => targetIds.includes(service.Id));
                
                const mappedServices = filteredServices.map((service) => ({
                    id: service.Id,
                    col: service.col || 'col-lg-4 col-md-6',
                    sImg: service.sImg
                        ? constructImageUrl(service.sImg, baseUrl)
                        : `https://picsum.photos/400/300?random=${service.Id}`,
                    title: service.title || 'Untitled',
                    slug: service.slug 
                        ? service.slug.replace(/\s+/g, '-')
                        : `service-${service.Id}`,
                    thumb1: service.thumb1 || null,
                    thumb2: service.thumb2 || null,
                }));
                
                // Sort services to show IDs 1 and 2 first
                const sortedServices = mappedServices.sort((a, b) => {
                    if (a.id === '1' || a.id === '2') {
                        if (b.id === '1' || b.id === '2') {
                            return parseInt(a.id) - parseInt(b.id);
                        }
                        return -1;
                    }
                    if (b.id === '1' || b.id === '2') {
                        return 1;
                    }
                    return parseInt(a.id) - parseInt(b.id);
                });
                
                console.log('Filtered and Mapped Services:', sortedServices);
                setServices(sortedServices);
                setLoading(false);
            } catch (err) {
                console.error('Error fetching services:', err);
                setError(err.message);
                setLoading(false);
            }
        };

        fetchServices();
    }, []);

    if (loading) return <div className="text-center py-4">Loading services...</div>;
    if (error) return <div className="text-center py-4 text-danger">Error: {error}</div>;

    return (
        <section className="service_section section_space xb-hidden pb-0">
            <div className="container">
                <div className="heading_block text-center">
                    <div className="heading_focus_text">
                        Our
                        <span className="badge bg-secondary text-white">Specialize</span>
                    </div>
                    <h2 className="heading_text mb-0">Featured Services</h2>
                </div>

                <div className="row">
                    {services.length > 0 ? (
                        services.map((service, index) => (
                            service.title ? (
                                <div className={`${service.col} mt-30`} key={service.id || index}>
                                    <div className="service_block">
                                        <div className="service_image">
                                            <img
                                                src={service.sImg}
                                                alt={service.title}
                                                style={{ maxWidth: '100%', height: 'auto' }}
                                                onError={(e) => {
                                                    console.warn(`Failed to load image: ${e.target.src}`);
                                                    e.target.src = `https://picsum.photos/400/300?random=${service.id}`;
                                                }}
                                            />
                                        </div>
                                        <div className="service_content">
                                            <h3 className="service_title">
                                                <Link onClick={ClickHandler} to={`/service-single/${service.slug}`}>
                                                    {service.title}
                                                </Link>
                                            </h3>
                                            <div className="links_wrapper">
                                                <ul className="category_btns_group unordered_list">
                                                    {service.thumb1 && (
                                                        <li>
                                                            <Link 
                                                                onClick={ClickHandler} 
                                                                to={`/service-single/${service.slug}`}
                                                                className="category_btn"
                                                                style={{
                                                                    padding: '6px 12px',
                                                                    fontSize: '12px',
                                                                    borderRadius: '15px',
                                                                    backgroundColor: '#f8f9fa',
                                                                    color: '#6c757d',
                                                                    textDecoration: 'none',
                                                                    border: '1px solid #e9ecef',
                                                                    display: 'inline-block',
                                                                    transition: 'all 0.3s ease'
                                                                }}
                                                                onMouseEnter={(e) => {
                                                                    e.target.style.backgroundColor = '#007bff';
                                                                    e.target.style.color = 'white';
                                                                }}
                                                                onMouseLeave={(e) => {
                                                                    e.target.style.backgroundColor = '#f8f9fa';
                                                                    e.target.style.color = '#6c757d';
                                                                }}
                                                            >
                                                                {service.thumb1}
                                                            </Link>
                                                        </li>
                                                    )}
                                                    {service.thumb2 && (
                                                        <li>
                                                            <Link 
                                                                onClick={ClickHandler} 
                                                                to={`/service-single/${service.slug}`}
                                                                className="category_btn"
                                                                style={{
                                                                    padding: '6px 12px',
                                                                    fontSize: '12px',
                                                                    borderRadius: '15px',
                                                                    backgroundColor: '#f8f9fa',
                                                                    color: '#6c757d',
                                                                    textDecoration: 'none',
                                                                    border: '1px solid #e9ecef',
                                                                    display: 'inline-block',
                                                                    transition: 'all 0.3s ease'
                                                                }}
                                                                onMouseEnter={(e) => {
                                                                    e.target.style.backgroundColor = '#007bff';
                                                                    e.target.style.color = 'white';
                                                                }}
                                                                onMouseLeave={(e) => {
                                                                    e.target.style.backgroundColor = '#f8f9fa';
                                                                    e.target.style.color = '#6c757d';
                                                                }}
                                                            >
                                                                {service.thumb2}
                                                            </Link>
                                                        </li>
                                                    )}
                                                </ul>
                                                <Link
                                                    onClick={ClickHandler}
                                                    to={`/service-single/${service.slug}`}
                                                    className="icon_block"
                                                >
                                                    <i className="fa-regular fa-arrow-up-right"></i>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : null
                        ))
                    ) : (
                        <div className="col-12 text-center">
                            <p>No services found with IDs 1 to 5.</p>
                        </div>
                    )}
                </div>

                <div className="btns_group pb-0">
                    <Link onClick={ClickHandler} className="btn btn-outline-light" to="/service">
                        <span className="btn_label" data-text="More Services">
                            More Services
                        </span>
                        <span className="btn_icon">
                            <i className="fa-solid fa-arrow-up-right"></i>
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ServiceSection;