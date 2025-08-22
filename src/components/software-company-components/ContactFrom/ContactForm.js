import React, { useState } from 'react'
import SimpleReactValidator from 'simple-react-validator';

const ContactForm = (props) => {
    const [forms, setForms] = useState({
        name: '',
        email: '',
        subject: '',
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
                        subject: forms.subject,
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
                        subject: '',
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
                    message: error.message || 'An error occurred while sending your message. Please try again.'
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
        <div>
            {/* Status Message */}
            {submitStatus && (
                <div className={`alert ${submitStatus.type === 'success' ? 'alert-success' : 'alert-danger'} mb-3`} 
                     style={{
                         padding: '10px 15px',
                         borderRadius: '5px',
                         border: `1px solid ${submitStatus.type === 'success' ? '#d4edda' : '#f8d7da'}`,
                         backgroundColor: submitStatus.type === 'success' ? '#d1ecf1' : '#f8d7da',
                         color: submitStatus.type === 'success' ? '#155724' : '#721c24'
                     }}>
                    <i className={`fa ${submitStatus.type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}`}></i>
                    {' '}{submitStatus.message}
                </div>
            )}

            <form onSubmit={(e) => submitHandler(e)}>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label className="input_title" htmlFor="input_name">Full Name</label>
                            <input
                                value={forms.name}
                                type="text"
                                name="name"
                                className="form-control"
                                onBlur={(e) => changeHandler(e)}
                                onChange={(e) => changeHandler(e)}
                                placeholder="Goladria Gomez"
                                disabled={isSubmitting}
                            />
                            {validator.message('name', forms.name, 'required|alpha_space')}
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label className="input_title" htmlFor="input_email">Your Email</label>
                            <input
                                value={forms.email}
                                type="email"
                                name="email"
                                className="form-control"
                                onBlur={(e) => changeHandler(e)}
                                onChange={(e) => changeHandler(e)}
                                placeholder="Techco@example.com"
                                disabled={isSubmitting}
                            />
                            {validator.message('email', forms.email, 'required|email')}
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-group">
                            <label className="input_title" htmlFor="input_phone">Your Phone</label>
                            <input
                                value={forms.phone}
                                type="tel"
                                name="phone"
                                className="form-control"
                                onBlur={(e) => changeHandler(e)}
                                onChange={(e) => changeHandler(e)}
                                placeholder="+8250-3560 6565"
                                disabled={isSubmitting}
                            />
                            {validator.message('phone', forms.phone, 'required|phone')}
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-group">
                            <label className="input_title" htmlFor="input_subject">Subject (Optional)</label>
                            <input
                                value={forms.subject}
                                type="text"
                                name="subject"
                                className="form-control"
                                onBlur={(e) => changeHandler(e)}
                                onChange={(e) => changeHandler(e)}
                                placeholder="Subject of your message"
                                disabled={isSubmitting}
                            />
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-group">
                            <label className="input_title" htmlFor="input_textarea">Message</label>
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
                            <span className="btn_label" data-text={isSubmitting ? "Sending..." : "Send Message"}>
                                {isSubmitting ? "Sending..." : "Send Message"}
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
    )
}

export default ContactForm;
