import React, { Fragment } from 'react';
import Header from '../../components/header/Header';
import Hero from '../../components/hero/hero';
import FeaturesSection from '../../components/FeaturesSection/FeaturesSection';
import About from '../../components/about/about';
import PolicySection from '../../components/PolicySection/PolicySection';
import ServiceSection from '../../components/ServiceSection/ServiceSection';
import ProjectSection from '../../components/ProjectSection/ProjectSection';
import Testimonial from '../../components/Testimonial/Testimonial';
import TeamSection from '../../components/TeamSection/TeamSection';
import BlogSection from '../../components/BlogSection/BlogSection';
import CtaSection from '../../components/CtaSection/CtaSection';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';


const HomePage = () => {

    return (
        <Fragment>
            <div>
                <Header />
                <main className="page_content">
                    <Hero />
                    <FeaturesSection />
                    <About />
                    <PolicySection />
                    <ServiceSection />
                    <ProjectSection />
                    <Testimonial />
                    <TeamSection />
                    <BlogSection />
                    <CtaSection />
                </main>
                <Footer />
                <Scrollbar />
            </div>
        </Fragment>
    )
};
export default HomePage;