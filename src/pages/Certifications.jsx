import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, CheckCircle } from 'lucide-react';
import './Certifications.css';

const Certifications = () => {
    const certs = [
        {
            id: 1,
            title: "ISO 9001:2015 Certified",
            issuer: "International Organization for Standardization",
            description: "Certified Quality Management System for Trading and Export of Steel Products.",
            image: "/cert_iso_ab.webp",
            icon: <ShieldCheck size={32} />
        },
        {
            id: 2,
            title: "Authorized Dealer",
            issuer: "Ganpati Ispat Pvt Ltd",
            description: "Official authorized dealer for Ganpati Ispat steel products across the region.",
            image: "/cert_ganpati_dealer.webp",
            icon: <Award size={32} />
        },
        {
            id: 3,
            title: "Authorized Distributor",
            issuer: "Sindh Ispat",
            description: "Premium authorized distributor partner for Sindh Ispat structural steel.",
            image: "/cert_sindh_distributor.webp",
            icon: <CheckCircle size={32} />
        }
    ];

    return (
        <div className="certifications-page">
            <section className="cert-hero">
                <div className="container">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        Accreditations & Partners
                    </motion.h1>
                    <p>Recognized for quality, trust, and authorized excellence.</p>
                </div>
            </section>

            <section className="cert-grid container">
                {certs.map((cert) => (
                    <motion.div
                        key={cert.id}
                        className="cert-card"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <div className="cert-image-wrapper">
                            <img src={cert.image} alt={cert.title} />
                            <div className="cert-overlay">
                                <button className="view-btn">View Certificate</button>
                            </div>
                        </div>
                        <div className="cert-content">
                            <div className="cert-header">
                                <div className="cert-icon">{cert.icon}</div>
                                <div>
                                    <h3>{cert.title}</h3>
                                    <span className="issuer">{cert.issuer}</span>
                                </div>
                            </div>
                            <p>{cert.description}</p>
                        </div>
                    </motion.div>
                ))}
            </section>
        </div>
    );
};

export default Certifications;
