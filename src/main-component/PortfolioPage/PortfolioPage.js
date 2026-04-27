import React, { Fragment, useState } from 'react';
import Project from '../../api/project';
import { Link } from "react-router-dom";
import Header from '../../components/header/Header';
import PageTitle from '../../components/pagetitle/PageTitle';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Footer from '../../components/footer/Footer';
import CtaSection from '../../components/CtaSection/CtaSection';

const PortfolioPage = (props) => {

    const [activeFilter, setActiveFilter] = useState('all');

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const handleFilterClick = (filter) => {
        setActiveFilter(filter);
    }

    const filteredProjects = activeFilter === 'all'
        ? Project.slice(9, 18)
        : Project.slice(9, 18).filter(project => project.category === activeFilter);

    return (
        <Fragment>
            <Header />
            <main className="page_content about-page">
                <PageTitle pageTitle={'Our Portfolio'} pagesub={'Portfolio 😍'} pageTop={'Our'} />
                <section className="portfolio_section section_space bg-light">
                    <div className="container">
                        <div className="filter_elements_nav">
                            <ul className="unordered_list justify-content-center">
                                <li className={activeFilter === 'all' ? 'active' : ''} onClick={() => handleFilterClick('all')}>See All</li>
                                <li className={activeFilter === 'technology' ? 'active' : ''} onClick={() => handleFilterClick('technology')}>Technology</li>
                                <li className={activeFilter === 'helpdesk' ? 'active' : ''} onClick={() => handleFilterClick('helpdesk')}>Helpdesk</li>
                                <li className={activeFilter === 'analysis' ? 'active' : ''} onClick={() => handleFilterClick('analysis')}>Analysis</li>
                                <li className={activeFilter === 'marketing' ? 'active' : ''} onClick={() => handleFilterClick('marketing')}>Marketing</li>
                            </ul>
                        </div>
                        <div className="filter_elements_wrapper row">
                            {filteredProjects.map((project, prj) => (
                                <div className="col-lg-6" key={prj}>
                                    <div className="portfolio_block portfolio_layout_2">
                                        <div className="portfolio_image">
                                            <Link onClick={ClickHandler} className="portfolio_image_wrap bg-light" to={`/portfolio_details/${project.slug}`}>
                                                <img src={project.pImg} alt="Mobile App Design" />
                                            </Link>
                                        </div>
                                        <div className="portfolio_content">
                                            <h3 className="portfolio_title">
                                                <Link onClick={ClickHandler} to={`/portfolio_details/${project.slug}`}>
                                                    {project.title}
                                                </Link>
                                            </h3>
                                            <ul className="category_list unordered_list">
                                                <li><Link onClick={ClickHandler} to={`/portfolio_details/${project.slug}`}><i className="fa-solid fa-tags"></i> {project.thumb1}</Link></li>
                                                <li><Link onClick={ClickHandler} to={`/portfolio_details/${project.slug}`}><i className="fa-solid fa-building"></i> {project.thumb2}</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <CtaSection />
            </main>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};

export default PortfolioPage;
