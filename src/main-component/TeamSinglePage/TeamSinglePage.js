import React, { Fragment, useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from '../../components/header/Header';
import CountUp from 'react-countup';
import PageTitle from '../../components/pagetitle/PageTitle';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Footer from '../../components/footer/Footer';
import CtaSection from '../../components/CtaSection/CtaSection';
import sImg1 from '../../images/icons/icon_facebook.svg';
import sImg2 from '../../images/icons/icon_twitter_x.svg';
import sImg3 from '../../images/icons/icon_linkedin.svg';
import sImg4 from '../../images/icons/icon_instagram.svg';
import ProfessionalLoading from '../PortfolioSinglePage/ProfessionalLoading';
const TeamSinglePage = (props) => {
    const { slug } = useParams();
    const [teamDetails, setTeamDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const baseUrl = 'https://portfolio-vercel-bi43.vercel.app'; // Base URL for images

    useEffect(() => {
        const fetchTeamDetails = async () => {
            try {
                const response = await fetch(`${baseUrl}/api/teams`);
                if (!response.ok) {
                    throw new Error('Failed to fetch team data');
                }
                const data = await response.json();
                const teamMember = data.teams.find(item => item.slug === slug);
                if (!teamMember) {
                    throw new Error('Team member not found');
                }
                setTeamDetails({
                    tImg: `${baseUrl}${teamMember.tImg}`, // Convert to absolute URL
                    name: teamMember.name,
                    title: teamMember.title,
                    socialLinks: teamMember.socialLinks || {}
                });
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchTeamDetails();
    }, [slug]);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    };

   if (loading) return <ProfessionalLoading />;

    if (error) {
        return (
            <div className="flex items-center justify-center h-screen">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-red-600">Error</h2>
                    <p className="text-gray-700">{error}</p>
                </div>
            </div>
        );
    }

    if (!teamDetails) {
        return (
            <div className="flex items-center justify-center h-screen">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-700">Team Member Not Found</h2>
                </div>
            </div>
        );
    }

    return (
        <Fragment>
            <Header />
            <main className="page_content about-page">
                <PageTitle pageTitle={teamDetails.name} pagesub={'Details 😍'} pageTop={'Team'} />
                <section className="team_details_section section_space bg-light">
                    <div className="container">
                        <div className="team_member_details_card">
                            <div className="team_member_image">
                                <img src={teamDetails.tImg} alt="Team Member" />
                            </div>
                            <div className="team_member_content">
                                <h2 className="team_member_name">{teamDetails.name}</h2>
                                <ul className="icon_list unordered_list_block">
                                    <li>
                                        <span className="icon_list_text">
                                            <strong>Responsibility:</strong>
                                            {teamDetails.title}
                                        </span>
                                    </li>
                                    <li>
                                        <span className="icon_list_text">
                                            <strong>Experience:</strong>
                                            Not specified
                                        </span>
                                    </li>
                                    <li>
                                        <span className="icon_list_text">
                                            <strong>Email:</strong>
                                            Not available
                                        </span>
                                    </li>
                                    <li>
                                        <span className="icon_list_text">
                                            <strong>Phone:</strong>
                                            Not available
                                        </span>
                                    </li>
                                </ul>
                                <div className="social_wrapper">
                                    <h3 className="social_title">Social Media</h3>
                                    <ul className="social_icons_block unordered_list">
                                        <li>
                                            <Link
                                                onClick={ClickHandler}
                                                to={teamDetails.socialLinks.facebook || '/team'}
                                                target={teamDetails.socialLinks.facebook ? '_blank' : '_self'}
                                            >
                                                <img src={sImg1} alt="Icon Facebook" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                onClick={ClickHandler}
                                                to={teamDetails.socialLinks.twitter || '/team'}
                                                target={teamDetails.socialLinks.twitter ? '_blank' : '_self'}
                                            >
                                                <img src={sImg2} alt="Icon Twitter X" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                onClick={ClickHandler}
                                                to={teamDetails.socialLinks.linkedin || '/team'}
                                                target={teamDetails.socialLinks.linkedin ? '_blank' : '_self'}
                                            >
                                                <img src={sImg3} alt="Icon Linkedin" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                onClick={ClickHandler}
                                                to={teamDetails.socialLinks.instagram || '/team'}
                                                target={teamDetails.socialLinks.instagram ? '_blank' : '_self'}
                                            >
                                                <img src={sImg4} alt="Icon Instagram" />
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <h3 className="details_item_info_title">Professional Skills</h3>
                        <p>
                            No biography available for this team member.
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
                            No educational experience provided.
                        </p>

                        <p className="mb-2">Qualifications:</p>
                        <ul className="icon_list unordered_list_block">
                            <li>
                                <span className="icon_list_text">No skills listed.</span>
                            </li>
                        </ul>
                    </div>
                </section>
                <CtaSection />
            </main>
            <Footer />
            <Scrollbar />
        </Fragment>
    );
};

export default TeamSinglePage;
