import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Send } from 'lucide-react';

const Careers = () => {
    return (
        <div style={{ minHeight: '80vh', background: '#f8fafc' }}>
            <section className="page-hero">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <h1>Join Our Team</h1>
                        <p>Build your career with India's most trusted steel trading partner.</p>
                    </motion.div>
                </div>
            </section>

            <div className="container" style={{ maxWidth: '800px', margin: '0 auto', paddingBottom: '80px' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <div style={{ background: 'white', padding: '40px', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '30px' }}>
                            <div style={{ background: '#e2e8f0', padding: '12px', borderRadius: '8px' }}>
                                <Briefcase size={24} color="#334155" />
                            </div>
                            <div>
                                <h3 style={{ margin: 0, color: '#334155' }}>Current Openings</h3>
                                <span style={{ color: '#64748b', fontSize: '0.9rem' }}>Updated: Jan 2026</span>
                            </div>
                        </div>

                        <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '20px' }}>
                            <p style={{ marginBottom: '20px' }}>
                                We currently do not have any specific open positions listed online, but we are always open to connecting with talented Sales Executives and Logistics Managers.
                            </p>
                            <p>
                                If you believe you can add value to AB Enterprises, please drop your CV at:
                            </p>
                            <a href="mailto:careers@abent.in" style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '8px',
                                color: '#2563eb',
                                fontWeight: '600',
                                textDecoration: 'none',
                                fontSize: '1.1rem'
                            }}>
                                <Send size={18} /> careers@abent.in
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Careers;
