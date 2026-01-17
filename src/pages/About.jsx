import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Award, TrendingUp, Users, Truck, CheckCircle, Target } from 'lucide-react';
import './About.css';
import SEO from '../components/common/SEO';

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const stats = [
        { label: "Years of Excellence", value: "35+" },
        { label: "Tons of Steel Delivered", value: "1.5M+" },
        { label: "Happy Clients", value: "5000+" },
        { label: "States Covered", value: "12+" }
    ];

    const features = [
        {
            icon: <Truck size={32} />,
            title: "Rocket-Fast Logistics",
            description: "We don't just sell steel; we accelerate your project. With our own fleet and strategic warehousing, we ensure delivery within 24-48 hours across Central India."
        },
        {
            icon: <Award size={32} />,
            title: "Verified Quality",
            description: "Every beam, plate, and pipe that leaves our yard is quality-checked. We partner only with primary producers like SAIL, Jindal, and Tata to guarantee structural integrity."
        },
        {
            icon: <TrendingUp size={32} />,
            title: "Market-Leading Pricing",
            description: "Our massive procurement volume allows us to offer rates that others can't match. We pass the volume benefits directly to our industrial partners."
        }
    ];

    return (
        <div className="about-page">
            {/* Hero Section */}
            <SEO
                title="About Us | 35+ Years in Steel Trading"
                description="Since 1990, AB Enterprises has been a trusted leader in the steel industry. Learn about our legacy, vision, and the team driving India's infrastructure forward."
            />
            <section className="about-hero">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="about-hero-content"
                    >
                        <h1>Forging the Future Since 1990</h1>
                        <p>From a humble trading yard to India's most dynamic steel powerhouse. We are AB Enterprises.</p>
                    </motion.div>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="story-section">
                <div className="container">
                    <div className="story-grid">
                        <div className="story-text">
                            <h2>The AB Legacy</h2>
                            <div className="story-divider"></div>
                            <p className="lead-text">
                                Steel is the backbone of infrastructure. But for us, it's more than just metal—it's a promise of strength.
                            </p>
                            <p>
                                Established over three decades ago, <strong>AB ENTERPRISES</strong> began with a singular vision: to bridge the gap between major steel manufacturers and the industries that build our nation. What started as a small trading outpost in Raipur has evolved into a technological marvel of the steel industry.
                            </p>
                            <p>
                                We realized early on that the steel market was plagued by opacity and delays. We set out to change that. By integrating real-time inventory tracking and transparent pricing, we have revolutionized how steel is bought and sold in India. Today, we are not just traders; we are strategic partners to construction giants, master engineers, and visionary developers.
                            </p>
                        </div>
                        <div className="story-stats">
                            <div className="stats-grid">
                                {stats.map((stat, index) => (
                                    <div key={index} className="stat-card">
                                        <h3>{stat.value}</h3>
                                        <p>{stat.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Leadership Section */}
            <section className="leadership-section">
                <div className="container">
                    <div className="section-header">
                        <h2>Meet The Visionaries</h2>
                        <p>The minds driving the revolution.</p>
                    </div>

                    <div className="leaders-grid">
                        {/* Director 1 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="leader-card"
                        >
                            <div className="leader-img-container">
                                <img src="/team/aditya.png" alt="Aditya Agrawal" />
                            </div>
                            <div className="leader-info">
                                <h3>Aditya Agrawal</h3>
                                <span className="designation">Director</span>
                                <p>
                                    The architect of our digital transformation. Aditya combines deep industry knowledge with a tech-forward approach, ensuring AB Enterprises stays ahead of the curve in a rapidly evolving market. His focus is on customer experience and operational speed.
                                </p>
                            </div>
                        </motion.div>

                        {/* Director 2 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="leader-card"
                        >
                            <div className="leader-img-container">
                                <img src="/team/bhaskar.png" alt="Bhaskar Agrawal" />
                            </div>
                            <div className="leader-info">
                                <h3>Bhaskar Agrawal</h3>
                                <span className="designation">Director</span>
                                <p>
                                    With decades of hands-on experience, Bhaskar represents the trust and reliability that the industry relies on. His expertise in sourcing and supply chain management ensures that we never fail a delivery promise. He is the backbone of our integrity.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Vision/Mission Banner */}
            <section className="vision-banner">
                <div className="container">
                    <div className="vision-content">
                        <Target className="vision-icon" size={48} />
                        <h2>Our Mission</h2>
                        <p>"To simple trade? No. To empower every builder in India with instant access to world-class steel, eliminating the friction of logistics and pricing opacity."</p>
                    </div>
                </div>
            </section>

            {/* Why Us Section */}
            <section className="why-us-section">
                <div className="container">
                    <div className="section-header">
                        <h2>Why Industrial Leaders Choose Us</h2>
                    </div>
                    <div className="features-grid">
                        {features.map((feature, index) => (
                            <div key={index} className="feature-card">
                                <div className="feature-icon">{feature.icon}</div>
                                <h3>{feature.title}</h3>
                                <p>{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
};

export default About;
