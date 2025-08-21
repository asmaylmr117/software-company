import React, { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/header/Header';
import PageTitle from '../../components/pagetitle/PageTitle';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Footer from '../../components/footer/Footer';
import CtaSection from '../../components/CtaSection/CtaSection';
import BlogSingle from '../../components/BlogDetails/BlogDetails';

const BlogDetails = () => {
  const { slug } = useParams();
  const [blogDetails, setBlogDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch('https://portfolio-vercel-bi43.vercel.app/api/blogs');
        if (!response.ok) {
          throw new Error('Failed to fetch blog data');
        }

        const data = await response.json();
        const matchedBlog = data.blogs.find((item) => item.slug === slug);

        if (matchedBlog) {
          setBlogDetails(matchedBlog);
        } else {
          setError('Blog not found');
        }

        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchBlog();
  }, [slug]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!blogDetails) return <div>No blog details available.</div>;

  return (
    <Fragment>
      <Header />
      <main className="page_content about-page">
        <PageTitle pageTitle={blogDetails.title} pagesub={'Details 😍'} pageTop={'Blog'} />
        <BlogSingle blog={blogDetails} /> {/* Pass the blog object as prop */}
      </main>
      <CtaSection />
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};

export default BlogDetails;
