import React, { Fragment, useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Header from '../../components/header/Header';
import PageTitle from '../../components/pagetitle/PageTitle';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Footer from '../../components/footer/Footer';
import CtaSection from '../../components/CtaSection/CtaSection';

const PortfolioPage = () => {
    const [activeFilter, setActiveFilter] = useState('all');
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const baseUrl = 'https://portfolio-vercel-bi43.vercel.app';

    const getImageUrl = (path) => {
        return path?.startsWith('http') ? path : `${baseUrl}${path}`;
    };

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                setLoading(true);
                const response = await fetch(`${baseUrl}/api/projects`);

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();

                if (!Array.isArray(data.projects)) {
                    throw new Error('Invalid API response format');
                }

                setProjects(data.projects);
                setError(null);
            } catch (error) {
                console.error('Error fetching projects:', error);
                setError('Failed to load projects. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    };

    const handleFilterClick = (filter) => {
        setActiveFilter(filter);
    };

    const filteredProjects = activeFilter === 'all'
        ? projects.slice(0, 9)
        : projects.filter(project => project.category === activeFilter).slice(0, 9);

    const getUniqueCategories = () => {
        const categories = projects.map(project => project.category).filter(Boolean);
        return [...new Set(categories)];
    };

    const uniqueCategories = getUniqueCategories();

    if (loading) {
        return (
            <Fragment>
                <Header />
                <main className="page_content about-page">
                    <PageTitle pageTitle={'Our Portfolio'} pagesub={'Portfolio 😍'} pageTop={'Our'} />
                    <section className="portfolio_section section_space bg-light">
                        <div className="container">
                            <div className="text-center">
                                <div className="spinner-border" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                                <p className="mt-3">Loading projects...</p>
                            </div>
                        </div>
                    </section>
                    <CtaSection />
                </main>
                <Footer />
                <Scrollbar />
            </Fragment>
        );
    }

    if (error) {
        return (
            <Fragment>
                <Header />
                <main className="page_content about-page">
                    <PageTitle pageTitle={'Our Portfolio'} pagesub={'Portfolio 😍'} pageTop={'Our'} />
                    <section className="portfolio_section section_space bg-light">
                        <div className="container">
                            <div className="text-center">
                                <div className="alert alert-danger" role="alert">
                                    <h4 className="alert-heading">Error!</h4>
                                    <p>{error}</p>
                                    <button className="btn btn-primary" onClick={() => window.location.reload()}>
                                        Try Again
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>
                    <CtaSection />
                </main>
                <Footer />
                <Scrollbar />
            </Fragment>
        );
    }

    return (
        <Fragment>
            <Header />
            <main className="page_content about-page">
                <PageTitle pageTitle={'Our Portfolio'} pagesub={'Portfolio 😍'} pageTop={'Our'} />
                <section className="portfolio_section section_space bg-light">
                    <div className="container">
                        <div className="filter_elements_nav">
                            <ul className="unordered_list justify-content-center">
                                <li
                                    className={activeFilter === 'all' ? 'active' : ''}
                                    onClick={() => handleFilterClick('all')}
                                >
                                    See All
                                </li>
                                {uniqueCategories.map((category, index) => (
                                    <li
                                        key={index}
                                        className={activeFilter === category ? 'active' : ''}
                                        onClick={() => handleFilterClick(category)}
                                    >
                                        {category.charAt(0).toUpperCase() + category.slice(1)}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="filter_elements_wrapper row">
                            {filteredProjects.length > 0 ? (
                                filteredProjects.map((project, index) => (
                                    <div className="col-lg-6" key={project._id || index}>
                                        <div className="portfolio_block portfolio_layout_2">
                                            <div className="portfolio_image">
                                                <Link
                                                    onClick={ClickHandler}
                                                    className="portfolio_image_wrap bg-light"
                                                    to={`/portfolio_details/${project.slug || project._id}`}
                                                >
                                                    <img
                                                        src={getImageUrl(project.pImg || project.image || project.thumbnail)}
                                                        alt={project.title || "Portfolio Item"}
                                                    />
                                                </Link>
                                            </div>
                                            <div className="portfolio_content">
                                                <h3 className="portfolio_title">
                                                    <Link
                                                        onClick={ClickHandler}
                                                        to={`/portfolio_details/${project.slug || project._id}`}
                                                    >
                                                        {project.title}
                                                    </Link>
                                                </h3>
                                                <ul className="category_list unordered_list">
                                                    <li>
                                                        <Link
                                                            onClick={ClickHandler}
                                                            to={`/portfolio_details/${project.slug || project._id}`}
                                                        >
                                                            <i className="fa-solid fa-tags"></i>
                                                            {project.thumb1 || project.category || 'General'}
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            onClick={ClickHandler}
                                                            to={`/portfolio_details/${project.slug || project._id}`}
                                                        >
                                                            <i className="fa-solid fa-building"></i>
                                                            {project.thumb2 || project.company || 'Company'}
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="col-12">
                                    <div className="text-center">
                                        <p>No projects found for the selected category.</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </section>
                <CtaSection />
            </main>
            <Footer />
            <Scrollbar />
        </Fragment>
    );
};

export default PortfolioPage;
