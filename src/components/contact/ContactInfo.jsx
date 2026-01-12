import React from 'react';
import { MapPin, Phone, Mail, Clock, ExternalLink, Facebook, Linkedin, Instagram, Twitter } from 'lucide-react';
import './ContactInfo.css';

const ContactInfo = () => {
    return (
        <div className="contact-info">
            <div className="info-header">
                <h3>Get in Touch</h3>
                <p>Visit our yard or contact our sales team for instant quotes.</p>
            </div>

            <div className="info-grid">
                <div className="info-card">
                    <div className="icon-box">
                        <MapPin size={24} />
                    </div>
                    <div>
                        <h4>Head Office & Yard</h4>
                        <p>KH No.721/1, Rawabhata</p>
                        <p>Near Industrial Area, Raipur</p>
                        <p>Chhattisgarh - 493221</p>
                        <a
                            href="https://maps.app.goo.gl/THY8YeGtnp4fjH246"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="map-link"
                        >
                            View on Google Maps <ExternalLink size={14} />
                        </a>
                    </div>
                </div>

                <div className="info-card">
                    <div className="icon-box">
                        <Phone size={24} />
                    </div>
                    <div>
                        <h4>Phone Support</h4>
                        <div className="contact-row">
                            <span className="label">Sales:</span>
                            <a href="tel:+919111880444">+91 91118 80444</a>
                        </div>
                        <div className="contact-row">
                            <span className="label">Support:</span>
                            <a href="tel:+917089030444">+91 70890 30444</a>
                        </div>
                    </div>
                </div>

                <div className="info-card">
                    <div className="icon-box">
                        <Mail size={24} />
                    </div>
                    <div>
                        <h4>Email Us</h4>
                        <a href="mailto:sales@abent.in" className="primary-link">sales@abent.in</a>
                        <p className="sub-text">We verify all B2B inquiries within 2 hours.</p>
                    </div>
                </div>

                <div className="info-card">
                    <div className="icon-box">
                        <Clock size={24} />
                    </div>
                    <div>
                        <h4>Working Hours</h4>
                        <p>Monday - Saturday</p>
                        <p className="highlight">8:00 AM - 8:00 PM</p>
                        <p className="sub-text">Closed on Sundays</p>
                    </div>
                </div>
            </div>

            <div className="social-connect">
                <h4>Connect With Us</h4>
                <div className="social-links">
                    <a href="#" className="social-btn"><Linkedin size={20} /></a>
                    <a href="#" className="social-btn"><Facebook size={20} /></a>
                    <a href="#" className="social-btn"><Twitter size={20} /></a>
                    <a href="#" className="social-btn"><Instagram size={20} /></a>
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;
