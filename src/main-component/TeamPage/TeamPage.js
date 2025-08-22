import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/header/Header';
import PageTitle from '../../components/pagetitle/PageTitle';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Footer from '../../components/footer/Footer';
import CtaSection from '../../components/CtaSection/CtaSection';
import tImg from '../../images/portfolio/portfolio_item_image_5.webp';
import sImg1 from '../../images/icons/icon_facebook.svg';
import sImg2 from '../../images/icons/icon_twitter_x.svg';
import sImg3 from '../../images/icons/icon_linkedin.svg';
import sImg4 from '../../images/icons/icon_instagram.svg';

const TeamPage = (props) => {
    const [teams, setTeams] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Function to get complete image URL
    const getImageUrl = (imagePath) => {
        if (!imagePath) {
            return 'https://via.placeholder.com/300x300/f8f9fa/6c757d?text=No+Image';
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
        e.target.src = 'https://via.placeholder.com/300x300/f8f9fa/6c757d?text=Image+Not+Available';
        e.target.alt = 'Image not available';
    };

    useEffect(() => {
        const fetchTeams = async () => {
            try {
                setLoading(true);
                const response = await fetch('https://portfolio-vercel-bi43.vercel.app/api/teams');
                
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                
                const data = await response.json();
                console.log('Teams API Response:', data); // Debug log
                
                // Handle different possible API response structures
                if (Array.isArray(data)) {
                    setTeams(data);
                } else if (data && Array.isArray(data.teams)) {
                    setTeams(data.teams);
                } else if (data && Array.isArray(data.data)) {
                    setTeams(data.data);
                } else {
                    console.warn('Unexpected API response structure:', data);
                    setTeams(data ? [data] : []);
                }
                
                setError(null);
            } catch (err) {
                console.error('Error fetching teams:', err);
                setError(err.message);
                setTeams([]);
            } finally {
                setLoading(false);
            }
        };

        fetchTeams();
    }, []);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    };

    // Enhanced loading component
    if (loading) {
        return (
            <Fragment>
                <Header />
                <main className="page_content about-page">
                    <PageTitle pageTitle={'Team Member'} pagesub={'Members 😍'} pageTop={'Team'} />
                    <section className="team_section section_space">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-12 text-center">
                                    <div className="spinner-border" role="status">
                                        <span className="visually-hidden">Loading team members...</span>
                                    </div>
                                    <p className="mt-3">Loading team members...</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
                <Footer />
                <Scrollbar />
            </Fragment>
        );
    }

    // Enhanced error component
    if (error) {
        return (
            <Fragment>
                <Header />
                <main className="page_content about-page">
                    <PageTitle pageTitle={'Team Member'} pagesub={'Members 😍'} pageTop={'Team'} />
                    <section className="team_section section_space">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-12 text-center">
                                    <div className="alert alert-danger" role="alert">
                                        <h4>Error Loading Team Members</h4>
                                        <p>{error}</p>
                                        <button 
                                            className="btn btn-primary" 
                                            onClick={() => window.location.reload()}
                                        >
                                            Try Again
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
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
                <PageTitle pageTitle={'Team Member'} pagesub={'Members 😍'} pageTop={'Team'} />
                <section className="about_section section_space bg-light">
                    <div className="container">
                        <div className="row align-items-center justify-content-lg-between">
                            <div className="col-lg-6 order-lg-last">
                                <div className="team_cartoon_image">
                                    <img src={tImg} alt="Team Cartoon" />
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="about_content">
                                    <div className="heading_block">
                                        <div className="heading_focus_text">
                                            Our Dedicated
                                            <span className="badge bg-secondary text-white">Team 🙂</span>
                                        </div>
                                        <h2 className="heading_text">
                                            Get to Know Our Expert Techco Team
                                        </h2>
                                        <p className="heading_description mb-0">
                                            Get acquainted with the powerhouse behind Techco – our expert team of professionals dedicated to revolutionizing the IT landscape. Comprising.
                                        </p>
                                    </div>
                                    <Link onClick={ClickHandler} to={'/team'} className="btn">
                                        <span className="btn_label" data-text="Talk to an Expert">Talk to an Expert</span>
                                        <span className="btn_icon">
                                            <i className="fa-solid fa-arrow-up-right"></i>
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="team_section section_space">
                    <div className="container">
                        <div className="heading_block text-center">
                            <div className="heading_focus_text">
                                <span className="badge bg-secondary text-white">Our Expert</span>
                                Team Members 😍
                            </div>
                            <h2 className="heading_text mb-0">
                                Top Skilled Experts
                            </h2>
                        </div>

                        <div className="row">
                            {Array.isArray(teams) && teams.slice(0, 6).map((team, tm) => (
                                <div className="col-lg-4 col-md-6 col-sm-6" key={team.id || team._id || tm}>
                                    <div className="team_block">
                                        <div className="team_member_image">
                                            <Link 
                                                onClick={ClickHandler} 
                                                className="image_wrap" 
                                                aria-label="Team Details Button" 
                                                to={`/team-single/${team.slug}`}
                                            >
                                                <img 
                                                    src={getImageUrl(team.tImg || team.image || team.photo)} 
                                                    alt={team.name || "Team Member"}
                                                    onError={handleImageError}
                                                    loading="lazy"
                                                    style={{
                                                        width: '100%',
                                                        height: '300px',
                                                        objectFit: 'cover',
                                                        borderRadius: '8px'
                                                    }}
                                                    onLoad={() => console.log(`Team member image loaded: ${getImageUrl(team.tImg)}`)}
                                                />
                                                <i className="fa-solid fa-arrow-up-right"></i>
                                            </Link>
                                        </div>
                                        <div className="team_member_info">
                                            <h3 className="team_member_name">
                                                <Link onClick={ClickHandler} to={`/team-single/${team.slug}`}>
                                                    {team.name || 'Unknown Member'}
                                                </Link>
                                            </h3>
                                            <h4 className="team_member_designation">
                                                {team.title || team.position || team.designation || 'Team Member'}
                                            </h4>
                                            <ul className="social_icons_block unordered_list justify-content-center">
                                                <li>
                                                    <Link 
                                                        onClick={ClickHandler} 
                                                        to={team.facebook || `/team-single/${team.slug}`}
                                                        target={team.facebook ? "_blank" : "_self"}
                                                        rel={team.facebook ? "noopener noreferrer" : ""}
                                                    >
                                                        <img src={sImg1} alt="Icon Facebook" />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link 
                                                        onClick={ClickHandler} 
                                                        to={team.twitter || `/team-single/${team.slug}`}
                                                        target={team.twitter ? "_blank" : "_self"}
                                                        rel={team.twitter ? "noopener noreferrer" : ""}
                                                    >
                                                        <img src={sImg2} alt="Icon Twitter X" />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link 
                                                        onClick={ClickHandler} 
                                                        to={team.linkedin || `/team-single/${team.slug}`}
                                                        target={team.linkedin ? "_blank" : "_self"}
                                                        rel={team.linkedin ? "noopener noreferrer" : ""}
                                                    >
                                                        <img src={sImg3} alt="Icon Linkedin" />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link 
                                                        onClick={ClickHandler} 
                                                        to={team.instagram || `/team-single/${team.slug}`}
                                                        target={team.instagram ? "_blank" : "_self"}
                                                        rel={team.instagram ? "noopener noreferrer" : ""}
                                                    >
                                                        <img src={sImg4} alt="Icon Instagram" />
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Show message if no team members */}
                        {Array.isArray(teams) && teams.length === 0 && (
                            <div className="row justify-content-center">
                                <div className="col-12 text-center">
                                    <div className="alert alert-info" role="alert">
                                        <h4>No Team Members Found</h4>
                                        <p>Team members data is not available at the moment.</p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Debug info - remove this in production */}
                        {process.env.NODE_ENV === 'development' && Array.isArray(teams) && teams.length > 0 && (
                            <div className="row justify-content-center mt-4">
                                <div className="col-12">
                                    <details style={{ background: '#f8f9fa', padding: '10px', borderRadius: '5px' }}>
                                        <summary>Debug Info - Team Data (Development Only)</summary>
                                        <pre>{JSON.stringify(teams.slice(0, 3), null, 2)}</pre>
                                    </details>
                                </div>
                            </div>
                        )}
                    </div>
                </section>
            </main>
            <CtaSection />
            <Footer />
            <Scrollbar />
        </Fragment>
    );
};

export default TeamPage;
