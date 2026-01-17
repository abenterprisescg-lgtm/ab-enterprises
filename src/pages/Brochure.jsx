import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Printer, Phone, Mail, Globe, MapPin, Anchor, Box, Layers, Zap } from 'lucide-react';
import './Brochure.css';
import Logo from '../components/common/Logo';
import SEO from '../components/common/SEO';

// Product Data for Showcase
const rawMaterials = [
    { name: "Mild Steel Ingot", image: "/products/ingot.png", desc: "Standard pencil ingots for rolling." },
    { name: "Mild Steel Billet", image: "/products/billet.jpg", desc: "Continuous Cast (CC) for structural manufacturing." },
    { name: "Sponge Iron", image: "/products/sponge_iron.jpg", desc: "High metallization coal-based DRI." },
    { name: "Industrial Coal", image: "/products/coal.jpg", desc: "Premium South African & Indian Thermal Coal." },
    { name: "Foundry Pig Iron", image: "/products/pig_iron.jpg", desc: "Low phos/sulfur grade for castings." },
    { name: "Iron Ore", image: "/products/iron_ore.jpg", desc: "Hematite Lumps & Fines from top mines." },
];

const Brochure = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const fadeInUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
    };

    return (
        <div className="brochure-page">
            <SEO
                title="Company Brochure | AB Enterprises"
                description="Download the AB Enterprises digital brochure. Explore our full range of products, services, and our journey of 35+ years in the steel industry."
            />
            {/* === 1. Cover Section === */}
            <section className="brochure-section brochure-cover">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="brochure-container cover-content"
                >
                    <div className="cover-logo">
                        <Logo light={true} />
                    </div>
                    <h1 className="cover-title">Forging<br />The Future</h1>
                    <p className="cover-subtitle">India's Premier Steel Trading Partner</p>
                    <div className="est-badge">EST. 1990</div>
                </motion.div>
            </section>

            {/* === 2. Story & Stats === */}
            <section className="brochure-section brochure-story">
                <div className="brochure-container">
                    <div className="story-grid">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="story-content"
                        >
                            <h2>More Than Just Metal</h2>
                            <p className="story-lead">
                                "To simply trade? No. We exist to empower every builder in India with instant access to world-class steel, eliminating the friction of logistics and pricing opacity."
                            </p>
                            <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>
                                From a humble trading yard in Raipur established over three decades ago, AB Enterprises has evolved into a strategic backbone for the nation's infrastructure. We bridge the gap between giants like SAIL, Jindal, and Tata, and the visionaries building our future.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="story-stats"
                        >
                            <div className="stats-row">
                                <div className="stat-item">
                                    <span className="stat-number">35+</span>
                                    <span className="stat-label">Years of Trust</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-number">1.5M+</span>
                                    <span className="stat-label">Tons Delivered</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-number">24h</span>
                                    <span className="stat-label">Express Delivery</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-number">5k+</span>
                                    <span className="stat-label">Happy Clients</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* === 3. Visual Showcase (Raw Materials) === */}
            <section className="brochure-section brochure-showcase">
                <div className="brochure-container">
                    <div className="section-header">
                        <h2>Industrial Raw Materials</h2>
                        <p>The foundation of every great structure begins here. Sourced from the finest mines and manufacturers.</p>
                    </div>

                    <div className="product-gallery">
                        {rawMaterials.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="gallery-card"
                            >
                                <div className="card-image">
                                    <img src={item.image} alt={item.name} />
                                </div>
                                <div className="card-overlay">
                                    <h3>{item.name}</h3>
                                    <p>{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* === 4. Finished Steel (List Style) === */}
            <section className="brochure-section" style={{ background: '#0f172a' }}>
                <div className="brochure-container">
                    <div className="section-header">
                        <h2>Finished Steel Collection</h2>
                        <p>Precision-engineered components for modern construction.</p>
                    </div>

                    <div className="story-grid" style={{ alignItems: 'start' }}>
                        <div className="gallery-card" style={{ padding: '30px', border: '1px solid #334155' }}>
                            <h3 style={{ color: '#ea580c', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <Layers /> Structural Steel
                            </h3>
                            <ul style={{ listStyle: 'none', padding: 0, color: '#e2e8f0', lineHeight: '2' }}>
                                <li>• Heavy Beams (ISMB / NPB)</li>
                                <li>• Channels (ISMC)</li>
                                <li>• Angles & Joists</li>
                                <li>• MS Plates & Chequered Plates</li>
                            </ul>
                        </div>

                        <div className="gallery-card" style={{ padding: '30px', border: '1px solid #334155' }}>
                            <h3 style={{ color: '#ea580c', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <Anchor /> Reinforcement & Pipe
                            </h3>
                            <ul style={{ listStyle: 'none', padding: 0, color: '#e2e8f0', lineHeight: '2' }}>
                                <li>• TMT Bars (Fe 550D)</li>
                                <li>• MS Pipes (Round, Square)</li>
                                <li>• Wire Rods & HB Wires</li>
                                <li>• Binding Wires</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* === 5. Back Cover / Contact === */}
            <section className="brochure-section brochure-back">
                <div className="brochure-container">
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        className="contact-card-premium"
                    >
                        <h2 style={{ fontSize: '3rem', marginBottom: '10px', color: '#fff' }}>AB ENTERPRISES</h2>
                        <p style={{ color: '#f59e0b', fontSize: '1.2rem', marginBottom: '40px' }}>YOUR PARTNER IN PROGRESS</p>

                        <div className="contact-info-large">
                            <p><MapPin className="icon-gold" /> KH No.721/1, Rawabhata, Near Industrial Area, Raipur, CG</p>
                            <p><Phone className="icon-gold" /> +91 91118 80444</p>
                            <p><Mail className="icon-gold" /> sales@ab-enterprises.co</p>
                            <p><Mail className="icon-gold" /> support@ab-enterprises.co</p>
                            <p><Globe className="icon-gold" /> www.abenterprises.in</p>
                        </div>

                        <div className="print-action">
                            <button onClick={() => window.print()} className="print-btn-premium">
                                <Printer size={16} /> Download Digital Brochure
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Brochure;
