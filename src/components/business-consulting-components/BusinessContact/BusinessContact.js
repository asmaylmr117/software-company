import React, { useState } from 'react'
import SimpleReactValidator from 'simple-react-validator';
import Bg from '../../../images/backgrounds/bg_image_4.webp'
import { apiClient } from '../../../api/axiosConfig';

const BusinessContact = (props) => {

    const [status, setStatus] = useState(null);
    const [forms, setForms] = useState({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: ''
    });
    const [validator] = useState(new SimpleReactValidator({
        className: 'errorMessage'
    }));
    const changeHandler = e => {
        setForms({ ...forms, [e.target.name]: e.target.value })
        if (validator.allValid()) {
            validator.hideMessages();
        } else {
            validator.showMessages();
        }
    };

    const submitHandler = async e => {
        e.preventDefault();
        if (validator.allValid()) {
            validator.hideMessages();
            setStatus('loading');
            try {
                await apiClient.post('/contact', {
                    name: forms.name,
                    email: forms.email,
                    subject: 'Business Consulting Inquiry',
                    phone: forms.phone,
                    company: forms.company,
                    message: forms.message
                });
                setStatus('success');
                setForms({
                    name: '',
                    email: '',
                    company: '',
                    phone: '',
                    message: ''
                });
                setTimeout(() => setStatus(null), 3000);
            } catch (error) {
                console.error("Error sending message", error);
                setStatus('error');
                setTimeout(() => setStatus(null), 3000);
            }
        } else {
            validator.showMessages();
        }
    };

    return (

        <section className="calltoaction_section parallaxie" style={{ backgroundImage: `url(${Bg})` }}>
            <div className="container">
                <div className="row justify-content-lg-end">
                    <div className="col-lg-7">
                        <div className="instant_contact_form bg-primary shadow-none">
                            <div className="small_title text-white">
                                <i className="fa-solid fa-envelope-open-text text-white"></i>
                                Let's Connect!
                            </div>
                            <h3 className="form_title text-white">
                                Send us a message, and we'll promptly discuss your project with you.
                            </h3>
                            <form className="xb-item--form contact-from" onSubmit={(e) => submitHandler(e)}>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="input_title" htmlFor="input_name">
                                                <i className="fa-regular fa-user"></i>
                                            </label>
                                            <input
                                                value={forms.name}
                                                type="text"
                                                name="name"
                                                className="form-control"
                                                onBlur={(e) => changeHandler(e)}
                                                onChange={(e) => changeHandler(e)}
                                                placeholder="Your Name" />
                                            {validator.message('name', forms.name, 'required|alpha_space')}
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="input_title" htmlFor="input_email">
                                                <i className="fa-regular fa-envelope"></i>
                                            </label>
                                            <input
                                                value={forms.email}
                                                type="email"
                                                name="email"
                                                className="form-control"
                                                onBlur={(e) => changeHandler(e)}
                                                onChange={(e) => changeHandler(e)}
                                                placeholder="Your Enter" />
                                            {validator.message('email', forms.email, 'required|email')}
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="input_title" htmlFor="input_phone">
                                                <i className="fa-regular fa-phone-volume"></i>
                                            </label>
                                            <input
                                                value={forms.phone}
                                                type="phone"
                                                name="phone"
                                                className="form-control"
                                                onBlur={(e) => changeHandler(e)}
                                                onChange={(e) => changeHandler(e)}
                                                placeholder="Your Phone No." />
                                            {validator.message('phone', forms.phone, 'required|phone')}
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="input_title" htmlFor="input_company">
                                                <i className="fa-regular fa-globe"></i>
                                            </label>
                                            <input
                                                value={forms.company}
                                                type="company"
                                                name="company"
                                                className="form-control"
                                                onBlur={(e) => changeHandler(e)}
                                                onChange={(e) => changeHandler(e)}
                                                placeholder="Your Company Name" />
                                            {validator.message('company', forms.company, 'required')}
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group">
                                            <label className="input_title" htmlFor="input_textarea">
                                                <i className="fa-regular fa-comments"></i>
                                            </label>
                                            <textarea
                                                onBlur={(e) => changeHandler(e)}
                                                onChange={(e) => changeHandler(e)}
                                                value={forms.message}
                                                type="text"
                                                name="message"
                                                className="form-control"
                                                placeholder="How can we help you?">
                                            </textarea>
                                            {validator.message('message', forms.message, 'required')}
                                        </div>
                                        <button type="submit" className="btn btn-primary" disabled={status === 'loading'}>
                                            <span className="btn_label" data-text={status === 'loading' ? 'Sending...' : 'Send Request'}>{status === 'loading' ? 'Sending...' : 'Send Request'}</span>
                                            <span className="btn_icon">
                                                <i className="fa-solid fa-arrow-up-right"></i>
                                            </span>
                                        </button>
                                        {status === 'success' && <div className="alert alert-success mt-3" role="alert">Your message was sent successfully!</div>}
                                        {status === 'error' && <div className="alert alert-danger mt-3" role="alert">Failed to send message. Please try again.</div>}
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default BusinessContact;