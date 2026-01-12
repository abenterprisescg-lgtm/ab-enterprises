import React, { useEffect } from 'react';
import ContactInfo from '../components/contact/ContactInfo';
import ContactForm from '../components/contact/ContactForm';
import './Contact.css';

const Contact = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="contact-page">
            {/* Mini Hero */}
            <section className="contact-hero">
                <div className="container">
                    <div className="hero-content">
                        <h1>Contact Us</h1>
                        <p>Ready to build? We're here to supply the steel you need.</p>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="contact-split-section">
                <div className="container contact-grid">
                    <ContactInfo />
                    <ContactForm />
                </div>
            </section>

            {/* Map Embed Section - Full Width */}
            <section className="map-section">
                <iframe
                    title="AB Enterprises Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14876.196328325608!2d81.6033783!3d21.2303726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28dda23be2a929%3A0x12759e6c0c203730!2sRawabhata%20Industrial%20Area%2C%20Raipur%2C%20Chhattisgarh%20493221!5e0!3m2!1sen!2sin!4v1709664283123!5m2!1sen!2sin"
                    width="100%"
                    height="450"
                    style={{ border: 0, filter: 'grayscale(100%) invert(0%)' }} // Industrial grey aesthetic
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </section>
        </div>
    );
};

export default Contact;
