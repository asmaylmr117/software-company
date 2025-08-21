import { useRef, useState, useEffect } from 'react';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import BlogSidebar from '../BlogSidebar';

// Base URL for images
const baseUrl = 'https://portfolio-vercel-bi43.vercel.app/';

const BlogList = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // Fetch blog data from API
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(`https://portfolio-vercel-bi43.vercel.app/api/blogs?page=${currentPage}`);
        if (!response.ok) {
          throw new Error('Failed to fetch blogs');
        }
        const data = await response.json();
        setBlogs(data.blogs);
        setTotalPages(data.totalPages);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
        console.error('API Error:', err);
      }
    };

    fetchBlogs();
  }, [currentPage]);

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  // Construct image URLs with fallback
  const arrowRight = `${baseUrl}/images/shapes/shape_arrow_right.svg`;
  const arrowLeft = `${baseUrl}/images/shapes/shape_arrow_left.svg`;
  const iconCalendar = `${baseUrl}/images/icons/icon_calendar.svg`;

  // Generate pagination links
  const paginationLinks = [];
  for (let i = 1; i <= totalPages; i++) {
    if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
      paginationLinks.push(
        <li key={i} className={i === currentPage ? 'active' : ''}>
          <Link onClick={() => { ClickHandler(); setCurrentPage(i); }} to={'/blog'}>
            {i}
          </Link>
        </li>
      );
    } else if (i === currentPage - 2 || i === currentPage + 2) {
      paginationLinks.push(
        <li key={i}>
          <Link onClick={ClickHandler} to={'/blog'}>...</Link>
        </li>
      );
    }
  }

  return (
    <section className="blog_section section_space bg-light">
      <div className="container">
        <div className="blog_onecol_carousel overflow-hidden">
          <div className="swiper-wrapper">
            <Swiper
              modules={[Navigation]}
              spaceBetween={50}
              slidesPerView={1}
              loop={true}
              speed={1800}
              parallax={true}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
              }}
            >
              {blogs.slice(0, 4).map((blog, Bitem) => (
                <SwiperSlide key={Bitem}>
                  <div className="blog_post_block content_over_layout">
                    <div className="blog_post_image">
                      <Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`} className="image_wrap">
                        <img
                          src={`${baseUrl}${blog.screens}`}
                          alt={blog.title}
                          onError={(e) => {
                            e.target.src = `${baseUrl}/images/blog/default-image.webp`;
                            console.error(`Image load failed for ${blog.screens}:`, e);
                          }}
                        />
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
                              <img src={iconCalendar} alt="Icon Calendar" /> {blog.create_at}
                            </Link>
                          </li>
                          <li>
                            <Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`}>
                              <i className="fa-regular fa-comment-lines"></i> {blog.comment}
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <h3 className="blog_post_title">
                        <Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`}>
                          {blog.title}
                        </Link>
                      </h3>
                      <p className="mb-0">
                        {blog.description}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          
          {/* أزرار التنقل - مع إضافة onclick handlers */}
          <button 
            ref={prevRef} 
            className="b1cc-swiper-button-prev" 
            type="button" 
            style={{ backgroundImage: `url(${arrowLeft})` }}
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <i className="fa-solid fa-angles-left"></i>
          </button>
          
          <button 
            ref={nextRef} 
            className="b1cc-swiper-button-next" 
            type="button" 
            style={{ backgroundImage: `url(${arrowRight})` }}
            onClick={() => swiperRef.current?.slideNext()}
          >
            <i className="fa-solid fa-angles-right"></i>
          </button>
          
          <div className="b1cc-swiper-pagination p-0"></div>
        </div>

        <div className="section_space pb-0">
          <div className="row">
            <div className="col-lg-8">
              {blogs.slice(3, 8).map((blog, Bitem) => (
                <div className="blog_post_block image_left_layout" key={Bitem}>
                  <div className="blog_post_image">
                    <Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`} className="image_wrap">
                      <img
                        src={`${baseUrl}${blog.screens}`}
                        alt={blog.title}
                        onError={(e) => {
                          e.target.src = `${baseUrl}/images/blog/default-image.webp`;
                          console.error(`Image load failed for ${blog.screens}:`, e);
                        }}
                      />
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
                            <img src={iconCalendar} alt="Icon Calendar" /> {blog.create_at}
                          </Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`}>
                            <i className="fa-regular fa-comment-lines"></i> {blog.comment}
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <h3 className="blog_post_title">
                      <Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`}>
                        {blog.title}
                      </Link>
                    </h3>
                    <p>
                      {blog.description}
                    </p>
                    <Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`} className="btn btn-dark">
                      <span className="btn_label" data-text="Read More">Read More</span>
                      <span className="btn_icon">
                        <i className="fa-solid fa-arrow-up-right"></i>
                      </span>
                    </Link>
                  </div>
                </div>
              ))}
              <div className="pagination_wrap pb-0">
                <ul className="pagination_nav unordered_list justify-content-center">
                  <li>
                    <Link
                      onClick={() => {
                        ClickHandler();
                        if (currentPage > 1) setCurrentPage(currentPage - 1);
                      }}
                      to={'/blog'}
                    >
                      <i className="fa-solid fa-angles-left"></i>
                    </Link>
                  </li>
                  {paginationLinks}
                  <li>
                    <Link
                      onClick={() => {
                        ClickHandler();
                        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
                      }}
                      to={'/blog'}
                    >
                      <i className="fa-solid fa-angles-right"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <BlogSidebar />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogList;