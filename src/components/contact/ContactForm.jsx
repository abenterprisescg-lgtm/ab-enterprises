import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import './ContactForm.css';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        email: '',
        phone: '',
        product: 'General Inquiry',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch("https://formsubmit.co/ajax/ab.enterprises.cg@gmail.com", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    ...formData,
                    _subject: `New Inquiry from ${formData.name}`,
                    _template: 'table'
                })
            });

            const result = await response.json();

            if (response.ok) {
                setIsSubmitting(false);
                setIsSubmitted(true);
                setFormData({
                    name: '',
                    company: '',
                    email: '',
                    phone: '',
                    product: 'General Inquiry',
                    message: ''
                });
            } else {
                alert("Something went wrong. Please try again or contact us on WhatsApp.");
                setIsSubmitting(false);
            }
        } catch (error) {
            console.error("Form Error:", error);
            alert("Connection error. Please check your internet or contact us directly.");
            setIsSubmitting(false);
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    if (isSubmitted) {
        return (
            <div className="contact-form-success">
                <CheckCircle size={64} color="#10B981" />
                <h3>Message Sent Successfully!</h3>
                <p>Thank you for reaching out to AB ENTERPRISES. Our sales team will review your inquiry and get back to you within 2 hours.</p>
                <button
                    className="btn btn-primary"
                    onClick={() => setIsSubmitted(false)}
                    style={{ marginTop: '20px' }}
                >
                    Send Another Message
                </button>
            </div>
        );
    }

    return (
        <div className="contact-form-container">
            <h3>Send us a Message</h3>
            <p>Have a question about our steel inventory or pricing? Fill out the form below.</p>

            <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                    <div className="form-group">
                        <label>Full Name</label>
                        <input
                            type="text"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your name"
                        />
                    </div>
                    <div className="form-group">
                        <label>Company Name</label>
                        <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="e.g. Metro Build"
                        />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label>Email Address</label>
                        <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="name@company.com"
                        />
                    </div>
                    <div className="form-group">
                        <label>Phone Number</label>
                        <input
                            type="tel"
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+91 XXXXX XXXXX"
                        />
                    </div>
                </div>

                <div className="form-group">
                    <label>Interested Product</label>
                    <select
                        name="product"
                        value={formData.product}
                        onChange={handleChange}
                    >
                        <option>General Inquiry</option>
                        <option>Mild Steel Angles</option>
                        <option>Channels & Beams</option>
                        <option>TMT Bars</option>
                        <option>Pipes & Tubes</option>
                        <option>Plates & Sheets</option>
                        <option>Wire Rods</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Message / Requirements</label>
                    <textarea
                        name="message"
                        rows="5"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Please specify grades, quantities, or any specific questions..."
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="btn btn-primary submit-btn"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? 'Sending...' : (
                        <>Send Message <Send size={18} /></>
                    )}
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
