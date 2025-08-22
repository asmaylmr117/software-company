import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Bg from '../../../images/backgrounds/bg_image_2.webp';
import Bg2 from '../../../images/shapes/shape_bg_1.webp';
import Bg3 from '../../../images/shapes/shape_title_under_line.svg';
import about1 from '../../../images/services/service_image_1.webp';
import aIcon1 from '../../../images/avatar/avatar_1.webp';
import aIcon2 from '../../../images/avatar/avatar_2.webp';
import aIcon3 from '../../../images/avatar/avatar_3.webp';
import aIcon4 from '../../../images/icons/icon_global.svg';
import aIcon5 from '../../../images/shapes/shape_line.webp';
import shape1 from '../../../images/shapes/shape_space_2.svg';

const About = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to get complete image URL
  const getImageUrl = (imagePath) => {
    if (!imagePath) {
      return 'https://via.placeholder.com/400x300/f8f9fa/6c757d?text=No+Image';
    }
    
    // If the URL starts with '/', it's a relative path, so add the base URL
    if (imagePath.startsWith('/')) {
      return `https://portfolio-vercel-bi43.vercel.app${imagePath}`;
    }
    // If it doesn't start with 'http', assume it's relative and add base URL
    else if (!imagePath.startsWith('http')) {
      return `https://portfolio-vercel-bi43.vercel.app/${imagePath}`;
    }
    
    return imagePath;
  };

  // Function to handle image errors
  const handleImageError = (e) => {
    e.target.src = 'https://via.placeholder.com/400x300/f8f9fa/6c757d?text=Image+Not+Available';
    e.target.alt = 'Image not available';
  };

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://portfolio-vercel-bi43.vercel.app/api/projects');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('Projects API Response:', data); // Debug log
        
        // Set projects from API response, default to empty array if undefined
        setProjects(data.projects || []);
        setError(null);
      } catch (error) {
        console.error('Error fetching projects:', error);
        setError(error.message);
        setProjects([]); // Ensure projects is always an array even on error
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <section className="about_and_case_section section_space section_decoration bg-dark" style={{ backgroundImage: `url(${Bg})` }}>
      <div className="container">
        <div className="row align-items-center justify-content-lg-between">
          <div className="col-lg-7 order-lg-last">
            <div className="about_image_2">
              <div className="image_wrap">
                <img src={about1} alt="Techco - About" />
              </div>
              <div className="about_funfact_info" style={{ backgroundImage: `url(${Bg2})` }}>
                <div className="customer_count">
                  <ul className="unordered_list">
                    <li>
                      <span>5k+</span>
                    </li>
                    <li>
                      <span>4k+</span>
                    </li>
                    <li>
                      <span>3k+</span>
                    </li>
                    <li>
                      <span>6k+</span>
                    </li>
                  </ul>
                  <p className="mb-0">
                    Happy Customer
                  </p>
                </div>
                <div className="about_funfact_counter">
                  <div className="funfact_item">
                    <div className="counter_value">
                      <span className="odometer" data-count="6">0</span>
                      <span>K+</span>
                    </div>
                    <h3 className="funfact_title mb-0">Projects Done</h3>
                  </div>
                  <div className="funfact_item">
                    <div className="counter_value">
                      <span className="odometer" data-count="100">0</span>
                      <span>%</span>
                    </div>
                    <h3 className="funfact_title mb-0">Results Guaranteed</h3>
                  </div>
                </div>
                <a className="btn btn-primary" href="about.html">
                  <span className="btn_label" data-text="Learn More">Learn More</span>
                  <span className="btn_icon">
                    <i className="fa-solid fa-arrow-up-right"></i>
                  </span>
                </a>
                <div className="icon_globe">
                  <img src={aIcon4} alt="Icon Globe" />
                </div>
              </div>
              <div className="space_line">
                <img src={aIcon5} alt="Shape Line" />
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="about_content">
              <div className="heading_block mb-0 text-white">
                <div className="heading_focus_text has_underline d-inline-flex" style={{ backgroundImage: `url(${Bg3})` }}>
                  About Us
                </div>
                <h2 className="heading_text">
                  Techco <mark>Mission & Goal</mark>
                </h2>
                <p className="heading_description mb-0">
                  At Techco, our mission is to empower businesses through innovative software solutions that streamline operations, foster growth, and drive success. With a commitment to excellence and customer satisfaction we strive.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-170">
          <div className="heading_block text-center text-white">
            <div className="heading_focus_text has_underline d-inline-flex" style={{ backgroundImage: `url(${Bg3})` }}>
              Case Studies
            </div>
            <h2 className="heading_text mb-0">
              Our latest <mark>Case</mark> Studies
            </h2>
          </div>

          {/* Loading State */}
          {loading && (
            <div className="row justify-content-center">
              <div className="col-12 text-center">
                <div className="spinner-border text-light" role="status">
                  <span className="visually-hidden">Loading projects...</span>
                </div>
              </div>
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className="row justify-content-center">
              <div className="col-12 text-center">
                <div className="alert alert-danger" role="alert">
                  Error loading projects: {error}
                </div>
              </div>
            </div>
          )}

          {/* Projects Content */}
          {!loading && !error && (
            <div className="case_studies_wrapper">
              {projects.slice(6, 9).map((project, prj) => (
                <div className="case_study_block" key={project._id || prj}>
                  <div className="case_study_image">
                    <img 
                      src={getImageUrl(project.pImg)} 
                      alt={project.title || "Techco - Cases"}
                      onError={handleImageError}
                      loading="lazy"
                      style={{
                        width: '100%',
                        height: '300px',
                        objectFit: 'cover'
                      }}
                      onLoad={() => console.log(`Project image loaded: ${getImageUrl(project.pImg)}`)}
                    />
                  </div>
                  <div className="case_study_content">
                    <ul className="category_list unordered_list text-uppercase">
                      <li><a href="portfolio.html">{project.sub || project.category || 'General'}</a></li>
                    </ul>
                    <h3 className="case_title">
                      <Link onClick={ClickHandler} to={`/portfolio_details/${project.slug}`}>
                        {project.title || 'Untitled Project'}
                      </Link>
                    </h3>
                    <p>
                      {project.description || 'No description available'}
                    </p>
                    <ul className="icon_list unordered_list">
                      <li>
                        <span className="icon_list_text">
                          <strong className="text-dark">Industry:</strong> {project.Industry || project.thumb2 || 'N/A'}
                        </span>
                      </li>
                      <li>
                        <span className="icon_list_text">
                          <strong className="text-dark">Country:</strong> {project.Country || 'N/A'}
                        </span>
                      </li>
                    </ul>
                    
                    {/* Technologies - only show if available */}
                    {(project.Technologies1 || project.Technologies2) && (
                      <ul className="case_technologies unordered_list" data-text="Core Technologies:">
                        {project.Technologies1 && (
                          <li>
                            <img 
                              src={getImageUrl(project.Technologies1)} 
                              alt="Technology 1" 
                              onError={handleImageError}
                            />
                          </li>
                        )}
                        {project.Technologies2 && (
                          <li>
                            <img 
                              src={getImageUrl(project.Technologies2)} 
                              alt="Technology 2" 
                              onError={handleImageError}
                            />
                          </li>
                        )}
                      </ul>
                    )}
                    
                    <Link onClick={ClickHandler} to={`/portfolio_details/${project.slug}`} className="btn btn-primary">
                      <span className="btn_label" data-text="Read Case">Read Case</span>
                      <span className="btn_icon">
                        <i className="fa-solid fa-arrow-up-right"></i>
                      </span>
                    </Link>
                  </div>
                </div>
              ))}
              
              {/* Show message if no projects in the selected range */}
              {projects.length > 0 && projects.slice(6, 9).length === 0 && (
                <div className="row justify-content-center">
                  <div className="col-12 text-center text-white">
                    <p>No case studies available in this range.</p>
                  </div>
                </div>
              )}
            </div>
          )}

          <div className="btns_group pb-0">
            <Link onClick={ClickHandler} to="/portfolio" className="btn btn-primary">
              <span className="btn_label" data-text="View More Cases Study">View More Cases Study</span>
              <span className="btn_icon">
                <i className="fa-solid fa-arrow-up-right"></i>
              </span>
            </Link>
          </div>
        </div>

        {/* Debug info - remove this in production */}
        {process.env.NODE_ENV === 'development' && projects.length > 0 && (
          <div className="row justify-content-center mt-4">
            <div className="col-12">
              <details style={{ background: '#f8f9fa', padding: '10px', borderRadius: '5px' }}>
                <summary>Debug Info - Projects Data (Development Only)</summary>
                <pre style={{ color: '#000' }}>
                  {JSON.stringify(projects.slice(6, 9), null, 2)}
                </pre>
              </details>
            </div>
          </div>
        )}
      </div>
      <div className="decoration_item shape_image_1">
        <img src={shape1} alt="Techco Shape" />
      </div>
    </section>
  );
};

export default About;
