import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Base URL for images
const baseUrl = 'https://portfolio-vercel-bi43.vercel.app/';

const BlogSection = (props) => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch blog data from API
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('https://portfolio-vercel-bi43.vercel.app/api/blogs');
        if (!response.ok) {
          throw new Error('Failed to fetch blogs');
        }
        const data = await response.json();
        
        // Debug: Log the response structure
        console.log('API Response:', data);
        
        // Handle different possible response structures
        let blogData = [];
        if (Array.isArray(data)) {
          blogData = data;
        } else if (data.blogs && Array.isArray(data.blogs)) {
          blogData = data.blogs;
        } else if (data.data && Array.isArray(data.data)) {
          blogData = data.data;
        } else {
          console.warn('Unexpected API response structure:', data);
          blogData = [];
        }
        
        setBlogs(blogData);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
        console.error('API Error:', err);
      }
    };

    fetchBlogs();
  }, []);

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  if (loading) {
    return (
      <section className="blog_section section_space bg-light">
        <div className="container">
          <div className="text-center">Loading blogs...</div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="blog_section section_space bg-light">
        <div className="container">
          <div className="text-center text-danger">Error loading blogs: {error}</div>
        </div>
      </section>
    );
  }

  // Ensure blogs is an array before using slice
  const blogsToDisplay = Array.isArray(blogs) ? blogs.slice(3, 6) : [];

  // Define dynamic paths for Bg and icon1
  const bgImage = `${baseUrl}/images/shapes/bg_pattern_1.svg`;
  const iconCalendar = `${baseUrl}/images/icons/icon_calendar.svg`;

  return (
    <section className="blog_section section_space bg-light" style={{ backgroundImage: `url(${bgImage})` }}>
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
          {blogsToDisplay.length > 0 ? (
            blogsToDisplay.map((blog, Bitem) => (
              <div className="col-lg-4" key={blog.id || Bitem}>
                <div className="blog_post_block">
                  <div className="blog_post_image">
                    <Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`} className="image_wrap">
                      <img
                        src={`${baseUrl}${blog.screens || '/images/blog/default-image.webp'}`}
                        alt={blog.title || 'Blog post'}
                        onError={(e) => {
                          e.target.src = `${baseUrl}/images/blog/default-image.webp`;
                          console.error(`Image load failed for ${blog.screens}:`, e);
                        }}
                        style={{
                          width: '100%',
                          height: '220px',
                          objectFit: 'cover',
                          borderRadius: '10px',
                        }}
                      />
                    </Link>
                  </div>
                  <div className="blog_post_content">
                    <div className="post_meta_wrap">
                      <ul className="category_btns_group unordered_list">
                        <li>
                          <Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`}>
                            {blog.thumb || 'General'}
                          </Link>
                        </li>
                      </ul>
                      <ul className="post_meta unordered_list">
                        <li>
                          <Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`}>
                            <img src={iconCalendar} alt="Icon Calendar" /> 
                            {blog.create_at || blog.created_at || 'No date'}
                          </Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`}>
                            <i className="fa-regular fa-comment-lines"></i> 
                            {blog.comment || blog.comments || '0'}
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <h3 className="blog_post_title">
                      <Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`}>
                        {blog.title || 'Untitled Post'}
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
            ))
          ) : (
            <div className="col-12 text-center">
              <p>No blog posts available at the moment.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
