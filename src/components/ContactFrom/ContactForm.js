import React, { useState } from 'react';

const ContactForm = () => {
    const [forms, setForms] = useState({
        name: '',
        email: '',
        subject: '',
        phone: '',
        message: ''
    });
    
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    // Validation function
    const validateField = (name, value) => {
        switch (name) {
            case 'name':
                if (!value.trim()) return 'Name is required';
                if (!/^[a-zA-Z\s]+$/.test(value)) return 'Name should only contain letters and spaces';
                return '';
            case 'email':
                if (!value.trim()) return 'Email is required';
                if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Please enter a valid email address';
                return '';
            case 'phone':
                if (!value.trim()) return 'Phone is required';
                if (!/^[\+]?[0-9\s\-\(\)]+$/.test(value)) return 'Please enter a valid phone number';
                return '';
            case 'message':
                if (!value.trim()) return 'Message is required';
                return '';
            default:
                return '';
        }
    };

    const changeHandler = (e) => {
        const { name, value } = e.target;
        setForms({ ...forms, [name]: value });
        
        // Validate field and update errors
        const error = validateField(name, value);
        setErrors({ ...errors, [name]: error });
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        
        // Validate all fields
        const newErrors = {};
        Object.keys(forms).forEach(field => {
            if (field !== 'subject') { // subject is optional
                const error = validateField(field, forms[field]);
                if (error) newErrors[field] = error;
            }
        });
        
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }
        
        setIsSubmitting(true);
        setSubmitStatus(null);
        
        try {
            const response = await fetch('https://portfolio-vercel-bi43.vercel.app/api/Contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(forms)
            });
            
            if (response.ok) {
                setSubmitStatus('success');
                setForms({
                    name: '',
                    email: '',
                    subject: '',
                    phone: '',
                    message: ''
                });
                setErrors({});
            } else {
                throw new Error('Failed to send message');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div>
            {/* Status Messages */}
            {submitStatus === 'success' && (
                <div style={{
                    backgroundColor: '#d4edda',
                    color: '#155724',
                    padding: '12px',
                    marginBottom: '20px',
                    border: '1px solid #c3e6cb',
                    borderRadius: '4px'
                }}>
                    Message sent successfully! We'll get back to you soon.
                </div>
            )}
            
            {submitStatus === 'error' && (
                <div style={{
                    backgroundColor: '#f8d7da',
                    color: '#721c24',
                    padding: '12px',
                    marginBottom: '20px',
                    border: '1px solid #f5c6cb',
                    borderRadius: '4px'
                }}>
                    Failed to send message. Please try again.
                </div>
            )}

            <div onSubmit={submitHandler}>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label className="input_title" htmlFor="input_name">Full Name</label>
                            <input
                                value={forms.name}
                                type="text"
                                name="name"
                                className="form-control"
                                onBlur={changeHandler}
                                onChange={changeHandler}
                                placeholder="Goladria Gomez"
                                style={errors.name ? {borderColor: '#dc3545'} : {}}
                            />
                            {errors.name && <div className="errorMessage" style={{color: '#dc3545', fontSize: '14px', marginTop: '5px'}}>{errors.name}</div>}
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
                                onBlur={changeHandler}
                                onChange={changeHandler}
                                placeholder="Techco@example.com"
                                style={errors.email ? {borderColor: '#dc3545'} : {}}
                            />
                            {errors.email && <div className="errorMessage" style={{color: '#dc3545', fontSize: '14px', marginTop: '5px'}}>{errors.email}</div>}
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
                                onBlur={changeHandler}
                                onChange={changeHandler}
                                placeholder="+8250-3560 6565"
                                style={errors.phone ? {borderColor: '#dc3545'} : {}}
                            />
                            {errors.phone && <div className="errorMessage" style={{color: '#dc3545', fontSize: '14px', marginTop: '5px'}}>{errors.phone}</div>}
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-group">
                            <label className="input_title" htmlFor="input_textarea">Message</label>
                            <textarea
                                onBlur={changeHandler}
                                onChange={changeHandler}
                                value={forms.message}
                                type="text"
                                name="message"
                                className="form-control"
                                placeholder="How can we help you?"
                                style={errors.message ? {borderColor: '#dc3545'} : {}}
                            />
                            {errors.message && <div className="errorMessage" style={{color: '#dc3545', fontSize: '14px', marginTop: '5px'}}>{errors.message}</div>}
                        </div>
                        <button 
                            type="button" 
                            className="btn btn-primary"
                            onClick={submitHandler}
                            disabled={isSubmitting}
                            style={isSubmitting ? {opacity: 0.6, cursor: 'not-allowed'} : {}}
                        >
                            <span className="btn_label" data-text={isSubmitting ? "Sending..." : "Send Message"}>
                                {isSubmitting ? "Sending..." : "Send Message"}
                            </span>
                            <span className="btn_icon">
                                <i className="fa-solid fa-arrow-up-right"></i>
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .row {
                    display: flex;
                    flex-wrap: wrap;
                    margin: 0 -15px;
                }
                .col-md-6 {
                    flex: 0 0 50%;
                    max-width: 50%;
                    padding: 0 15px;
                    margin-bottom: 1rem;
                }
                .col-12 {
                    flex: 0 0 100%;
                    max-width: 100%;
                    padding: 0 15px;
                    margin-bottom: 1rem;
                }
                @media (max-width: 768px) {
                    .col-md-6 {
                        flex: 0 0 100%;
                        max-width: 100%;
                    }
                }
                .form-group {
                    margin-bottom: 1rem;
                }
                .input_title {
                    display: block;
                    margin-bottom: 0.5rem;
                    font-weight: 600;
                    color: #333;
                }
                .form-control {
                    display: block;
                    width: 100%;
                    padding: 0.75rem 1rem;
                    font-size: 1rem;
                    line-height: 1.5;
                    color: #495057;
                    background-color: #fff;
                    background-clip: padding-box;
                    border: 1px solid #ced4da;
                    border-radius: 0.25rem;
                    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
                    box-sizing: border-box;
                }
                .form-control:focus {
                    color: #495057;
                    background-color: #fff;
                    border-color: #80bdff;
                    outline: 0;
                    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
                }
                textarea.form-control {
                    min-height: 120px;
                    resize: vertical;
                }
                .btn {
                    display: inline-flex;
                    align-items: center;
                    font-weight: 400;
                    text-align: center;
                    white-space: nowrap;
                    vertical-align: middle;
                    user-select: none;
                    border: 1px solid transparent;
                    padding: 0.75rem 1.5rem;
                    font-size: 1rem;
                    line-height: 1.5;
                    border-radius: 0.25rem;
                    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
                    cursor: pointer;
                    text-decoration: none;
                }
                .btn-primary {
                    color: #fff;
                    background-color: #007bff;
                    border-color: #007bff;
                }
                .btn-primary:hover:not(:disabled) {
                    color: #fff;
                    background-color: #0069d9;
                    border-color: #0062cc;
                }
                .btn_label {
                    margin-right: 0.5rem;
                }
                .btn_icon {
                    font-size: 0.875rem;
                }
                .errorMessage {
                    color: #dc3545;
                    font-size: 0.875rem;
                    margin-top: 0.25rem;
                }
            `}</style>
        </div>
    );
};

export default ContactForm;
