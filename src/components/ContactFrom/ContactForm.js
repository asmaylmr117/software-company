import React, { useState } from 'react'
import SimpleReactValidator from 'simple-react-validator';
import { apiClient } from '../../api/axiosConfig';

const ContactForm = (props) => {

    const [status, setStatus] = useState(null);
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
                    subject: forms.subject || 'Project Inquiry',
                    phone: forms.phone,
                    company: '',
                    message: forms.message
                });
                setStatus('success');
                setForms({
                    name: '',
                    email: '',
                    subject: '',
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
        <form onSubmit={(e) => submitHandler(e)}>
            <div className="row">
                <div className="col-md-6">
                    <div className="form-group">
                        <label className="input_title" htmlFor="input_name">Full Name
                        </label>
                        <input
                            value={forms.name}
                            type="text"
                            name="name"
                            className="form-control"
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            placeholder="Goladria Gomez" />
                        {validator.message('name', forms.name, 'required|alpha_space')}
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <label className="input_title" htmlFor="input_email">Your Email
                        </label>
                        <input
                            value={forms.email}
                            type="email"
                            name="email"
                            className="form-control"
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            placeholder="Techco@example.com" />
                        {validator.message('email', forms.email, 'required|email')}
                    </div>
                </div>
                <div className="col-12">
                    <div className="form-group">
                        <label className="input_title" htmlFor="input_phone">Your Phone</label>
                        <input
                            value={forms.phone}
                            type="phone"
                            name="phone"
                            className="form-control"
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            placeholder="+8250-3560 6565" />
                        {validator.message('phone', forms.phone, 'required|phone')}
                    </div>
                </div>
                <div className="col-12">
                    <div className="form-group">
                        <label className="input_title" htmlFor="input_textarea">Message</label>
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
                        <span className="btn_label" data-text={status === 'loading' ? 'Sending...' : 'Send Message'}>{status === 'loading' ? 'Sending...' : 'Send Message'}</span>
                        <span className="btn_icon">
                            <i className="fa-solid fa-arrow-up-right"></i>
                        </span>
                    </button>
                    {status === 'success' && <div className="alert alert-success mt-3" role="alert">Your message was sent successfully!</div>}
                    {status === 'error' && <div className="alert alert-danger mt-3" role="alert">Failed to send message. Please try again.</div>}
                </div>
            </div>
        </form>
    )
}

export default ContactForm;