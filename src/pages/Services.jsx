import React, { useEffect } from 'react';
import { Truck, Scissors, FileCheck, HardHat, TrendingUp, ShieldCheck } from 'lucide-react';
import './Services.css';
import SEO from '../components/common/SEO';

const Services = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const services = [
        {
            icon: <Truck size={40} />,
            title: "Precision Logistics",
            description: "We don't promise impossible timelines; we promise accurate ones. Tell us your location, and we'll calculate the exact delivery window, ensuring your project timeline never slips."
        },
        {
            icon: <Scissors size={40} />,
            title: "Custom Sizing & Processing",
            description: "No two projects are alike. Whether you need specific lengths of beams or customized cutting for plates, our processing unit tailors materials to your exact specifications."
        },
        {
            icon: <FileCheck size={40} />,
            title: "Certified Quality Assurance",
            description: "Trust is good, proof is better. Every dispatch is accompanied by original Manufacturer Test Certificates (MTC), guaranteeing the chemical and physical properties of your steel."
        },
        {
            icon: <HardHat size={40} />,
            title: "Project Consultation",
            description: "Over-ordering kills budgets; under-ordering kills deadlines. Our experts help you estimate exact steel requirements based on your structural drawings, optimizing your procurement."
        },
        {
            icon: <TrendingUp size={40} />,
            title: "Wholesale Pricing Advantage",
            description: "We operate on a transparent, high-volume model. By eliminating credit costs and third-party delays, we offer the most competitive direct-payment rates in the market."
        },
        {
            icon: <ShieldCheck size={40} />,
            title: "Verified Inventory",
            description: "What you see is what you get. Our digital inventory reflects real physical stock, ensuring that when you book an order, the material is actually reserved for you."
        }
    ];

    return (
        <div className="services-page">
            {/* Hero Section */}
            <SEO
                title="Steel Processing & Logistics Services"
                description="Beyond trading, we offer precision logistics, custom sizing, and quality assurance. Discover how we add value to your steel supply chain."
            />
            <section className="services-hero">
                <div className="container">
                    <div className="services-hero-content">
                        <h1>Beyond Trading. We Deliver Solutions.</h1>
                        <p>Steel is a commodity. Service is our currency. Discover how AB Enterprises adds value to every ton.</p>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="services-grid-section">
                <div className="container">
                    <div className="services-grid">
                        {services.map((service, index) => (
                            <div key={index} className="service-card">
                                <div className="service-icon-wrapper">
                                    {service.icon}
                                </div>
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="service-cta">
                <div className="container">
                    <h2>Ready to streamline your supply chain?</h2>
                    <p>Get a quote customized to your project needs today.</p>
                    <a href="/contact" className="btn btn-primary btn-lg">Request Consultation</a>
                </div>
            </section>
        </div>
    );
};

export default Services;
