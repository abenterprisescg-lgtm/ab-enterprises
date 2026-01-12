import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown, Search, Phone } from 'lucide-react';
import Logo from '../common/Logo';
import SearchOverlay from './SearchOverlay';
import './Header.css';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Products', path: '/products' },
        { name: 'Services', path: '/services' },
        { name: 'About', path: '/about' },
        { name: 'Clientele', path: '/clientele' },
        { name: 'Contact', path: '/contact' },
    ];

    // Pages that have a dark hero section where transparency works
    const transparentHeaderPages = ['/', '/products', '/about', '/services', '/contact', '/careers', '/terms', '/clientele'];
    const isTransparentPage = transparentHeaderPages.includes(location.pathname);

    return (
        <header className={`header ${isScrolled || !isTransparentPage ? 'scrolled' : ''}`}>
            <div className="container header-content">
                <Link to="/" className="brand">
                    <Logo light={true} />
                </Link>

                {/* Desktop Nav */}
                <nav className="desktop-nav">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                <div className="header-actions">
                    <button
                        className="search-btn"
                        onClick={() => setIsSearchOpen(true)}
                    >
                        <Search size={20} />
                    </button>
                    <button
                        className="btn btn-primary quote-btn"
                        onClick={() => navigate('/contact')}
                    >
                        Get Quote
                    </button>
                    <button className="mobile-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            {isMobileMenuOpen && (
                <div className="mobile-menu">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className="mobile-link"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <button
                        className="btn btn-primary mobile-quote-btn"
                        onClick={() => {
                            navigate('/contact');
                            setIsMobileMenuOpen(false);
                        }}
                    >
                        Get Quote
                    </button>
                </div>
            )}

            <SearchOverlay
                isOpen={isSearchOpen}
                onClose={() => setIsSearchOpen(false)}
            />
        </header>
    );
};

export default Header;
