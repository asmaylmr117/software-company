import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom'
import Header from '../../components/header/Header';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import ModalVideo from 'react-modal-video'
import CtaSection from '../../components/CtaSection/CtaSection';
import PolicySection from './Policy';
import offerBanner from '../../images/icons/best_offer.svg.svg';
import PartnerSection from '../../components/PartnerSection';


const PricingPage = (props) => {

    const [isOpen, setOpen] = useState(false)

    const [isActive, setIsActive] = useState(false);

    const handleToggle = () => {
        setIsActive(!isActive);
    };


    return (
        <Fragment>
            <Header />
            <main className="page_content about-page">
                <PageTitle pageTitle={'Pricing Plan'} pagesub={'Pricing 😍'} pageTop={'Our'} />
                <PolicySection />
                <section className="pricing_section section_space pb-0 bg-light">
                    <div className="container">
                        <div className="heading_block text-center">
                            <div className="heading_focus_text mb-2">
                                Our
                                <span className="badge bg-secondary text-white">Pricing 😍</span>
                            </div>
                            <h2 className="heading_text mb-0">
                                Best Plane for Business
                            </h2>
                        </div>
                        <div className="pricing_toggle_btn text-center">
                            <button type="button" onClick={handleToggle} className={isActive ? 'active' : ''}>
                                <span>Billed Monthly <small>-10%</small></span>
                                <span>Billed Yearly <small>-30%</small></span>
                            </button>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-lg-6">
                                <div className={`pricing_block ${isActive ? 'active' : ''}`}>
                                    <div className="table_head">
                                        <div className="pricing_price_value bg-primary-subtle text-primary">
                                            <span className="pricing_monthly">
                                                <del>$54</del> $48<small>.6</small> <sub>You'll Save <u>$5.4</u> Monthly</sub>
                                            </span>
                                            <span className="pricing_annually">
                                                <del>$648</del> $453<small>.6</small> <sub>You'll Save <u>$194.4</u> Annually</sub>
                                            </span>
                                        </div>
                                        <div className="pricing_block_title">
                                            <h3 className="pricing_package_title">Pro Package</h3>
                                            <p className="pricing_package_description mb-0">
                                                Make your work easier with an integrated properly together.
                                            </p>
                                        </div>
                                    </div>
                                    <ul className="icon_list unordered_list_block">
                                        <li>
                                            <span className="icon_list_icon">
                                                <i className="fa-regular fa-circle-check"></i>
                                            </span>
                                            <span className="icon_list_text">
                                                Software Development.
                                            </span>
                                        </li>
                                        <li>
                                            <span className="icon_list_icon">
                                                <i className="fa-regular fa-circle-check"></i>
                                            </span>
                                            <span className="icon_list_text">
                                                Digital Product Design
                                            </span>
                                        </li>
                                        <li>
                                            <span className="icon_list_icon">
                                                <i className="fa-regular fa-circle-check"></i>
                                            </span>
                                            <span className="icon_list_text">
                                                IT Consulting.
                                            </span>
                                        </li>
                                        <li>
                                            <span className="icon_list_icon">
                                                <i className="fa-regular fa-circle-check"></i>
                                            </span>
                                            <span className="icon_list_text">
                                                Website Development.
                                            </span>
                                        </li>
                                        <li className="delete">
                                            <span className="icon_list_icon">
                                                <i className="fa-regular fa-circle-check"></i>
                                            </span>
                                            <span className="icon_list_text">
                                                Cybersecurity Services.
                                            </span>
                                        </li>
                                        <li className="delete">
                                            <span className="icon_list_icon">
                                                <i className="fa-regular fa-circle-check"></i>
                                            </span>
                                            <span className="icon_list_text">
                                                Cloud Services.
                                            </span>
                                        </li>
                                    </ul>
                                    <Link to="/pricing" className="btn btn-light">
                                        <span className="btn_label" data-text="Purchase Now">Purchase Now</span>
                                        <span className="btn_icon">
                                            <i className="fa-solid fa-arrow-up-right"></i>
                                        </span>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className={`pricing_block ${isActive ? 'active' : ''}`}>
                                    <div className="best_plan">
                                        <img src={offerBanner} alt="Best Offer" />
                                    </div>
                                    <div className="table_head">
                                        <div className="pricing_price_value bg-primary-subtle text-primary">
                                            <span className="pricing_monthly">
                                                <del>$60</del> $54 <sub>You'll Save <u>$6</u> Monthly</sub>
                                            </span>
                                            <span className="pricing_annually">
                                                <del>$720</del> $504 <sub>You'll Save <u>$216</u> Annually</sub>
                                            </span>
                                        </div>
                                        <div className="pricing_block_title">
                                            <h3 className="pricing_package_title">Team Package</h3>
                                            <p className="pricing_package_description mb-0">
                                                Make your work easier with an integrated properly together.
                                            </p>
                                        </div>
                                    </div>
                                    <ul className="icon_list unordered_list_block">
                                        <li>
                                            <span className="icon_list_icon">
                                                <i className="fa-regular fa-circle-check"></i>
                                            </span>
                                            <span className="icon_list_text">
                                                Software Development.
                                            </span>
                                        </li>
                                        <li>
                                            <span className="icon_list_icon">
                                                <i className="fa-regular fa-circle-check"></i>
                                            </span>
                                            <span className="icon_list_text">
                                                Digital Product Design
                                            </span>
                                        </li>
                                        <li>
                                            <span className="icon_list_icon">
                                                <i className="fa-regular fa-circle-check"></i>
                                            </span>
                                            <span className="icon_list_text">
                                                IT Consulting.
                                            </span>
                                        </li>
                                        <li>
                                            <span className="icon_list_icon">
                                                <i className="fa-regular fa-circle-check"></i>
                                            </span>
                                            <span className="icon_list_text">
                                                Website Development.
                                            </span>
                                        </li>
                                        <li>
                                            <span className="icon_list_icon">
                                                <i className="fa-regular fa-circle-check"></i>
                                            </span>
                                            <span className="icon_list_text">
                                                Cybersecurity Services.
                                            </span>
                                        </li>
                                        <li>
                                            <span className="icon_list_icon">
                                                <i className="fa-regular fa-circle-check"></i>
                                            </span>
                                            <span className="icon_list_text">
                                                Cloud Services.
                                            </span>
                                        </li>
                                    </ul>
                                    <a className="btn btn-light" href="#!">
                                        <span className="btn_label" data-text="Purchase Now">Purchase Now</span>
                                        <span className="btn_icon">
                                            <i className="fa-solid fa-arrow-up-right"></i>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="client_logo_section section_space bg-light">
                    <div className="container">
                        <div className="heading_block text-center">
                            <div className="heading_focus_text mb-0">
                                <span className="badge bg-secondary text-white">Brand We</span>
                                Work With 🎉
                            </div>
                        </div>
                        <PartnerSection/>
                    </div>
                </div>
            </main>
            <CtaSection />
            <Footer />
            <Scrollbar />
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="7e90gBu4pas" onClose={() => setOpen(false)} />
        </Fragment>
    )
};
export default PricingPage;
