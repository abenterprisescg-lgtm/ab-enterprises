import React, { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './Testimonials.css';

const TESTIMONIALS = [
    {
        id: 1,
        name: "Rajesh Kumar",
        role: "Project Director",
        company: "L&T Infrastructure",
        text: "AB ENTERPRISES has been our backbone for steel supply in the Metro Rail project. Their delivery speed and grade accuracy are unmatched in the industry.",
        rating: 5
    },
    {
        id: 2,
        name: "Vikram Malhotra",
        role: "Procurement Head",
        company: "Tata Projects",
        text: "The transparency in pricing and real-time inventory tracking on their portal has saved us countless hours. A truly modern trading partner.",
        rating: 5
    },
    {
        id: 3,
        name: "Suresh Gupta",
        role: "MD",
        company: "Gupta Steel Works",
        text: "We have dealt with many traders, but the professionalism and quality assurance from AB Enterprises sets them apart. Highly recommended.",
        rating: 4
    }
];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const next = () => {
        setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    };

    const prev = () => {
        setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
    };

    return (
        <section className="testimonials-section">
            <div className="container">
                <h2 className="section-title">Trusted by Industry Leaders</h2>
                <div className="testimonial-wrapper">
                    <button onClick={prev} className="nav-btn prev"><ChevronLeft /></button>

                    <div className="testimonial-card-container">
                        <AnimatePresence mode='wait'>
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                                className="testimonial-card"
                            >
                                <Quote size={40} className="quote-icon" />
                                <p className="testimonial-text">"{TESTIMONIALS[currentIndex].text}"</p>
                                <div className="testimonial-author">
                                    <h4>{TESTIMONIALS[currentIndex].name}</h4>
                                    <span>{TESTIMONIALS[currentIndex].role}, {TESTIMONIALS[currentIndex].company}</span>
                                </div>
                                <div className="testimonial-rating">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            size={16}
                                            fill={i < TESTIMONIALS[currentIndex].rating ? "#F59E0B" : "none"}
                                            color={i < TESTIMONIALS[currentIndex].rating ? "#F59E0B" : "#ddd"}
                                        />
                                    ))}
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <button onClick={next} className="nav-btn next"><ChevronRight /></button>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
