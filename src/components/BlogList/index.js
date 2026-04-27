import { useRef, useEffect } from 'react';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom'
import blogs from '../../api/blogs'
import bImg from '../../images/blog/blog_post_image_4.webp'
import arrow from '../../images/shapes/shape_arrow_right.svg'
import arrow2 from '../../images/shapes/shape_arrow_left.svg'
import icon1 from '../../images/icons/icon_calendar.svg'
import BlogSidebar from '../BlogSidebar';

const BlogList = (props) => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const swiperRef = useRef(null);

    useEffect(() => {
        if (swiperRef.current && prevRef.current && nextRef.current) {
            swiperRef.current.params.navigation.prevEl = prevRef.current;
            swiperRef.current.params.navigation.nextEl = nextRef.current;
            swiperRef.current.navigation.init();
            swiperRef.current.navigation.update();
        }
    }, []);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
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
                            ref={swiperRef}
                            onBeforeInit={(swiper) => {
                                swiperRef.current = swiper;
                            }}
                        >
                            {blogs.slice(0, 3).map((blog, Bitem) => (
                                <SwiperSlide key={Bitem}>
                                    <div className="blog_post_block content_over_layout">
                                        <div className="blog_post_image">
                                            <Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`} className="image_wrap">
                                                <img src={bImg} alt="Blog Post" />
                                            </Link>
                                        </div>
                                        <div className="blog_post_content">
                                            <div className="post_meta_wrap">
                                                <ul className="category_btns_group unordered_list">
                                                    <li><Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`}>Branding</Link></li>
                                                    <li><Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`}>UI/UX</Link></li>
                                                </ul>
                                                <ul className="post_meta unordered_list">
                                                    <li>
                                                        <Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`}>
                                                            <i className="fa-regular fa-calendar-days"></i> {blog.create_at}
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`}><i className="fa-regular fa-comment-lines"></i> 24</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            <h3 className="blog_post_title">
                                                <Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`}>
                                                    {blog.title}
                                                </Link>
                                            </h3>
                                            <p className="mb-0">
                                                Embark on an enlightening journey through the realm of IT solutions as we delve into the latest technological advancements shaping the digital landscape.
                                            </p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                    </div>
                    <button ref={prevRef} className="b1cc-swiper-button-prev" type="button" style={{ backgroundImage: `url(${arrow})` }}>
                        <i className="fa-solid fa-angles-left"></i>
                    </button>
                    <button ref={nextRef} className="b1cc-swiper-button-next" type="button" style={{ backgroundImage: `url(${arrow2})` }}>
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
                                            <img src={blog.screens} alt="Blog Post" />
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
                                                    <Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`}><i className="fa-regular fa-comment-lines"></i> 24</Link>
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
                                    <li><Link onClick={ClickHandler} to={'/blog'}><i className="fa-solid fa-angles-left"></i></Link></li>
                                    <li className="active"><Link onClick={ClickHandler} to={'/blog'}>1</Link></li>
                                    <li><Link onClick={ClickHandler} to={'/blog'}>2</Link></li>
                                    <li><Link onClick={ClickHandler} to={'/blog'}>3</Link></li>
                                    <li><Link onClick={ClickHandler} to={'/blog'}>...</Link></li>
                                    <li><Link onClick={ClickHandler} to={'/blog'}>10</Link></li>
                                    <li><Link onClick={ClickHandler} to={'/blog'}><i className="fa-solid fa-angles-right"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                        <BlogSidebar/>
                    </div>
                </div>
            </div>
        </section>

    )

}

export default BlogList;
