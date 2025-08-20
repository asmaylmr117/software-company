import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import BlogSidebar from '../BlogSidebar';

// Base URL for images
const baseUrl = 'https://portfolio-vercel-bi43.vercel.app/images/';

const BlogSingle = () => {
  const { slug } = useParams();
  const [blogDetails, setBlogDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch blog data from API
  useEffect(() => {
    const fetchBlogDetails = async () => {
      try {
        const response = await fetch(`https://portfolio-vercel-bi43.vercel.app/api/blogs?slug=${slug}`);
        if (!response.ok) {
          throw new Error('Failed to fetch blog details');
        }
        const data = await response.json();
        // Extract the blogs array and find the blog with the matching slug
        const blog = data.blogs.find((item) => item.slug === slug);
        if (!blog) {
          throw new Error('Blog not found');
        }
        setBlogDetails(blog);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchBlogDetails();
  }, [slug]);

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!blogDetails) {
    return <div>Blog not found</div>;
  }

  // Construct image URLs dynamically
  const blogImage1 = `${baseUrl}${blogDetails.image || 'blog/blog_post_image_8.webp'}`;
  const blogImage2 = `${baseUrl}${blogDetails.subImage1 || 'blog/blog_post_image_9.webp'}`;
  const blogImage3 = `${baseUrl}${blogDetails.subImage2 || 'blog/blog_post_image_10.webp'}`;
  const blogImage4 = `${baseUrl}${blogDetails.subImage3 || 'blog/blog_post_image_11.webp'}`;
  const authorImage = `${baseUrl}${blogDetails.authorImage || 'avatar/avatar_8.webp'}`;
  const authorImage2 = `${baseUrl}${blogDetails.commentAuthorImage1 || 'avatar/avatar_9.webp'}`;
  const authorImage3 = `${baseUrl}${blogDetails.commentAuthorImage2 || 'avatar/avatar_10.webp'}`;
  const authorImage4 = `${baseUrl}${blogDetails.commentAuthorImage3 || 'avatar/avatar_11.webp'}`;
  const iconCalendar = `${baseUrl}icons/icon_calendar.svg`;
  const iconUser = `${baseUrl}icons/icon_user.svg`;
  const iconChat = `${baseUrl}icons/icon_chat.svg`;
  const iconEye = `${baseUrl}icons/icon_eye.svg`;
  const iconLink = `${baseUrl}icons/icon_link.svg`;
  const iconBookmark = `${baseUrl}icons/icon_bookmark.svg`;
  const iconFacebook = `${baseUrl}icons/icon_facebook.svg`;
  const iconTwitter = `${baseUrl}icons/icon_twitter_x.svg`;
  const iconLinkedIn = `${baseUrl}icons/icon_linkedin.svg`;
  const iconInstagram = `${baseUrl}icons/icon_instagram.svg`;

  return (
    <section className="blog_details_section section_space bg-light">
      <div className="container">
        <div className="details_item_image">
          <img src={blogImage1} alt="Techco - Blog" />
        </div>
        <div className="post_meta_wrap mb-4">
          <ul className="category_btns_group unordered_list">
            <li><Link onClick={ClickHandler} to={'/blog'}>{blogDetails.thumb}</Link></li>
          </ul>
          <ul className="post_meta unordered_list">
            <li>
              <Link onClick={ClickHandler} to={'/blog'}>
                <img src={iconCalendar} alt="Icon Calendar" /> {blogDetails.create_at}
              </Link>
            </li>
          </ul>
        </div>
        <h2 className="details_item_title">{blogDetails.title}</h2>
        <p>{blogDetails.description}</p>
        <div className="row align-items-center">
          <div className="col-md-6">
            <ul className="post_meta unordered_list">
              <li>
                <Link onClick={ClickHandler} to={'/blog'}>
                  <img src={iconUser} alt="Icon User" /> by {blogDetails.author}
                </Link>
              </li>
              <li>
                <Link onClick={ClickHandler} to={'/blog'}>
                  <img src={iconChat} alt="Icon Chat" /> {blogDetails.comment} Comments
                </Link>
              </li>
              <li>
                <Link onClick={ClickHandler} to={'/blog'}>
                  <img src={iconEye} alt="Icon Eye" /> {blogDetails.views} Views
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-6">
            <ul className="post_meta unordered_list justify-content-md-end">
              <li>
                <Link onClick={ClickHandler} to={'/blog'}>
                  <img src={iconLink} alt="Icon Link" /> Copy Link
                </Link>
              </li>
              <li>
                <Link onClick={ClickHandler} to={'/blog'}>
                  <img src={iconBookmark} alt="Bookmark Chat" /> Bookmark
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
                {blogDetails.title}
              </h3>
              <div className="row mb-4">
                <div className="col-md-6 col-sm-6">
                  <div className="details_item_image m-0">
                    <img src={blogImage2} alt="Techco - Blog" />
                  </div>
                </div>
                <div className="col-md-6 col-sm-6">
                  <div className="details_item_image m-0">
                    <img src={blogImage3} alt="Techco - Blog" />
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
                they provide a comprehensive and in-depth analysis that goes beyond surface-level. Join us as we uncover the secrets of IT solutions, guided by the wisdom and expertise of Techco's thought leaders. Prepare to be inspired, informed, and empowered to navigate the ever-evolving world of technology with confidence and clarity. You'll gain access to unparalleled expertise and discover new possibilities for success in the ever-evolving world of technology.
              </p>
              <div className="row align-items-center mb-5">
                <div className="col-md-6">
                  <div className="details_item_image m-0">
                    <img src={blogImage4} alt="Techco - Blog" />
                  </div>
                </div>
                <div className="col-md-6">
                  <ul className="icon_list unordered_list_block">
                    <li>
                      <span className="icon_list_icon">
                        <i className="fa-solid fa-circle fa-fw"></i>
                      </span>
                      <span className="icon_list_text">Unveiling Emerging Technologies</span>
                    </li>
                    <li>
                      <span className="icon_list_icon">
                        <i className="fa-solid fa-circle fa-fw"></i>
                      </span>
                      <span className="icon_list_text">Navigating Complex Challenges</span>
                    </li>
                    <li>
                      <span className="icon_list_icon">
                        <i className="fa-solid fa-circle fa-fw"></i>
                      </span>
                      <span className="icon_list_text">Forecasting Future Trends</span>
                    </li>
                    <li>
                      <span className="icon_list_icon">
                        <i className="fa-solid fa-circle fa-fw"></i>
                      </span>
                      <span className="icon_list_text">Driving Innovation Strategies</span>
                    </li>
                    <li>
                      <span className="icon_list_icon">
                        <i className="fa-solid fa-circle fa-fw"></i>
                      </span>
                      <span className="icon_list_text">Exploring Industry Practices</span>
                    </li>
                    <li>
                      <span className="icon_list_icon">
                        <i className="fa-solid fa-circle fa-fw"></i>
                      </span>
                      <span className="icon_list_text">Empowering Transformation</span>
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="details_item_info_title">3 Reasons to Invest at This Moment</h3>
              <p className="mb-2">
                Here are three key reasons emphasizing the importance of optimizing IT infrastructure for efficiency and growth:
              </p>
              <ul className="icon_list unordered_list_block mb-5">
                <li><span className="icon_list_text">1. Enhanced Operational Agility</span></li>
                <li><span className="icon_list_text">2. Resource Optimization & Cost Efficiency</span></li>
                <li><span className="icon_list_text">3. Scalability and Innovation</span></li>
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
                          <img src={iconFacebook} alt="Icon Facebook" />
                        </Link>
                      </li>
                      <li>
                        <Link onClick={ClickHandler} to={'/blog'} className="rounded-circle">
                          <img src={iconTwitter} alt="Icon Twitter X" />
                        </Link>
                      </li>
                      <li>
                        <Link onClick={ClickHandler} to={'/blog'} className="rounded-circle">
                          <img src={iconLinkedIn} alt="Icon LinkedIn" />
                        </Link>
                      </li>
                      <li>
                        <Link onClick={ClickHandler} to={'/blog'} className="rounded-circle">
                          <img src={iconInstagram} alt="Icon Instagram" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="post_author_box">
                <div className="author_image">
                  <img src={authorImage} alt="Techco - Blog Author" />
                </div>
                <div className="author_content">
                  <h3 className="author_name">About {blogDetails.author}</h3>
                  <h4 className="author_designation">{blogDetails.authorTitle}</h4>
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
                <Link onClick={ClickHandler} to={'/blog'}>
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
                <h3 className="details_item_info_title mb-5">Comments ({blogDetails.comment})</h3>
                <ul className="comments_list unordered_list_block">
                  <li>
                    <div className="comment_item">
                      <div className="comment_author_thumbnail">
                        <img src={authorImage2} alt="Techco - Comment Author Avatar" />
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
                            <img src={authorImage3} alt="Techco - Comment Author Avatar" />
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
                            <img src={authorImage2} alt="Techco - Comment Author Avatar" />
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
                        <img src={authorImage4} alt="Techco - Comment Author Avatar" />
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
  );
};

export default BlogSingle;