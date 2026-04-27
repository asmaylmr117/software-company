import React from 'react'
import blogs from '../../api/blogs'
import { Link } from 'react-router-dom'
import Bg from '../../images/shapes/bg_pattern_1.svg'
import icon1 from '../../images/icons/icon_calendar.svg'



const BlogSection = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="blog_section section_space bg-light" style={{ backgroundImage: `url(${Bg})` }}>
            <div className="container">
                <div className="heading_block text-center">
                    <div className="heading_focus_text">
                        <span className="badge bg-secondary text-white">Blog</span>
                        Updates
                    </div>
                    <h2 className="heading_text mb-0">
                        Latest Articles Posts
                    </h2>
                </div>

                <div className="row">
                    {blogs.slice(0, 3).map((blog, Bitem) => (
                        <div className="col-lg-4" key={Bitem}>
                            <div className="blog_post_block">
                                <div className="blog_post_image">
                                    <Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`} className="image_wrap">
                                        <img src={blog.screens} alt="" />
                                    </Link>
                                </div>
                                <div className="blog_post_content">
                                    <div className="post_meta_wrap">
                                        <ul className="category_btns_group unordered_list">
                                            <li><Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`}>{blog.thumb}</Link></li>
                                        </ul>
                                        <ul className="post_meta unordered_list">
                                            <li>
                                                <Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`}>
                                                    <img src={icon1} alt="Icon Calendar" /> {blog.create_at}
                                                </Link>
                                            </li>
                                            <li>
                                                <Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`}><i className="fa-regular fa-comment-lines"></i> {blog.comment}</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <h3 className="blog_post_title">
                                        <Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`}>
                                            {blog.title}
                                        </Link>
                                    </h3>
                                    <Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`} className="btn_unfill">
                                        <span className="btn_icon">
                                            <i className="fa-solid fa-arrow-up-right"></i>
                                        </span>
                                        <span className="btn_label">Read More</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default BlogSection;