import React, { useState } from 'react'
import SimpleReactValidator from 'simple-react-validator';

const Bg = 'https://portfolio-vercel-bi43.vercel.app/images/backgrounds/bg_image_3.webp'

const BusinessContact = (props) => {
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

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const changeHandler = e => {
        setForms({ ...forms, [e.target.name]: e.target.value })
        if (validator.allValid()) {
            validator.hideMessages();
        } else {
            validator.showMessages();
        }
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        
        if (validator.allValid()) {
            setIsSubmitting(true);
            setSubmitStatus(null);
            
            try {
                const response = await fetch('https://portfolio-vercel-bi43.vercel.app/api/contact', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify({
                        name: forms.name,
                        email: forms.email,
                        phone: forms.phone,
                        company: forms.company,
                        message: forms.message
                    })
                });

                const data = await response.json();

                if (response.ok && data.success) {
                    setSubmitStatus({
                        type: 'success',
                        message: data.message || 'Data has been sent successfully.!'
                    });
                    
                    // Reset form
                    setForms({
                        name: '',
                        email: '',
                        company: '',
                        phone: '',
                        message: ''
                    });
                    validator.hideMessages();
                } else {
                    throw new Error(data.message || 'An error occurred while sending the message.');
                }
            } catch (error) {
                console.error('Form submission error:', error);
                setSubmitStatus({
                    type: 'error',
                    message: error.message || 'An error occurred while sending your message. Please try again..'
                });
            } finally {
                setIsSubmitting(false);
                // Hide status message after 5 seconds
                setTimeout(() => {
                    setSubmitStatus(null);
                }, 5000);
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

                            {/* Status Message */}
                            {submitStatus && (
                                <div className={`alert mb-3`} 
                                     style={{
                                         padding: '10px 15px',
                                         borderRadius: '5px',
                                         border: `1px solid ${submitStatus.type === 'success' ? '#28a745' : '#dc3545'}`,
                                         backgroundColor: submitStatus.type === 'success' ? 'rgba(0, 123, 255, 0.1)' : 'rgba(0, 123, 255, 0.1)',
                                         color: submitStatus.type === 'success' ? '#28a745' : '#dc3545'
                                     }}>
                                    <i className={`fa ${submitStatus.type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}`}></i>
                                    {' '}{submitStatus.message}
                                </div>
                            )}

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
                                                placeholder="Your Name"
                                                disabled={isSubmitting}
                                            />
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
                                                placeholder="Your Email"
                                                disabled={isSubmitting}
                                            />
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
                                                type="tel"
                                                name="phone"
                                                className="form-control"
                                                onBlur={(e) => changeHandler(e)}
                                                onChange={(e) => changeHandler(e)}
                                                placeholder="Your Phone No."
                                                disabled={isSubmitting}
                                            />
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
                                                type="text"
                                                name="company"
                                                className="form-control"
                                                onBlur={(e) => changeHandler(e)}
                                                onChange={(e) => changeHandler(e)}
                                                placeholder="Your Company Name"
                                                disabled={isSubmitting}
                                            />
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
                                                name="message"
                                                className="form-control"
                                                placeholder="How can we help you?"
                                                rows="5"
                                                disabled={isSubmitting}>
                                            </textarea>
                                            {validator.message('message', forms.message, 'required')}
                                        </div>
                                        <button 
                                            type="submit" 
                                            className="btn btn-primary"
                                            disabled={isSubmitting}
                                        >
                                            <span className="btn_label" data-text={isSubmitting ? "Sending..." : "Send Request"}>
                                                {isSubmitting ? "Sending..." : "Send Request"}
                                            </span>
                                            <span className="btn_icon">
                                                {isSubmitting ? (
                                                    <i className="fa-solid fa-spinner fa-spin"></i>
                                                ) : (
                                                    <i className="fa-solid fa-arrow-up-right"></i>
                                                )}
                                            </span>
                                        </button>
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
