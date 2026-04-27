import React from 'react';
import blog1 from '../../images/blog/blog_post_image_8.webp'
import blog2 from '../../images/blog/blog_post_image_9.webp'
import blog3 from '../../images/blog/blog_post_image_10.webp'
import blog4 from '../../images/blog/blog_post_image_11.webp'
import author from '../../images/avatar/avatar_8.webp'
import author2 from '../../images/avatar/avatar_9.webp'
import author3 from '../../images/avatar/avatar_10.webp'
import author4 from '../../images/avatar/avatar_11.webp'
import icon1 from '../../images/icons/icon_calendar.svg'
import icon2 from '../../images/icons/icon_user.svg'
import icon3 from '../../images/icons/icon_chat.svg'
import icon4 from '../../images/icons/icon_eye.svg'
import icon5 from '../../images/icons/icon_link.svg'
import icon6 from '../../images/icons/icon_bookmark.svg'

import sImg1 from '../../images/icons/icon_facebook.svg'
import sImg2 from '../../images/icons/icon_twitter_x.svg'
import sImg3 from '../../images/icons/icon_linkedin.svg'
import sImg4 from '../../images/icons/icon_instagram.svg'

import blogs from '../../api/blogs';
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom'
import BlogSidebar from '../BlogSidebar';

const BlogSingle = (props) => {

    const { slug } = useParams()

    const BlogDetails = blogs.find(item => item.slug === slug)

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="blog_details_section section_space bg-light">
            <div className="container">
                <div className="details_item_image">
                    <img src={blog1} alt="Techco - Blog" />
                </div>
                <div className="post_meta_wrap mb-4">
                    <ul className="category_btns_group unordered_list">
                        <li><Link onClick={ClickHandler} to={'/blog'}>{BlogDetails.thumb}</Link></li>
                    </ul>
                    <ul className="post_meta unordered_list">
                        <li>
                            <Link onClick={ClickHandler} to={'/blog'}>
                                <img src={icon1} alt="Icon Calendar" /> {BlogDetails.create_at}
                            </Link>
                        </li>
                    </ul>
                </div>
                <h2 className="details_item_title">
                    {BlogDetails.title}
                </h2>
                <p>
                    Delve into the inner workings of IT solutions with Techco's esteemed thought leaders. With unparalleled expertise and a wealth of experience, our thought leaders provide invaluable insights into the ever-evolving landscape of technology.
                </p>
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <ul className="post_meta unordered_list">
                            <li>
                                <Link onClick={ClickHandler} to={'/blog'}>
                                    <img src={icon2} alt="Icon User" /> by {BlogDetails.author}
                                </Link>
                            </li>
                            <li>
                                <Link onClick={ClickHandler} to={'/blog'}>
                                    <img src={icon3} alt="Icon Chat" /> {BlogDetails.comment} Comments
                                </Link>
                            </li>
                            <li>
                                <Link onClick={ClickHandler} to={'/blog'}>
                                    <img src={icon4} alt="Icon Eye" /> 20k Views
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <ul className="post_meta unordered_list justify-content-md-end">
                            <li>
                                <Link onClick={ClickHandler} to={'/blog'}>
                                    <img src={icon5} alt="Icon Link" /> Copy Link
                                </Link>
                            </li>
                            <li>
                                <Link onClick={ClickHandler} to={'/blog'}>
                                    <img src={icon6} alt="Bookmark Chat" /> Bookmark
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <hr className="mb-0" />
                <div className="section_space pb-0">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="blog_details_audio">
                                <button className="audio_play_btn" type="button">
                                    <i className="fa-solid fa-play"></i>
                                    <span>6:24</span>
                                    <span>Listen to this article!</span>
                                </button>
                            </div>
                            <h3 className="details_item_info_title mb-5">
                                Revolutionizing Business Efficiency Navigating Growth with Optimal IT Infrastructure Enhancement
                            </h3>
                            <div className="row mb-4">
                                <div className="col-md-6 col-sm-6">
                                    <div className="details_item_image m-0">
                                        <img src={blog2} alt="Techco - Blog" />
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6">
                                    <div className="details_item_image m-0">
                                        <img src={blog3} alt="Techco - Blog" />
                                    </div>
                                </div>
                            </div>
                            <p>
                                Gain exclusive insights into the world of IT solutions with Techco's distinguished thought leaders. With years of experience and a deep understanding of industry trends, our thought leaders offer invaluable perspectives that illuminate the path to technological excellence. From emerging technologies to innovative strategies, they provide unique insights that inform and inspire. Join us as we delve into the inner workings of IT solutions, exploring the challenges.
                            </p>
                            <p>
                                Embark on an illuminating journey into the world of IT solutions with Techco's esteemed thought leaders. Delve deep into the inner workings of technology as our seasoned experts share their wealth of knowledge and experience. With a finger on the pulse of industry trends and a keen eye for innovation, our thought leaders offer unparalleled insights that illuminate the path
                            </p>

                            <h3 className="details_item_info_title">Sample Heading</h3>
                            <p>
                                they provide a comprehensive and in-depth analysis that goes beyond surface-level . Join us as we uncover the secrets of IT solutions, guided by the wisdom and expertise of Techco's thought leaders. Prepare to be inspired, informed, and empowered to navigate the ever- landscape of technology with confidence and clarity. you'll gain access to unparalleled expertise and discover new possibilities for success in the ever-evolving world of technology.
                            </p>
                            <div className="row align-items-center mb-5">
                                <div className="col-md-6">
                                    <div className="details_item_image m-0">
                                        <img src={blog4} alt="Techco - Blog" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <ul className="icon_list unordered_list_block">
                                        <li>
                                            <span className="icon_list_icon">
                                                <i className="fa-solid fa-circle fa-fw"></i>
                                            </span>
                                            <span className="icon_list_text">
                                                Unveiling Emerging Technologies
                                            </span>
                                        </li>
                                        <li>
                                            <span className="icon_list_icon">
                                                <i className="fa-solid fa-circle fa-fw"></i>
                                            </span>
                                            <span className="icon_list_text">
                                                Navigating Complex Challenges
                                            </span>
                                        </li>
                                        <li>
                                            <span className="icon_list_icon">
                                                <i className="fa-solid fa-circle fa-fw"></i>
                                            </span>
                                            <span className="icon_list_text">
                                                Forecasting Future Trends
                                            </span>
                                        </li>
                                        <li>
                                            <span className="icon_list_icon">
                                                <i className="fa-solid fa-circle fa-fw"></i>
                                            </span>
                                            <span className="icon_list_text">
                                                Driving Innovation Strategies
                                            </span>
                                        </li>
                                        <li>
                                            <span className="icon_list_icon">
                                                <i className="fa-solid fa-circle fa-fw"></i>
                                            </span>
                                            <span className="icon_list_text">
                                                Exploring Industry Practices
                                            </span>
                                        </li>
                                        <li>
                                            <span className="icon_list_icon">
                                                <i className="fa-solid fa-circle fa-fw"></i>
                                            </span>
                                            <span className="icon_list_text">
                                                Empowering Transformation
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <h3 className="details_item_info_title">3 Reasons to investing at this moment</h3>
                            <p className="mb-2">
                                Here are three key reasons emphasizing the importance of optimizing IT infrastructure for efficiency and growth:
                            </p>
                            <ul className="icon_list unordered_list_block mb-5">
                                <li>
                                    <span className="icon_list_text">
                                        1. Enhanced Operational Agility
                                    </span>
                                </li>
                                <li>
                                    <span className="icon_list_text">
                                        2. Resource Optimization & Cost Efficiency
                                    </span>
                                </li>
                                <li>
                                    <span className="icon_list_text">
                                        3. Scalability and Innovation
                                    </span>
                                </li>
                            </ul>
                            <hr className="mt-0 mb-5" />
                            <div className="row">
                                <div className="col-md-6">
                                    <ul className="tags_list unordered_list">
                                        <li><Link onClick={ClickHandler} to={'/blog'}>Solution</Link></li>
                                        <li><Link onClick={ClickHandler} to={'/blog'}>Consultants</Link></li>
                                        <li><Link onClick={ClickHandler} to={'/blog'}>IT</Link></li>
                                    </ul>
                                </div>
                                <div className="col-md-6">
                                    <div className="post_share_link">
                                        <ul className="social_icons_block unordered_list justify-content-md-end">
                                            <li>
                                                <Link onClick={ClickHandler} to={'/blog'} className="rounded-circle">
                                                    <img src={sImg1} alt="Icon Facebook" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link onClick={ClickHandler} to={'/blog'} className="rounded-circle">
                                                    <img src={sImg2} alt="Icon Twitter X" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link onClick={ClickHandler} to={'/blog'} className="rounded-circle">
                                                    <img src={sImg3} alt="Icon Linkedin" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link onClick={ClickHandler} to={'/blog'} className="rounded-circle">
                                                    <img src={sImg4} alt="Icon Instagram" />
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="post_author_box">
                                <div className="author_image">
                                    <img src={author} alt="Techco - Blog Author" />
                                </div>
                                <div className="author_content">
                                    <h3 className="author_name">About Anderson</h3>
                                    <h4 className="author_designation">Content Editor</h4>
                                    <p>
                                        A content editor plays a pivotal role in shaping and refining the narrative and quality of digital content. This role involves overseeing the creation.
                                    </p>
                                    <ul className="author_social_icons unordered_list">
                                        <li>
                                            <Link onClick={ClickHandler} to={'/blog'} className="rounded-circle">
                                                <i className="fa-brands fa-facebook-f"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link onClick={ClickHandler} to={'/blog'} className="rounded-circle">
                                                <i className="fa-brands fa-instagram"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link onClick={ClickHandler} to={'/blog'} className="rounded-circle">
                                                <i className="fa-brands fa-twitter"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link onClick={ClickHandler} to={'/blog'} className="rounded-circle">
                                                <i className="fa-brands fa-linkedin-in"></i>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="other_posts_nav">
                                <Link onClick={ClickHandler} to={'/blog'}>
                                    <i className="fa-regular fa-arrow-left-long"></i>
                                    <span>
                                        <strong>Exploring IT Solutions with Techco</strong>
                                        <small>Dec 24, 2024</small>
                                    </span>
                                </Link>
                                <Link onClick={ClickHandler} to={'/blog'} href="blog.html">
                                    <i className="fa-solid fa-grid-2"></i>
                                </Link>
                                <Link onClick={ClickHandler} to={'/blog'}>
                                    <span>
                                        <strong>Exploring IT Solutions with Techco</strong>
                                        <small>Dec 24, 2024</small>
                                    </span>
                                    <i className="fa-regular fa-arrow-right-long"></i>
                                </Link>
                            </div>

                            <hr className="m-0" />

                            <div className="comment_area">
                                <h3 className="details_item_info_title mb-5">Comments (3)</h3>
                                <ul className="comments_list unordered_list_block">
                                    <li>
                                        <div className="comment_item">
                                            <div className="comment_author_thumbnail">
                                                <img src={author2} alt="Techco - Comment Author Avatar" />
                                            </div>
                                            <div className="comment_author_content">
                                                <h4 className="comment_author_name">John Smith</h4>
                                                <div className="comment_time">Dec 24, 2024 at 10:21am</div>
                                                <p className="mb-0">
                                                    "Working with Techco has been a game-changer. Their innovative IT solutions boosted our efficiency tenfold. Highly recommend!"
                                                </p>
                                                <Link onClick={ClickHandler} to={'/blog'} className="comment_reply_btn">Reply</Link>
                                            </div>
                                        </div>
                                        <ul className="comments_list unordered_list_block">
                                            <li>
                                                <div className="comment_item">
                                                    <div className="comment_author_thumbnail">
                                                        <img src={author3} alt="Techco - Comment Author Avatar" />
                                                    </div>
                                                    <div className="comment_author_content">
                                                        <h4 className="comment_author_name">Daniel Garcia</h4>
                                                        <div className="comment_time">Dec 24, 2024 at 10:21am</div>
                                                        <p className="mb-0">
                                                            "Our experience with Techco has been exceptional. Their commitment to customer satisfaction stands out. Grateful for their partnership."
                                                        </p>
                                                        <Link onClick={ClickHandler} to={'/blog'} className="comment_reply_btn">Reply</Link>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="comment_item">
                                                    <div className="comment_author_thumbnail">
                                                        <img src={author2} alt="Techco - Comment Author Avatar" />
                                                    </div>
                                                    <div className="comment_author_content">
                                                        <h4 className="comment_author_name">John Smith</h4>
                                                        <div className="comment_time">Dec 24, 2024 at 10:21am</div>
                                                        <p className="mb-0">
                                                            "Working with Techco has been a game-changer. Their innovative IT solutions boosted our efficiency tenfold. Highly recommend!"
                                                        </p>
                                                        <Link onClick={ClickHandler} to={'/blog'} className="comment_reply_btn">Reply</Link>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <div className="comment_item">
                                            <div className="comment_author_thumbnail">
                                                <img src={author4} alt="Techco - Comment Author Avatar" />
                                            </div>
                                            <div className="comment_author_content">
                                                <h4 className="comment_author_name">John Smith</h4>
                                                <div className="comment_time">Dec 24, 2024 at 10:21am</div>
                                                <p className="mb-0">
                                                    "Working with Techco has been a game-changer. Their innovative IT solutions boosted our efficiency tenfold. Highly recommend!"
                                                </p>
                                                <Link onClick={ClickHandler} to={'/blog'} className="comment_reply_btn">Reply</Link>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <hr className="m-0" />

                            <div className="comment_area mb-0">
                                <h3 className="details_item_info_title mb-1">Leave a Comment</h3>
                                <p className="mb-5">
                                    Your email address will not be published. Required fields are marked <sup className="text-primary">*</sup>
                                </p>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="input_title" htmlFor="input_name">Full Name <sup className="text-primary">*</sup></label>
                                            <input id="input_name" className="form-control" type="text" name="name" placeholder="Goladra Gomaz" required />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="input_title" htmlFor="input_email">Your Email <sup className="text-primary">*</sup></label>
                                            <input id="input_email" className="form-control" type="email" name="email" placeholder="Techco@example.com" required />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group">
                                            <label className="input_title" htmlFor="input_textarea">Comments / Questions <sup className="text-primary">*</sup></label>
                                            <textarea id="input_textarea" className="form-control" name="message" placeholder="How can we help you?"></textarea>
                                        </div>
                                        <div className="form-check mb-5">
                                            <input className="form-check-input" type="checkbox" id="flexCheckDefault" />
                                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                                Save my name, email, and website in this browser for the next time I comment.
                                            </label>
                                        </div>
                                        <button type="submit" className="btn btn-primary">
                                            <span className="btn_label" data-text="Submit Comment">Submit Comment</span>
                                            <span className="btn_icon">
                                                <i className="fa-solid fa-arrow-up-right"></i>
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <BlogSidebar />
                    </div>
                </div>
            </div>
        </section>
    )

}

export default BlogSingle;
