import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Box, ShieldCheck, Clock, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import HeroVideo from './HeroVideo';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <HeroVideo />
            <div className="hero-content container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="hero-text"
                >
                    <span className="hero-badge">ISO 9001:2015 Certified</span>
                    <h1>India’s Most Trusted <br /> <span className="text-highlight">Steel Trading Partner</span></h1>
                    <p>
                        India’s Largest Inventory of Angle, Channel, TMT, Pipes, Plates & More.
                        Delivering quality steel with speed and reliability since 2015.
                    </p>

                    <div className="hero-actions">
                        <Link to="/contact" className="btn btn-primary">
                            Get Instant Quote <ArrowRight size={18} style={{ marginLeft: '8px' }} />
                        </Link>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="trust-strip"
                >
                    <div className="trust-item">
                        <ShieldCheck size={24} className="trust-icon" />
                        <div>
                            <h4>Verified Supplier</h4>
                            <span>100% Quality Check</span>
                        </div>
                    </div>
                    <div className="trust-item">
                        <Clock size={24} className="trust-icon" />
                        <div>
                            <h4>Fast Delivery</h4>
                            <span>Pan-India Logistics</span>
                        </div>
                    </div>
                    <div className="trust-item">
                        <TrendingUp size={24} className="trust-icon" />
                        <div>
                            <h4>Best Price</h4>
                            <span>Direct Mill Rates</span>
                        </div>
                    </div>
                    <div className="trust-item">
                        <Box size={24} className="trust-icon" />
                        <div>
                            <h4>Huge Stock</h4>
                            <span>Ready Inventory</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
