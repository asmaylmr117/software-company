import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Base URL for images and API
const baseUrl = 'https://portfolio-vercel-bi43.vercel.app/';

const BusinessBlogSection = (props) => {
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
        setBlogs(data.blogs);
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
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  // Define dynamic path for Bg
  const bgImage = `${baseUrl}/images/backgrounds/bg_image_4.webp`;

  return (
    <section className="blog_section_2 section_space" style={{ backgroundImage: `url(${bgImage})` }}>
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
                    <img
                      src={`${baseUrl}${blog.screens}`} // Use the full relative path from API
                      alt="Techco Blog Post"
                      onError={(e) => {
                        e.target.src = `${baseUrl}/images/blog/default-image.webp`; // Fallback image
                        console.error(`Image load failed for ${blog.screens}:`, e);
                      }}
                    />
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
  );
};

export default BusinessBlogSection;