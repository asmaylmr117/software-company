import React from 'react'
import Bg from '../../../images/shapes/shape_title_under_line.svg'
import ContactForm from '../ContactFrom/ContactForm'
import shape1 from '../../../images/shapes/shape_line_5.svg'
import shape2 from '../../../images/shapes/shape_line_6.svg'
import shape3 from '../../../images/shapes/shape_space_5.svg'


const ContactSection = (props) => {
    return (
        <section className="contact_section pb-80 bg-light section_decoration">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="contact_method_box">
                            <div className="heading_block">
                                <div className="heading_focus_text has_underline d-inline-flex mb-3" style={{ backgroundImage: `url(${Bg})` }}>
                                    You Are Here
                                </div>
                                <h2 className="heading_text mb-0">
                                    Let's Start
                                </h2>
                                <p className="heading_description mb-0">Initiating Your Journey to Success and Growth.</p>
                            </div>
                            <ul className="contact_method_list unordered_list_block">
                                <li>
                                    <a href="tel:+8801680636189">
                                        <span className="icon">
                                            <i className="fa-solid fa-phone-volume"></i>
                                        </span>
                                        <span className="text">+880-1680-6361-89</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="mailto:Techco@gmail.com">
                                        <span className="icon">
                                            <i className="fa-solid fa-envelope"></i>
                                        </span>
                                        <span className="text">Techco@gmail.com</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#!">
                                        <span className="icon">
                                            <i className="fa-solid fa-location-dot"></i>
                                        </span>
                                        <span className="text">Sunshine Business Park</span>
                                    </a>
                                </li>
                            </ul>
                            <ul className="support_step unordered_list_block">
                                <li>
                                    <span className="serial_number">01</span>
                                    <span className="text">Share your requirements</span>
                                </li>
                                <li>
                                    <span className="serial_number">02</span>
                                    <span className="text">Discuss them with our experts</span>
                                </li>
                                <li>
                                    <span className="serial_number">03</span>
                                    <span className="text">Get a free quote</span>
                                </li>
                                <li>
                                    <span className="serial_number">04</span>
                                    <span className="text">Start the project</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="instant_contact_form">
                            <div className="small_title">
                                <i className="fa-solid fa-envelope-open-text"></i>
                                Let's Connect!
                            </div>
                            <h3 className="form_title">
                                Send us a message, and we'll promptly discuss your project with you.
                            </h3>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
            <div className="decoration_item shape_image_1">
                <img src={shape1} alt="Techco Shape" />
            </div>
            <div className="decoration_item shape_image_2">
                <img src={shape2} alt="Techco Shape" />
            </div>
            <div className="decoration_item shape_image_3">
                <img src={shape3} alt="Techco Shape" />
            </div>
        </section>
    )
}

export default ContactSection;