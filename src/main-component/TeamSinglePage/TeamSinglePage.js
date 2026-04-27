import React, { Fragment } from 'react';
import Header from '../../components/header/Header';
import { Link } from "react-router-dom";
import Teams from '../../api/team'
import CountUp from 'react-countup';
import { useParams } from 'react-router-dom';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import CtaSection from '../../components/CtaSection/CtaSection';
import sImg1 from '../../images/icons/icon_facebook.svg'
import sImg2 from '../../images/icons/icon_twitter_x.svg'
import sImg3 from '../../images/icons/icon_linkedin.svg'
import sImg4 from '../../images/icons/icon_instagram.svg'

const TeamSinglePage = (props) => {
    const { slug } = useParams()

    const TeamDetails = Teams.find(item => item.slug === slug)

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <Fragment>
            <Header />
            <main className="page_content about-page">
                <PageTitle pageTitle={TeamDetails.name} pagesub={'Details 😍'} pageTop={'Team'} />
                <section className="team_details_section section_space bg-light">
                    <div className="container">
                        <div className="team_member_details_card">
                            <div className="team_member_image">
                                <img src={TeamDetails.tImg} alt="Team Member"/>
                            </div>
                            <div className="team_member_content">
                                <h2 className="team_member_name">{TeamDetails.name}</h2>
                                <ul className="icon_list unordered_list_block">
                                    <li>
                                        <span className="icon_list_text">
                                            <strong>Responsibility:</strong>
                                            {TeamDetails.title}
                                        </span>
                                    </li>
                                    <li>
                                        <span className="icon_list_text">
                                            <strong>Experience:</strong>
                                            18 Years
                                        </span>
                                    </li>
                                    <li>
                                        <span className="icon_list_text">
                                            <strong>Email:</strong>
                                            August@example.com
                                        </span>
                                    </li>
                                    <li>
                                        <span className="icon_list_text">
                                            <strong>Phone:</strong>
                                            +91590 0574 258
                                        </span>
                                    </li>
                                </ul>
                                <div className="social_wrapper">
                                    <h3 className="social_title">Social Media</h3>
                                    <ul className="social_icons_block unordered_list">
                                        <li>
                                            <Link onClick={ClickHandler} to={'/team'}>
                                                <img src={sImg1} alt="Icon Facebook"/>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link onClick={ClickHandler} to={'/team'}>
                                                <img src={sImg2} alt="Icon Twitter X"/>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link onClick={ClickHandler} to={'/team'}>
                                                <img src={sImg3} alt="Icon Linkedin"/>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link onClick={ClickHandler} to={'/team'}>
                                                <img src={sImg4} alt="Icon Instagram"/>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <h3 className="details_item_info_title">Professional Skills</h3>
                        <p>
                            Since joining Techco in 1993, Matilda has been instrumental in transforming the company from a collection of tech-savvy individuals collaborating with startups to a world-renowned leader in Digital Systems Engineering Services, catering to the innovation needs of Fortune 500 enterprises. During Matilda's tenure as President and CEO, Techco has witnessed remarkable expansion in both its scale and revenue streams. This growth has been achieved hand-in-hand with the cultivation of a vibrant company culture that champions employee engagement and fosters a spirit of innovation at every level.
                        </p>

                        <div className="row mb-5">
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="funfact_block text-center">
                                    <div className="counter_value">
                                        <span className="odometer" data-count="98"><CountUp end={98} enableScrollSpy /></span>
                                        <span>%</span>
                                    </div>
                                    <h3 className="funfact_title mb-0">Product Development</h3>
                                    <div className="bottom_line bg-primary"></div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="funfact_block text-center">
                                    <div className="counter_value">
                                        <span className="odometer" data-count="88"><CountUp end={88} enableScrollSpy /></span>
                                        <span>%</span>
                                    </div>
                                    <h3 className="funfact_title mb-0">Problem-Solving</h3>
                                    <div className="bottom_line bg-danger"></div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="funfact_block text-center">
                                    <div className="counter_value">
                                        <span className="odometer" data-count="99"><CountUp end={99} enableScrollSpy /></span>
                                        <span>%</span>
                                    </div>
                                    <h3 className="funfact_title mb-0">Communication Skills</h3>
                                    <div className="bottom_line bg-secondary"></div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="funfact_block text-center">
                                    <div className="counter_value">
                                        <span className="odometer" data-count="77"><CountUp end={77} enableScrollSpy /></span>
                                        <span>%</span>
                                    </div>
                                    <h3 className="funfact_title mb-0">Passion for Helping</h3>
                                    <div className="bottom_line bg-warning"></div>
                                </div>
                            </div>
                        </div>

                        <h3 className="details_item_info_title">Educational Experience</h3>
                        <p>
                            Armed with a Bachelor's degree in Computer Science from the University of XYZ, I specialized in data structures, algorithms, and networks. Expanding my knowledge, I pursued a Master's in Information Technology Management at ABC University.
                        </p>

                        <p className="mb-2">Qualifications:</p>
                        <ul className="icon_list unordered_list_block">
                            <li>
                                <span className="icon_list_icon">
                                    <i className="fa-solid fa-circle fa-fw"></i>
                                </span>
                                <span className="icon_list_text">
                                    Proficiency in systems analysis, design, implementation, and maintenance.
                                </span>
                            </li>
                            <li>
                                <span className="icon_list_icon">
                                    <i className="fa-solid fa-circle fa-fw"></i>
                                </span>
                                <span className="icon_list_text">
                                    Strong knowledge of network protocols, hardware, and software components.
                                </span>
                            </li>
                            <li>
                                <span className="icon_list_icon">
                                    <i className="fa-solid fa-circle fa-fw"></i>
                                </span>
                                <span className="icon_list_text">
                                    Experience with virtualization technologies (VMware, Hyper-V).
                                </span>
                            </li>
                            <li>
                                <span className="icon_list_icon">
                                    <i className="fa-solid fa-circle fa-fw"></i>
                                </span>
                                <span className="icon_list_text">
                                    Skilled in cloud computing platforms (AWS, Azure, Google Cloud).
                                </span>
                            </li>
                            <li>
                                <span className="icon_list_icon">
                                    <i className="fa-solid fa-circle fa-fw"></i>
                                </span>
                                <span className="icon_list_text">
                                    Proficient in scripting languages (Python, PowerShell).
                                </span>
                            </li>
                            <li>
                                <span className="icon_list_icon">
                                    <i className="fa-solid fa-circle fa-fw"></i>
                                </span>
                                <span className="icon_list_text">
                                    Experience in system security and disaster recovery planning.
                                </span>
                            </li>
                            <li>
                                <span className="icon_list_icon">
                                    <i className="fa-solid fa-circle fa-fw"></i>
                                </span>
                                <span className="icon_list_text">
                                    Excellent problem-solving and analytical skills.
                                </span>
                            </li>
                        </ul>
                    </div>
                </section>
                <CtaSection />
            </main>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default TeamSinglePage;