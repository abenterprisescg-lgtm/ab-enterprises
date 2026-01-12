import React from 'react';

const Terms = () => {
    return (
        <div style={{ minHeight: '80vh', background: '#fff' }}>
            <section className="page-hero">
                <div className="container">
                    <h1>Terms & Privacy</h1>
                    <p>Transparency and trust are at the core of our business.</p>
                </div>
            </section>

            <div className="container" style={{ maxWidth: '800px', margin: '0 auto', paddingBottom: '80px' }}>

                <section style={{ marginBottom: '40px' }}>
                    <h2 style={{ color: '#334155', marginBottom: '15px' }}>Privacy Policy</h2>
                    <p style={{ color: '#475569', lineHeight: '1.6', marginBottom: '15px' }}>
                        At AB Enterprises, we value your privacy. This policy outlines how we handle your personal information.
                        We only collect information necessary to provide our services, such as contact details when you request a quote.
                    </p>
                    <p style={{ color: '#475569', lineHeight: '1.6' }}>
                        We do not share your personal data with third parties for marketing purposes. Your data is used strictly for business communications and order processing.
                    </p>
                </section>

                <section style={{ marginBottom: '40px' }}>
                    <h2 style={{ color: '#334155', marginBottom: '15px' }}>Terms of Service</h2>
                    <p style={{ color: '#475569', lineHeight: '1.6', marginBottom: '15px' }}>
                        By accessing this website, you agree to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.
                    </p>
                    <p style={{ color: '#475569', lineHeight: '1.6', marginBottom: '10px' }}>
                        <strong>1. Quotes & Pricing:</strong> All prices mentioned or quoted are subject to market fluctuation and validity periods specified in the formal quotation.
                    </p>
                    <p style={{ color: '#475569', lineHeight: '1.6', marginBottom: '10px' }}>
                        <strong>2. Delivery:</strong> Delivery timelines are estimates and subject to logical availability.
                    </p>
                </section>

                <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginTop: '60px' }}>
                    Last updated: January 2026
                </p>
            </div>
        </div>
    );
};

export default Terms;
