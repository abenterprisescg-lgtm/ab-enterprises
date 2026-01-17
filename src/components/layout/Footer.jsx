import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Linkedin, Youtube, Mail, MapPin, Phone } from 'lucide-react';
import Logo from '../common/Logo';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-grid">
                <div className="footer-brand">
                    <div style={{ marginBottom: '20px' }}>
                        <Logo light={true} />
                    </div>
                    <p>India's Most Trusted Steel Trading Partner. Transforming the industry with reliability and speed.</p>
                    <div className="social-icons">
                        <a href="#"><Linkedin size={20} /></a>
                        <a href="#"><Youtube size={20} /></a>
                        <a href="#"><Facebook size={20} /></a>
                    </div>
                </div>

                <div className="footer-links">
                    <h4>Products</h4>
                    <ul>
                        <li><Link to="/products" state={{ search: 'Angle', tab: 'finished' }}>Angle & Channels</Link></li>
                        <li><Link to="/products" state={{ search: 'TMT', tab: 'finished' }}>TMT Bars</Link></li>
                        <li><Link to="/products" state={{ search: 'Pipe', tab: 'finished' }}>Pipes & Tubes</Link></li>
                        <li><Link to="/products" state={{ search: 'Plate', tab: 'finished' }}>Plates & Sheets</Link></li>
                        <li><Link to="/products" state={{ search: 'Beam', tab: 'finished' }}>Construction Steel</Link></li>
                    </ul>
                </div>

                <div className="footer-links">
                    <h4>Company</h4>
                    <ul>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/clientele">Clientele</Link></li>
                        <li><Link to="/news">News & Insights</Link></li>
                        <li><Link to="/careers">Careers</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/terms">Terms & Privacy</Link></li>
                    </ul>
                </div>

                <div className="footer-contact">
                    <h4>Contact Us</h4>
                    <div className="contact-item">
                        <MapPin size={18} />
                        <span>KH No.721/1, Rawabhata, Near Industrial Area, Raipur C.G 493221</span>
                    </div>
                    <div className="contact-item">
                        <Phone size={18} />
                        <span>+91 91118 80444</span>
                    </div>
                    <div className="contact-item">
                        <Mail size={18} />
                        <span>sales@ab-enterprises.co</span>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <p>&copy; 2026 AB ENTERPRISES. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
