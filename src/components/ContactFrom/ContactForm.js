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
    const validateForm = () => {
        const newErrors = {};
        
        if (!forms.name.trim()) {
            newErrors.name = 'Name is required';
        } else if (!/^[a-zA-Z\s]+$/.test(forms.name)) {
            newErrors.name = 'Name should only contain letters and spaces';
        }
        
        if (!forms.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(forms.email)) {
            newErrors.email = 'Please enter a valid email address';
        }
        
        if (!forms.phone.trim()) {
            newErrors.phone = 'Phone number is required';
        } else if (!/^[\+]?[0-9\s\-\(\)]+$/.test(forms.phone)) {
            newErrors.phone = 'Please enter a valid phone number';
        }
        
        if (!forms.message.trim()) {
            newErrors.message = 'Message is required';
        }
        
        return newErrors;
    };

    const changeHandler = (e) => {
        const { name, value } = e.target;
        setForms({ ...forms, [name]: value });
        
        // Clear error for this field if it exists
        if (errors[name]) {
            setErrors({ ...errors, [name]: '' });
        }
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        
        const formErrors = validateForm();
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
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
        <div className="max-w-4xl mx-auto p-6">
            <div className="space-y-6">
                {submitStatus === 'success' && (
                    <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-md">
                        Message sent successfully! We'll get back to you soon.
                    </div>
                )}
                
                {submitStatus === 'error' && (
                    <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-md">
                        Failed to send message. Please try again.
                    </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Full Name
                        </label>
                        <input
                            value={forms.name}
                            type="text"
                            name="name"
                            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                                errors.name ? 'border-red-500' : 'border-gray-300'
                            }`}
                            onChange={changeHandler}
                            placeholder="Goladria Gomez"
                        />
                        {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Your Email
                        </label>
                        <input
                            value={forms.email}
                            type="email"
                            name="email"
                            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                                errors.email ? 'border-red-500' : 'border-gray-300'
                            }`}
                            onChange={changeHandler}
                            placeholder="techco@example.com"
                        />
                        {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Subject
                    </label>
                    <input
                        value={forms.subject}
                        type="text"
                        name="subject"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onChange={changeHandler}
                        placeholder="What's this about?"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Your Phone
                    </label>
                    <input
                        value={forms.phone}
                        type="tel"
                        name="phone"
                        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                            errors.phone ? 'border-red-500' : 'border-gray-300'
                        }`}
                        onChange={changeHandler}
                        placeholder="+8250-3560 6565"
                    />
                    {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message
                    </label>
                    <textarea
                        onChange={changeHandler}
                        value={forms.message}
                        name="message"
                        rows="5"
                        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                            errors.message ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="How can we help you?"
                    />
                    {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
                </div>

                <div>
                    <button 
                        type="button" 
                        onClick={submitHandler}
                        disabled={isSubmitting}
                        className={`inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white ${
                            isSubmitting 
                                ? 'bg-gray-400 cursor-not-allowed' 
                                : 'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
                        } transition duration-150 ease-in-out`}
                    >
                        {isSubmitting ? (
                            <>
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Sending...
                            </>
                        ) : (
                            <>
                                Send Message
                                <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
