import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Handshake, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO';
import './Clientele.css';

const Clientele = () => {
    // Since we don't have actual logos, we'll use a mix of names and industries
    const clients = [
        { name: 'UltraTech Cement', industry: 'Construction', domain: 'ultratechcement.com' },
        { name: 'Larsen & Toubro', industry: 'Infrastructure', domain: 'larsentoubro.com' },
        { name: 'Tata Projects', industry: 'Engineering', domain: 'tataprojects.com' },
        { name: 'Godrej Properties', industry: 'Real Estate', domain: 'godrejproperties.com' },
        { name: 'Shapoorji Pallonji', industry: 'Construction', domain: 'shapoorjipallonji.com' },
        { name: 'DLF Limited', industry: 'Real Estate', domain: 'dlf.in' },
        { name: 'Jindal Steel', industry: 'Manufacturing', domain: 'jindalsteelpower.com' },
        { name: 'Adani Group', industry: 'Infrastructure', domain: 'adani.com' },
        { name: 'Reliance Infrastructure', industry: 'Power & Infra', domain: 'rinfra.com' },
        { name: 'NCC Limited', industry: 'Construction', domain: 'nccltd.in' },
        { name: 'Afcons', industry: 'Infrastructure', domain: 'afcons.com' },
        { name: 'Essar', industry: 'Steel & Power', domain: 'essar.com' },
    ];

    const sectors = [
        {
            icon: <Building2 size={40} className="text-blue-600" />,
            name: 'Construction & Real Estate',
            desc: 'Supplying high-grade structural steel for commercial and residential landmarks.'
        },
        {
            icon: <Handshake size={40} className="text-blue-600" />,
            name: 'Government Projects',
            desc: 'Trusted partner for public infrastructure, bridges, and highways.'
        },
        {
            icon: <Users size={40} className="text-blue-600" />,
            name: 'Industrial Fabrication',
            desc: 'Raw materials for heavy machinery and industrial sheds.'
        }
    ];

    return (
        <div className="clientele-page">
            <SEO
                title="Our Clientele | Trusted by India's Construction Giants"
                description="We are proud partners to L&T, Tata Projects, UltraTech, and Godrej Properties. See why industry leaders trust AB Enterprises for their steel needs."
            />
            {/* Hero Section */}
            <section className="clientele-hero">
                <div className="clientele-bg"></div>
                <div className="clientele-overlay"></div>

                <div className="container clientele-hero-content">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1>Our Esteemed Clientele</h1>
                        <p>Powering the nation's growth through partnerships built on trust.</p>
                    </motion.div>
                </div>
            </section>

            {/* Clients Grid */}
            <section className="clients-section">
                <div className="container">
                    <div className="section-header">
                        <h2>Trusted by Industry Leaders</h2>
                        <div className="section-divider"></div>
                    </div>

                    <div className="clients-grid">
                        {clients.map((client, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05 }}
                                viewport={{ once: true }}
                                className="client-card"
                                whileHover={{ y: -5, boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
                            >
                                <div className="logo-container">
                                    <img
                                        src={`https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://${client.domain}&size=256`}
                                        alt={`${client.name} logo`}
                                        className="client-logo"
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                            e.target.nextSibling.style.display = 'flex';
                                        }}
                                    />
                                    <div className="fallback-initial">
                                        {client.name.charAt(0)}
                                    </div>
                                </div>
                                <h3 className="client-name">{client.name}</h3>
                                <div style={{ marginTop: 'auto' }}>
                                    <span className="client-industry">
                                        {client.industry}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Sectors */}
            <section className="sectors-section">
                <div className="container">
                    <div className="sectors-grid">
                        {sectors.map((sector, index) => (
                            <div key={index} className="sector-card">
                                <div className="sector-icon-wrapper">
                                    <div className="sector-icon-bg">
                                        {sector.icon}
                                    </div>
                                </div>
                                <h3 className="sector-title">{sector.name}</h3>
                                <p className="sector-desc">{sector.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="cta-section">
                <div className="container">
                    <h2 className="cta-title">Ready to Partner with Us?</h2>
                    <p className="cta-desc">
                        Join our network of satisfied clients and experience the best in steel trading.
                    </p>
                    <Link to="/contact" className="btn btn-primary cta-btn">
                        Get a Quote <ArrowRight size={20} />
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Clientele;
