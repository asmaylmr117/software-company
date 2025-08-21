import React, { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ModalVideo from 'react-modal-video';
import Header from '../../components/header/Header';
import PageTitle from '../../components/pagetitle/PageTitle';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Footer from '../../components/footer/Footer';
import CtaSection from '../../components/CtaSection/CtaSection';
import ProcessTechnology from '../../components/software-company-components/ProcessTechnology/ProcessTechnology';

import srImg from '../../images/portfolio/portfolio_item_image_2.webp';
import srImg2 from '../../images/portfolio/portfolio_item_image_5.webp';
import srImg3 from '../../images/portfolio/portfolio_item_image_6.webp';
import srImg4 from '../../images/portfolio/portfolio_item_image_5.webp';
import icon from '../../images/icons/icon_check_3.svg';

// Custom CSS for spinner animation
const styles = `
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  .custom-spinner {
    border: 4px solid rgba(255, 255, 255, 0.2);
    border-top: 4px solid #3b82f6; /* Tailwind's blue-500 */
    border-radius: 50%;
    width: 60px;
    height: 60px;
    animation: spin 1s linear infinite;
  }
`;

const ServiceSinglePage = () => {
  const { slug } = useParams();
  const [serviceDetails, setServiceDetails] = useState(null);
  const [isOpen, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchService = async () => {
      try {
        let allServices = [];

        // Page 1
        const res1 = await fetch('https://portfolio-vercel-bi43.vercel.app/api/Services?page=1');
        const data1 = await res1.json();
        allServices = allServices.concat(data1.services);

        // Page 2 (if exists)
        if (data1.totalPages >= 2) {
          const res2 = await fetch('https://portfolio-vercel-bi43.vercel.app/api/Services?page=2');
          const data2 = await res2.json();
          allServices = allServices.concat(data2.services);
        }

        const matchedService = allServices.find(item => item.slug === slug);

        if (matchedService) {
          setServiceDetails(matchedService);
          setLoading(false);
        } else {
          throw new Error('Service not found');
        }
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchService();
  }, [slug]);

  return (
    <Fragment>
      <style>{styles}</style>
      <Header />
      <main className="page_content service-single-page">
        {loading ? (
          <div className="min-h-[60vh] flex items-center justify-center bg-light">
            <div className="flex flex-col items-center space-y-4">
              <div className="custom-spinner"></div>
              <p className="text-gray-700 text-lg font-medium">Loading Service Details...</p>
            </div>
          </div>
        ) : error ? (
          <div className="min-h-[60vh] flex items-center justify-center text-red-600">
            Error: {error}
          </div>
        ) : !serviceDetails ? (
          <div className="min-h-[60vh] flex items-center justify-center text-gray-600">
            No service details available.
          </div>
        ) : (
          <>
            <PageTitle pageTitle={serviceDetails.title} pagesub={'Details 😍'} pageTop={'Services'} />
            <section className="service_details_section section_space bg-light">
              <div className="container">
                <div className="details_item_image position-relative">
                  <img src={srImg} alt="Service Details" />
                  <button className="video_btn ripple_effect" onClick={() => setOpen(true)}>
                    <span className="btn_icon"><i className="fa-solid fa-play"></i></span>
                  </button>
                </div>
                <h2 className="details_item_title">{serviceDetails.title}</h2>
                <p>
                  {serviceDetails.title} are the backbone of modern businesses, serving as the foundation upon which all digital operations rely...
                </p>
                <p>
                  We take a holistic approach to network design...
                </p>

                <ProcessTechnology />

                <h3 className="details_item_info_title">Services Outcome</h3>
                <p className="mb-4">
                  Here are six key points...
                </p>

                <div className="row mb-4">
                  <div className="col-lg-6">
                    <ul className="icon_list unordered_list_block">
                      <li><span className="icon_list_icon"><img src={icon} alt="" /></span><span className="icon_list_text">Scalability and Flexibility</span></li>
                      <li><span className="icon_list_icon"><img src={icon} alt="" /></span><span className="icon_list_text">Security and Compliance</span></li>
                      <li><span className="icon_list_icon"><img src={icon} alt="" /></span><span className="icon_list_text">Performance Optimization</span></li>
                    </ul>
                  </div>
                  <div className="col-lg-6">
                    <ul className="icon_list unordered_list_block">
                      <li><span className="icon_list_icon"><img src={icon} alt="" /></span><span className="icon_list_text">User Experience</span></li>
                      <li><span className="icon_list_icon"><img src={icon} alt="" /></span><span className="icon_list_text">Security and Compliance</span></li>
                      <li><span className="icon_list_icon"><img src={icon} alt="" /></span><span className="icon_list_text">Training and Education</span></li>
                    </ul>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-4 col-md-6 col-sm-6"><div className="details_item_image m-0"><img src={srImg2} alt="Service" /></div></div>
                  <div className="col-lg-4 col-md-6 col-sm-6"><div className="details_item_image m-0"><img src={srImg3} alt="Service" /></div></div>
                  <div className="col-lg-4 col-md-6 col-sm-6"><div className="details_item_image m-0"><img src={srImg4} alt="Service" /></div></div>
                </div>
              </div>
            </section>
          </>
        )}
      </main>
      <CtaSection />
      <Footer />
      <Scrollbar />
      <ModalVideo channel="youtube" autoplay isOpen={isOpen} videoId="7e90gBu4pas" onClose={() => setOpen(false)} />
    </Fragment>
  );
};

export default ServiceSinglePage;