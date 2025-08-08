import React from 'react';
import { Link } from 'react-router-dom'
import blogs from '../../api/blogs'
import Services from '../../api/service';
import icon from '../../images/icons/icon_search.svg';
import icon1 from '../../images/icons/icon_calendar.svg'

const BlogSidebar = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    const SubmitHandler = (e) => {
        e.preventDefault()
    }

    return (
        <div className="col-lg-4">
            <aside className="sidebar ps-lg-5">
                <div className="search_form">
                    <h3 className="sidebar_widget_title">Search</h3>
                    <form className="form-group" onSubmit={SubmitHandler}>
                        <input className="form-control" type="search" name="search" placeholder="Search your keyword" />
                        <button type="submit">
                            <img src={icon} alt="Search Icon" />
                        </button>
                    </form>
                </div>
                <div className="post_list_block">
                    <h3 className="sidebar_widget_title">Related Posts</h3>
                    <ul className="unordered_list_block">
                        {blogs.slice(0, 3).map((blog, Bitem) => (
                            <li key={Bitem}>
                                <h3 className="post_title">
                                    <Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`}>
                                        {blog.title}
                                    </Link>
                                </h3>
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
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="post_category_wrap">
                    <h3 className="sidebar_widget_title">Categories</h3>
                    <ul className="post_category_list unordered_list_block">
                        {Services.slice(0, 6).map((service, srv) => (
                            <li key={srv}>
                                <Link onClick={ClickHandler} to={`/service-single/${service.slug}`}>
                                    <i className="fa-solid fa-arrow-up-right"></i>
                                    <span>{service.title}</span>
                                    <span>(0{service.Id})</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="popular_tags">
                    <h3 className="sidebar_widget_title">Popular Tags</h3>
                    <ul className="tags_list unordered_list">
                        <li><Link onClick={ClickHandler} to="/blog">Cybersecurity</Link></li>
                        <li><Link onClick={ClickHandler} to="/blog">TechSolutions</Link></li>
                        <li><Link onClick={ClickHandler} to="/blog">UX Design</Link></li>
                        <li><Link onClick={ClickHandler} to="/blog">App Dev</Link></li>
                        <li><Link onClick={ClickHandler} to="/blog">Data</Link></li>
                        <li><Link onClick={ClickHandler} to="/blog">Solution</Link></li>
                        <li><Link onClick={ClickHandler} to="/blog">Consultants</Link></li>
                        <li><Link onClick={ClickHandler} to="/blog">IT</Link></li>
                        <li><Link onClick={ClickHandler} to="/blog">Optimization</Link></li>
                        <li><Link onClick={ClickHandler} to="/blog">Startup</Link></li>
                    </ul>
                </div>
            </aside>
        </div>
    )

}

export default BlogSidebar;
