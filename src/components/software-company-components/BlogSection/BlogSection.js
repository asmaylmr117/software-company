import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Bg from '../../../images/shapes/shape_title_under_line.svg'
import icon1 from '../../../images/icons/icon_calendar.svg'
import shape1 from '../../../images/shapes/shape_line_7.svg'
import shape2 from '../../../images/shapes/shape_angle_4.webp'

const BlogSection = (props) => {
    const [blogs, setBlogs] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    // Fetch blogs from API
    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                setLoading(true)
                const response = await fetch('https://portfolio-vercel-bi43.vercel.app/api/blogs')
                
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`)
                }
                
                const data = await response.json()
                setBlogs(data)
                setError(null)
            } catch (err) {
                console.error('Error fetching blogs:', err)
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }

        fetchBlogs()
    }, [])

    // Loading state
    if (loading) {
        return (
            <section className="blog_section blog_section_space section_decoration">
                <div className="container">
                    <div className="heading_block text-center">
                        <div className="heading_focus_text has_underline d-inline-flex" style={{ backgroundImage: `url(${Bg})` }}>
                            Our Articles
                        </div>
                        <h2 className="heading_text mb-0">
                            Latest <mark>Articles</mark>
                        </h2>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-12 text-center">
                            <div className="spinner-border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="decoration_item shape_image_1">
                    <img src={shape1} alt="Techco Shape" />
                </div>
                <div className="decoration_item shape_image_2">
                    <img src={shape2} alt="Techco Shape Angle" />
                </div>
            </section>
        )
    }

    // Error state
    if (error) {
        return (
            <section className="blog_section blog_section_space section_decoration">
                <div className="container">
                    <div className="heading_block text-center">
                        <div className="heading_focus_text has_underline d-inline-flex" style={{ backgroundImage: `url(${Bg})` }}>
                            Our Articles
                        </div>
                        <h2 className="heading_text mb-0">
                            Latest <mark>Articles</mark>
                        </h2>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-12 text-center">
                            <div className="alert alert-danger" role="alert">
                                Error loading blogs: {error}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="decoration_item shape_image_1">
                    <img src={shape1} alt="Techco Shape" />
                </div>
                <div className="decoration_item shape_image_2">
                    <img src={shape2} alt="Techco Shape Angle" />
                </div>
            </section>
        )
    }

    return (
        <section className="blog_section blog_section_space section_decoration">
            <div className="container">
                <div className="heading_block text-center">
                    <div className="heading_focus_text has_underline d-inline-flex" style={{ backgroundImage: `url(${Bg})` }}>
                        Our Articles
                    </div>
                    <h2 className="heading_text mb-0">
                        Latest <mark>Articles</mark>
                    </h2>
                </div>

                <div className="row justify-content-center">
                    {blogs.slice(3, 6).map((blog, Bitem) => (
                        <div className="col-lg-4" key={blog.id || Bitem}>
                            <div className="blog_post_block layout_2">
                                <div className="blog_post_image">
                                    <Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`} className="image_wrap">
                                        <img src={blog.screens} alt={blog.title || "Blog post"} />
                                        <i className="fa-solid fa-arrow-up-right"></i>
                                    </Link>
                                </div>
                                <div className="blog_post_content p-0">
                                    <h3 className="blog_post_title mb-0">
                                        <Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`}>
                                            {blog.title}
                                        </Link>
                                    </h3>
                                    <ul className="post_meta unordered_list">
                                        <li>
                                            <Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`}>
                                                <i className="fa-regular fa-circle-user"></i> By <b>{blog.author}</b>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`}>
                                                <img src={icon1} alt="Icon Calendar" /> {blog.create_at}
                                            </Link>
                                        </li>
                                        <li>
                                            <Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`}>
                                                <i className="fa-regular fa-comment-lines"></i> 24
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="decoration_item shape_image_1">
                <img src={shape1} alt="Techco Shape" />
            </div>
            <div className="decoration_item shape_image_2">
                <img src={shape2} alt="Techco Shape Angle" />
            </div>
        </section>
    )
}

export default BlogSection;