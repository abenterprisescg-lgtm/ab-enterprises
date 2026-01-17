import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, User, Clock, ArrowRight } from 'lucide-react';
import SEO from '../components/common/SEO';
import { blogPosts } from '../data/blogData';
import './News.css';

const News = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Stagger animation for cards
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <div className="news-page">
            <SEO
                title="News & Market Insights | Steel Industry Trends"
                description="Stay updated with the latest steel price trends, construction insights, and market analysis from AB Enterprises."
            />

            {/* Hero Section */}
            <section className="news-hero">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1>News & Insights</h1>
                        <p>Navigating the steel industry with knowledge and foresight.</p>
                    </motion.div>
                </div>
            </section>

            {/* Blog Grid */}
            <div className="container">
                <motion.div
                    className="blog-grid"
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    {blogPosts.map((post) => (
                        <motion.div key={post.id} variants={item}>
                            <Link to={`/news/${post.slug}`} style={{ textDecoration: 'none' }}>
                                <div className="blog-card">
                                    <div className="blog-image">
                                        <img src={post.image} alt={post.title} />
                                        <div className="blog-category">{post.category}</div>
                                    </div>
                                    <div className="blog-content">
                                        <div className="blog-meta">
                                            <span className="meta-item"><Calendar size={14} /> {post.date}</span>
                                            <span className="meta-item"><Clock size={14} /> {post.readTime}</span>
                                        </div>
                                        <h3>{post.title}</h3>
                                        <p className="blog-excerpt">{post.excerpt}</p>
                                        <div className="read-more">
                                            Read Article <ArrowRight size={16} />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default News;
