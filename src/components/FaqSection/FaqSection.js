
import React, { useState } from 'react';
import fImg1 from '../../images/faq/faq_img.png'
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
} from 'reactstrap';

const FaqSection = (props) => {

    const [open, setOpen] = useState('1');
    const toggle = (id) => {
        if (open === id) {
            setOpen();
        } else {
            setOpen(id);
        }
    };

    return (
        <section className="faq pt-120 pb-120">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="xb-faq-content">
                            <div className="sec-title mb-125">
                                <h2 className="mb-30 wow skewIn">Common questions <br /> <span> answered</span></h2>
                                <p>At the heart of our commitment to providing <br /> exceptional immigration solutions
                                    stands our trusted</p>
                            </div>
                            <div className="faq-img">
                                <img src={fImg1} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="xb-faq">
                            <Accordion open={open} toggle={toggle} className='accordion_box'>
                                <AccordionItem className='block'>
                                    <AccordionHeader targetId="1" className='acc-btn'>What services do you offer?
                                        <span className="arrow"></span>
                                    </AccordionHeader>
                                    <AccordionBody accordionId="1" className='acc_body'>
                                        <div className="content">
                                            <p>We offer comprehensive immigration and visa consulting services, <br />
                                                including visa application assistance, document preparation,</p>
                                            <ul>
                                                <li><i className="far fa-check"></i>Comprehensive Visa Assistance</li>
                                                <li><i className="far fa-check"></i>Visa Category Expertise</li>
                                                <li><i className="far fa-check"></i>Transparency and Communication</li>
                                            </ul>
                                        </div>
                                    </AccordionBody>
                                </AccordionItem>
                                <AccordionItem className='block'>
                                    <AccordionHeader targetId="2" className='acc-btn'>What is the consultation process like?
                                        <span className="arrow"></span>
                                    </AccordionHeader>
                                    <AccordionBody accordionId="2" className='acc_body'>
                                        <div className="content">
                                            <p>We offer comprehensive immigration and visa consulting services, <br />
                                                including visa application assistance, document preparation,</p>
                                            <ul>
                                                <li><i className="far fa-check"></i>Comprehensive Visa Assistance</li>
                                                <li><i className="far fa-check"></i>Visa Category Expertise</li>
                                                <li><i className="far fa-check"></i>Transparency and Communication</li>
                                            </ul>
                                        </div>
                                    </AccordionBody>
                                </AccordionItem>
                                <AccordionItem className='block'>
                                    <AccordionHeader targetId="3" className='acc-btn'>How much do your services cost?
                                        <span className="arrow"></span>
                                    </AccordionHeader>
                                    <AccordionBody accordionId="3" className='acc_body'>
                                        <div className="content">
                                            <p>We offer comprehensive immigration and visa consulting services, <br />
                                                including visa application assistance, document preparation,</p>
                                            <ul>
                                                <li><i className="far fa-check"></i>Comprehensive Visa Assistance</li>
                                                <li><i className="far fa-check"></i>Visa Category Expertise</li>
                                                <li><i className="far fa-check"></i>Transparency and Communication</li>
                                            </ul>
                                        </div>
                                    </AccordionBody>
                                </AccordionItem>
                                <AccordionItem className='block'>
                                    <AccordionHeader targetId="4" className='acc-btn'>How do I get started with your services?
                                        <span className="arrow"></span>
                                    </AccordionHeader>
                                    <AccordionBody accordionId="4" className='acc_body'>
                                        <div className="content">
                                            <p>We offer comprehensive immigration and visa consulting services, <br />
                                                including visa application assistance, document preparation,</p>
                                            <ul>
                                                <li><i className="far fa-check"></i>Comprehensive Visa Assistance</li>
                                                <li><i className="far fa-check"></i>Visa Category Expertise</li>
                                                <li><i className="far fa-check"></i>Transparency and Communication</li>
                                            </ul>
                                        </div>
                                    </AccordionBody>
                                </AccordionItem>
                                <AccordionItem className='block'>
                                    <AccordionHeader targetId="5" className='acc-btn'>What is your success rate with visa applications?
                                        <span className="arrow"></span>
                                    </AccordionHeader>
                                    <AccordionBody accordionId="5" className='acc_body'>
                                        <div className="content">
                                            <p>We offer comprehensive immigration and visa consulting services, <br />
                                                including visa application assistance, document preparation,</p>
                                            <ul>
                                                <li><i className="far fa-check"></i>Comprehensive Visa Assistance</li>
                                                <li><i className="far fa-check"></i>Visa Category Expertise</li>
                                                <li><i className="far fa-check"></i>Transparency and Communication</li>
                                            </ul>
                                        </div>
                                    </AccordionBody>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};
export default FaqSection;
