import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Pagination, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const ProjectSection = (props) => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                setLoading(true);
                const response = await fetch('https://portfolio-vercel-bi43.vercel.app/api/projects');
                
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                
                const data = await response.json();
                
                // Handle different API response structures
                let projectsArray = [];
                if (Array.isArray(data)) {
                    projectsArray = data;
                } else if (data && Array.isArray(data.projects)) {
                    projectsArray = data.projects;
                } else if (data && Array.isArray(data.data)) {
                    projectsArray = data.data;
                } else if (data && typeof data === 'object') {
                    // If single object returned, wrap it in an array
                    projectsArray = [data];
                } else {
                    console.log('Unexpected API response structure:', data);
                    projectsArray = [];
                }
                
                setProjects(projectsArray);
                setError(null);
            } catch (err) {
                console.error('Error fetching projects:', err);
                setError('Failed to load projects');
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    if (loading) {
        return (
            <section className="portfolio_section xb-hidden section_space pb-0">
                <div className="container">
                    <div className="text-center">
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        <p>Loading projects...</p>
                    </div>
                </div>
            </section>
        );
    }

    if (error) {
        return (
            <section className="portfolio_section xb-hidden section_space pb-0">
                <div className="container">
                    <div className="alert alert-danger text-center">
                        <h4>Error Loading Projects</h4>
                        <p>{error}</p>
                        <button 
                            className="btn btn-primary" 
                            onClick={() => window.location.reload()}
                        >
                            Try Again
                        </button>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="portfolio_section xb-hidden section_space pb-0">
            <div className="container">
                <div className="heading_block">
                    <div className="row align-items-end">
                        <div className="col-lg-7">
                            <div className="heading_focus_text">
                                <span className="badge bg-secondary text-white">Crafting</span>
                                Success With 😍 Project
                            </div>
                            <h2 className="heading_text">
                                Our Recent Best Works
                            </h2>
                            <p className="heading_description mb-0">
                                Our recent projects highlight our expertise in delivering tailored solutions that meet the unique needs and objectives of our clients,custom software.
                            </p>
                        </div>
                        <div className="col-lg-5 d-none d-lg-flex justify-content-end">
                            <Link onClick={ClickHandler} to={'/portfolio'} className="btn btn-primary">
                                <span className="btn_label" data-text="All Works">All Works</span>
                                <span className="btn_icon">
                                    <i className="fa-solid fa-arrow-up-right"></i>
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="portfolio_carousel">
                <Swiper
                    // install Swiper modules
                    modules={[Pagination, A11y, Autoplay]}
                    slidesPerView={1}
                    loop={true}
                    spaceBetween={30}
                    allowTouchMove={true}
                    centeredSlides={true}
                    pagination={{ clickable: true }}
                    autoplay={{
                        delay: 1000, // 3 seconds delay
                        disableOnInteraction: false, // Continue autoplay after user interaction
                        pauseOnMouseEnter: true, // Pause when mouse hovers over
                    }}
                    speed={800}
                    parallax={true}
                    breakpoints={{
                        1025: {
                            slidesPerView: 2,
                        },
                    }}
                >
                    {projects && projects.length > 0 ? projects.slice(0, 5).map((project, prj) => (
                        <SwiperSlide key={prj}>
                            <div className="portfolio_block">
                                <div className="portfolio_image">
                                    <Link onClick={ClickHandler} className="portfolio_image_wrap bg-light" to={`/portfolio_details/${project.slug}`}>
                                        <img 
                                            src={`https://portfolio-vercel-bi43.vercel.app${project.pImg || project.image || project.thumbnail}`} 
                                            alt={project.title || "Project"} 
                                            onError={(e) => {
                                                e.target.src = 'https://via.placeholder.com/400x300?text=Project+Image';
                                            }}
                                        />
                                    </Link>
                                </div>
                                <div className="portfolio_content">
                                    <h3 className="portfolio_title">
                                        <Link onClick={ClickHandler} to={`/portfolio_details/${project.slug}`}>
                                            {project.title}
                                        </Link>
                                    </h3>
                                    <ul className="category_list unordered_list">
                                        <li><Link onClick={ClickHandler} to={`/portfolio_details/${project.slug}`}>{project.sub || project.category || project.subtitle}</Link></li>
                                    </ul>
                                    <Link onClick={ClickHandler} className="btn btn-outline-light" to={`/portfolio_details/${project.slug}`}>
                                        <span className="btn_label" data-text="Explore">Explore</span>
                                        <span className="btn_icon">
                                            <i className="fa-solid fa-arrow-up-right"></i>
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </SwiperSlide>
                    )) : (
                        <SwiperSlide>
                            <div className="portfolio_block">
                                <div className="text-center p-4">
                                    <h3>No projects available</h3>
                                    <p>Check back later for new projects.</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    )}
                </Swiper>
            </div>
            <div className="container text-center d-block d-lg-none">
                <div className="btns_group pb-0">
                    <Link onClick={ClickHandler} className="btn btn-primary" to="/portfolio">
                        <span className="btn_label" data-text="All Works">All Works</span>
                        <span className="btn_icon">
                            <i className="fa-solid fa-arrow-up-right"></i>
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default ProjectSection;