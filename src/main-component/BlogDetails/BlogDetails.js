import React, { Fragment } from 'react';
import { useParams } from 'react-router-dom'
import { useBlogs } from '../../hooks/useQueries'
import Header from '../../components/header/Header';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import CtaSection from '../../components/CtaSection/CtaSection';
import BlogSingle from '../../components/BlogDetails/BlogDetails';


const BlogDetails = (props) => {

    const { slug } = useParams()

    const { data: blogs, isLoading } = useBlogs();

    if (isLoading) return <div className="text-center section_space">Loading...</div>;

    const BlogDetails = blogs?.find(item => item.slug === slug)

    if (!BlogDetails) return <div className="text-center section_space">Blog not found.</div>;

    return (
        <Fragment>
            <Header />
            <main className="page_content about-page">
                <PageTitle pageTitle={BlogDetails.title} pagesub={'Details 😍'} pageTop={'Blog'}/>
                <BlogSingle/>
            </main>
            <CtaSection />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default BlogDetails;