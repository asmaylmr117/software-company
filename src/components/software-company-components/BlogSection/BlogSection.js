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

    // Function to get correct image URL
    const getImageUrl = (blog) => {
        let imageUrl = '';
        
        // Try different possible image properties
        if (blog.screens) imageUrl = blog.screens;
        else if (blog.image) imageUrl = blog.image;
        else if (blog.featured_image) imageUrl = blog.featured_image;
        else if (blog.thumbnail) imageUrl = blog.thumbnail;
        
        // If no image found, return placeholder
        if (!imageUrl) {
            return 'https://via.placeholder.com/400x250?text=No+Image';
        }
        
        // Check if the URL is complete (has http/https)
        if (imageUrl.startsWith('http://') || imageUrl.startsWith('https://')) {
            return imageUrl;
        }
        
        // If it's a relative path, add the base URL
        const baseUrl = 'https://portfolio-vercel-bi43.vercel.app';
        
        // Handle different path formats
        if (imageUrl.startsWith('/')) {
            // Path starts with / (absolute path)
            return baseUrl + imageUrl;
        } else {
            // Relative path without /
            return baseUrl + '/' + imageUrl;
        }
    }

    // Function to handle image error
    const handleImageError = (e) => {
        e.target.src = 'https://via.placeholder.com/400x250?text=Image+Not+Found';
        e.target.onerror = null; // Prevent infinite loop
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
                
                // Debug: Log the API response to see the structure
                console.log('API Response:', data);
                
                // Ensure data is an array - this is the key fix
                if (Array.isArray(data)) {
                    setBlogs(data)
                } else if (data && Array.isArray(data.blogs)) {
                    // If the API returns an object with a 'blogs' property
                    setBlogs(data.blogs)
                } else if (data && Array.isArray(data.data)) {
                    // If the API returns an object with a 'data' property
                    setBlogs(data.data)
                } else {
                    // If data is not an array, wrap it in an array or set empty array
                    console.warn('API response is not an array:', data)
                    setBlogs(data ? [data] : [])
                }
                
                setError(null)
            } catch (err) {
                console.error('Error fetching blogs:', err)
                setError(err.message)
                setBlogs([]) // Ensure blogs is always an array even on error
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

    // Additional safety check - ensure blogs is always an array before rendering
    const blogsArray = Array.isArray(blogs) ? blogs : []

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
                    {blogsArray.slice(0, 3).map((blog, Bitem) => {
                        // Debug: Log each blog item to see its structure
                        console.log('Blog item:', blog);
                        
                        return (
                            <div className="col-lg-4" key={blog.id || Bitem}>
                                <div className="blog_post_block layout_2">
                                    <div className="blog_post_image">
                                        <Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`} className="image_wrap">
                                            <img 
                                                src={getImageUrl(blog)} 
                                                alt={blog.title || "Blog post"} 
                                                onError={handleImageError}
                                                onLoad={(e) => console.log('Image loaded successfully:', e.target.src)}
                                                style={{ width: '100%', height: '250px', objectFit: 'cover' }}
                                            />
                                            <i className="fa-solid fa-arrow-up-right"></i>
                                        </Link>
                                    </div>
                                    <div className="blog_post_content p-0">
                                        <h3 className="blog_post_title mb-0">
                                            <Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`}>
                                                {blog.title || 'No Title'}
                                            </Link>
                                        </h3>
                                        <ul className="post_meta unordered_list">
                                            <li>
                                                <Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`}>
                                                    <i className="fa-regular fa-circle-user"></i> By <b>{blog.author || 'Unknown'}</b>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`}>
                                                    <img src={icon1} alt="Icon Calendar" /> {blog.create_at || blog.created_at || 'No Date'}
                                                </Link>
                                            </li>
                                            <li>
                                                <Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`}>
                                                    <i className="fa-regular fa-comment-lines"></i> {blog.comments_count || 24}
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                
                {/* Show message if no blogs available */}
                {blogsArray.length === 0 && (
                    <div className="row justify-content-center">
                        <div className="col-12 text-center">
                            <p>No articles available at the moment.</p>
                        </div>
                    </div>
                )}
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
