import React from 'react'
import blogs from '../../../api/blogs'
import { Link } from 'react-router-dom'
import Bg from '../../../images/backgrounds/bg_image_4.webp'


const BusinessBlogSection = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="blog_section_2 section_space" style={{ backgroundImage: `url(${Bg})` }}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-7">
                        <div className="heading_block text-center">
                            <h2 className="heading_text">
                                Explore Our Latest Perspectives and Expertise
                            </h2>
                            <p className="heading_description text-dark mb-0">
                                Stay Informed, Stay Ahead: Discover Fresh Ideas and Strategies
                            </p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {blogs.slice(6, 8).map((blog, Bitem) => (
                        <div className="col-lg-6" key={Bitem}>
                            <div className="blog_post_block_2">
                                <div className="blog_post_image">
                                    <Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`}>
                                        <img src={blog.screens} alt="Techco Blog Post" />
                                    </Link>
                                </div>
                                <div className="blog_post_content">
                                    <ul className="category_list unordered_list">
                                        <li><a href="portfolio.html">{blog.thumb}</a></li>
                                    </ul>
                                    <h3 className="post_title">
                                        <Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`}>
                                            {blog.title}
                                        </Link>
                                    </h3>
                                    <ul className="post_meta unordered_list">
                                        <li>
                                            <Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`}>
                                                By <b>{blog.author}</b>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`}>
                                                {blog.create_at}
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default BusinessBlogSection;