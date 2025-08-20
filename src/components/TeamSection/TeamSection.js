import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import sImg1 from '../../images/icons/icon_facebook.svg';
import sImg2 from '../../images/icons/icon_twitter_x.svg';
import sImg3 from '../../images/icons/icon_linkedin.svg';
import sImg4 from '../../images/icons/icon_instagram.svg';
import defaultImage from '../../images/avatar/avatar_4.webp'; 

const TeamSection = (props) => {
    const [teams, setTeams] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    };

    useEffect(() => {
        const fetchTeams = async () => {
            try {
                const response = await fetch('https://portfolio-vercel-bi43.vercel.app/api/teams');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                console.log('API Response:', data); // Debug log

                // Map to match the expected structure
                const formattedTeams = data.teams.slice(0, 6).map(team => ({
                    id: team.Id,
                    slug: team.slug,
                    name: team.name,
                    title: team.title,
                    tImg: team.tImg ? `https://portfolio-vercel-bi43.vercel.app${team.tImg}` : defaultImage, // Corrected base URL
                    socialLinks: team.socialLinks || {}
                }));

                console.log('Formatted Teams:', formattedTeams); // Debug log
                setTeams(formattedTeams);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching team data:', error);
                setError(error.message);
                setLoading(false);
            }
        };

        fetchTeams();
    }, []);

    return (
        <section className="team_section xb-hidden section_space">
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

                {loading ? (
                    <div>Loading team members...</div>
                ) : error ? (
                    <div>Error loading team members: {error}</div>
                ) : teams.length === 0 ? (
                    <div>No team members available.</div>
                ) : (
                    <div className="team_carousel">
                        <Swiper
                            loop={teams.length >= 3} // Only loop if enough items
                            spaceBetween={30}
                            allowTouchMove={true}
                            centeredSlides={teams.length < 3} // Center if fewer than 3
                            pagination={{ clickable: true }}
                            speed={800}
                            breakpoints={{
                                0: {
                                    slidesPerView: 1, // Show 1 card on small screens
                                },
                                576: {
                                    slidesPerView: Math.min(teams.length, 2), // Show up to 2 cards
                                },
                                1025: {
                                    slidesPerView: Math.min(teams.length, 3), // Show up to 3 cards
                                },
                            }}
                        >
                            {teams.map((team, tm) => (
                                <SwiperSlide key={tm}>
                                    <div className="team_block">
                                        <div className="team_member_image">
                                            <Link onClick={ClickHandler} className="image_wrap" aria-label="Team Details Button" to={`/team-single/${team.slug}`}>
                                                <img 
                                                    src={team.tImg} 
                                                    alt={`${team.name} Image`} 
                                                    onError={(e) => { 
                                                        e.target.src = defaultImage; // Fallback on error
                                                        console.log(`Failed to load image for ${team.name}: ${team.tImg}`);
                                                    }} 
                                                />
                                                <i className="fa-solid fa-arrow-up-right"></i>
                                            </Link>
                                        </div>
                                        <div className="team_member_info">
                                            <h3 className="team_member_name">
                                                <Link onClick={ClickHandler} to={`/team-single/${team.slug}`}>{team.name}</Link>
                                            </h3>
                                            <h4 className="team_member_designation">{team.title}</h4>
                                            <ul className="social_icons_block unordered_list justify-content-center">
                                                {team.socialLinks.linkedin && (
                                                    <li>
                                                        <a href={team.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                                                            <img src={sImg3} alt="Icon LinkedIn" />
                                                        </a>
                                                    </li>
                                                )}
                                                {team.socialLinks.twitter && (
                                                    <li>
                                                        <a href={team.socialLinks.twitter} target="_blank" rel="noopener noreferrer">
                                                            <img src={sImg2} alt="Icon Twitter" />
                                                        </a>
                                                    </li>
                                                )}
                                                {team.socialLinks.github && (
                                                    <li>
                                                        <a href={team.socialLinks.github} target="_blank" rel="noopener noreferrer">
                                                            <img src={sImg4} alt="Icon GitHub" />
                                                        </a>
                                                    </li>
                                                )}
                                                {team.socialLinks.website && (
                                                    <li>
                                                        <a href={team.socialLinks.website} target="_blank" rel="noopener noreferrer">
                                                            <img src={sImg1} alt="Icon Website" />
                                                        </a>
                                                    </li>
                                                )}
                                            </ul>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                )}

                <div className="container">
                    <div className="btns_group pb-0">
                        <Link className="btn btn-outline-light" to="/team">
                            <span className="btn_label" data-text="Our All Experts">Our All Experts</span>
                            <span className="btn_icon">
                                <i className="fa-solid fa-arrow-up-right"></i>
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TeamSection;