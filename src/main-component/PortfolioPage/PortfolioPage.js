import React, { Fragment} from 'react';
import { Link } from "react-router-dom";

import { useProjects } from '../../hooks/useQueries';
import { getImageUrl } from '../../api/axiosConfig';

import Header from '../../components/header/Header';
import PageTitle from '../../components/pagetitle/PageTitle';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Footer from '../../components/footer/Footer';
import CtaSection from '../../components/CtaSection/CtaSection';

const PortfolioPage = () => {

   
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    };

   
    const {
        data: Project,
        isLoading,
        isError
    } = useProjects();

    if (isLoading) {
        return (
            <div className="text-center section_space">
                <h3>Loading Projects...</h3>
            </div>
        );
    }

    if (
        isError ||
        !Project ||
        !Array.isArray(Project)
    ) {
        return (
            <div className="text-center section_space">
                <h3>Failed to load projects</h3>
            </div>
        );
    }

   const projectList = Project;

    const filteredProjects = projectList;

    return (
        <Fragment>

            <Header />

            <main className="page_content about-page">

                <PageTitle
                    pageTitle={'Our Portfolio'}
                    pagesub={'Portfolio 😍'}
                    pageTop={'Our'}
                />

                <section className="portfolio_section section_space bg-light">

                    <div className="container">

                       

                        <div className="filter_elements_wrapper row">

                            {filteredProjects.length > 0 ? (

                                filteredProjects.map((project, index) => (

                                    <div
                                        className="col-lg-6"
                                        key={project?._id || index}
                                    >

                                        <div className="portfolio_block portfolio_layout_2">

                                            <div className="portfolio_image">

                                                <Link
                                                    onClick={ClickHandler}
                                                    className="portfolio_image_wrap bg-light"
                                                    to={`/portfolio_details/${project.slug}`}
                                                >

                                                    <img
                                                        src={getImageUrl(project.pImg)}
                                                        alt={project.title || 'Project'}
                                                        loading="lazy"
                                                    />

                                                </Link>

                                            </div>

                                            <div className="portfolio_content">

                                                <h3 className="portfolio_title">

                                                    <Link
                                                        onClick={ClickHandler}
                                                        to={`/portfolio_details/${project.slug}`}
                                                    >
                                                        {project.title}
                                                    </Link>

                                                </h3>

                                                <ul className="category_list unordered_list">

                                                    <li>

                                                        <Link
                                                            onClick={ClickHandler}
                                                            to={`/portfolio_details/${project.slug}`}
                                                        >
                                                            <i className="fa-solid fa-tags"></i>

                                                            {' '}
                                                            {project.sub || project.thumb1}

                                                        </Link>

                                                    </li>

                                                </ul>

                                            </div>

                                        </div>

                                    </div>

                                ))

                            ) : (

                                <div className="col-12 text-center">

                                    <h4>No Projects Found</h4>

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
