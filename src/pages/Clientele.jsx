import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Handshake, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

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
        <div style={{ minHeight: '100vh', background: '#f8fafc' }}>
            {/* Hero Section */}
            {/* Hero Section */}
            <section className="page-hero" style={{
                position: 'relative',
                minHeight: '75vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                color: 'white',
                overflow: 'hidden',
                paddingTop: '140px', /* Reduced from 280px to fix gap */
                paddingBottom: '100px'
            }}>
                {/* Background Image with Overlay */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundImage: 'url(/assets/steel_structure.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'brightness(0.4)',
                    zIndex: 0
                }}></div>

                {/* Gradient Gradient for depth */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(to bottom, rgba(15, 23, 42, 0.3), rgba(15, 23, 42, 0.8))',
                    zIndex: 1
                }}></div>

                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 style={{
                            fontSize: '3.5rem',
                            marginBottom: '20px',
                            fontWeight: '800',
                            textShadow: '0 2px 10px rgba(0,0,0,0.3)',
                            letterSpacing: '-1px'
                        }}>
                            Our Esteemed Clientele
                        </h1>
                        <p style={{
                            fontSize: '1.25rem',
                            color: '#e2e8f0',
                            maxWidth: '700px',
                            margin: '0 auto',
                            background: 'rgba(255,255,255,0.1)',
                            backdropFilter: 'blur(10px)',
                            padding: '15px 30px',
                            borderRadius: '50px',
                            border: '1px solid rgba(255,255,255,0.1)'
                        }}>
                            Powering the nation's growth through partnerships built on trust.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Clients Grid */}
            <section style={{ padding: '80px 0' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <h2 style={{ fontSize: '2rem', color: '#1e293b', marginBottom: '15px' }}>Trusted by Industry Leaders</h2>
                        <div style={{ width: '80px', height: '4px', background: '#2563eb', margin: '0 auto', borderRadius: '2px' }}></div>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                        gap: '30px'
                    }}>
                        {clients.map((client, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05 }}
                                viewport={{ once: true }}
                                style={{
                                    background: 'white',
                                    padding: '30px',
                                    borderRadius: '12px',
                                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    textAlign: 'center',
                                    border: '1px solid #e2e8f0',
                                    height: '240px' // Fixed height for consistency
                                }}
                                whileHover={{ y: -5, boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
                            >
                                <div style={{
                                    width: '180px',
                                    height: '100px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginBottom: '20px',
                                    overflow: 'hidden' // Ensure scaled images don't overflow
                                }}>
                                    <img
                                        src={`https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://${client.domain}&size=256`}
                                        alt={`${client.name} logo`}
                                        style={{
                                            maxWidth: '100%',
                                            maxHeight: '100%',
                                            objectFit: 'contain',
                                            transform: 'scale(1.5)' // Zoom in to reduce apparent whitespace
                                        }}
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                            e.target.nextSibling.style.display = 'flex';
                                        }}
                                    />
                                    <div style={{
                                        display: 'none',
                                        width: '80px',
                                        height: '80px',
                                        background: '#eff6ff',
                                        borderRadius: '50%',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: '#2563eb',
                                        fontWeight: 'bold',
                                        fontSize: '2rem'
                                    }}>
                                        {client.name.charAt(0)}
                                    </div>
                                </div>
                                <h3 style={{ fontSize: '1.2rem', color: '#1e293b', marginBottom: '5px' }}>{client.name}</h3>
                                <div style={{ marginTop: 'auto' }}>
                                    <span style={{ fontSize: '0.9rem', color: '#64748b', background: '#f1f5f9', padding: '4px 12px', borderRadius: '20px' }}>
                                        {client.industry}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Sectors */}
            <section style={{ background: 'white', padding: '80px 0' }}>
                <div className="container">
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '40px'
                    }}>
                        {sectors.map((sector, index) => (
                            <div key={index} style={{ textAlign: 'center', padding: '20px' }}>
                                <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>
                                    <div style={{ background: '#eff6ff', padding: '20px', borderRadius: '50%' }}>
                                        {sector.icon}
                                    </div>
                                </div>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '15px', color: '#1e293b' }}>{sector.name}</h3>
                                <p style={{ color: '#64748b', lineHeight: '1.6' }}>{sector.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section style={{ padding: '80px 0', background: '#1e293b', color: 'white', textAlign: 'center' }}>
                <div className="container">
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Ready to Partner with Us?</h2>
                    <p style={{ fontSize: '1.2rem', color: '#94a3b8', marginBottom: '40px', maxWidth: '600px', margin: '0 auto 40px' }}>
                        Join our network of satisfied clients and experience the best in steel trading.
                    </p>
                    <Link to="/contact" className="btn btn-primary" style={{ padding: '15px 40px', fontSize: '1.1rem', display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
                        Get a Quote <ArrowRight size={20} />
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Clientele;
