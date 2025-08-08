import React, { Fragment } from 'react';
import Header3 from '../../components/header3/Header3';
import Hero3 from '../../components/hero3/hero3';
import PartnerSection from '../../components/business-consulting-components/PartnerSection/PartnerSection';
import EmpoweringSuccess from '../../components/business-consulting-components/EmpoweringSuccess/EmpoweringSuccess';
import ConsultingService from '../../components/business-consulting-components/ConsultingService/ConsultingService';
import BusinessTestimonial from '../../components/business-consulting-components/BusinessTestimonial/BusinessTestimonial';
import BusinessBlogSection from '../../components/business-consulting-components/BusinessBlogSection/BusinessBlogSection';
import BusinessContact from '../../components/business-consulting-components/BusinessContact/BusinessContact';
import BusinessFooter from '../../components/business-consulting-components/BusinessFooter/BusinessFooter';
import Scrollbar from '../../components/scrollbar/scrollbar';


const HomePage3 = () => {

    return (
        <Fragment>
            <div className='index_business_consulting'>
                <main className="page_content s2">
                    <Header3 />
                    <Hero3 />
                    <PartnerSection />
                    <EmpoweringSuccess />
                    <ConsultingService />
                    <BusinessTestimonial />
                    <BusinessBlogSection />
                    <BusinessContact />
                    <BusinessFooter />
                    <Scrollbar />
                </main>
            </div>
        </Fragment>
    )
};
export default HomePage3;