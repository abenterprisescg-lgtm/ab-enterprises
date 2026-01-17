import React, { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, User, Clock, Tag } from 'lucide-react';
import { blogPosts } from '../data/blogData';
import SEO from '../components/common/SEO';
import './BlogPost.css';

const BlogPost = () => {
    const { slug } = useParams();
    const post = blogPosts.find(p => p.slug === slug);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!post) {
        return <Navigate to="/news" />;
    }

    // Schema for BlogPosting
    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": post.title,
        "image": `https://www.ab-enterprises.co${post.image}`,
        "datePublished": new Date(post.date).toISOString(), // Roughly parsing the string date
        "author": {
            "@type": "Person",
            "name": post.author
        },
        "publisher": {
            "@type": "Organization",
            "name": "AB Enterprises",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.ab-enterprises.co/ab-logo-v2.webp"
            }
        },
        "description": post.excerpt
    };

    return (
        <div className="blog-post-page">
            <SEO
                title={`${post.title} | AB Enterprises News`}
                description={post.excerpt}
                schema={articleSchema}
            />

            {/* Immersive Header */}
            <header
                className="blog-post-header"
                style={{ backgroundImage: `url(${post.image})` }}
            >
                <div className="blog-header-overlay"></div>
                <div className="container blog-header-content">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="post-badges">
                            <span className="post-category">{post.category}</span>
                        </div>
                        <h1>{post.title}</h1>
                        <div className="post-meta-detailed">
                            <span className="meta-item-detailed"><Calendar size={18} /> {post.date}</span>
                            <span className="meta-item-detailed"><User size={18} /> {post.author}</span>
                            <span className="meta-item-detailed"><Clock size={18} /> {post.readTime}</span>
                        </div>
                    </motion.div>
                </div>
            </header>

            {/* Content Body */}
            <article className="blog-post-container">
                <motion.div
                    className="blog-content-body"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                >
                    <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
                </motion.div>
            </article>

            {/* Read More Section */}
            <section className="related-articles">
                <div className="container">
                    <h2 className="related-title">More Insights</h2>
                    <div className="blog-grid">
                        {blogPosts
                            .filter(p => p.id !== post.id)
                            .map(related => (
                                <Link to={`/news/${related.slug}`} key={related.id} style={{ textDecoration: 'none' }}>
                                    <div className="blog-card">
                                        <div className="blog-image">
                                            <img src={related.image} alt={related.title} />
                                            <div className="blog-category">{related.category}</div>
                                        </div>
                                        <div className="blog-content">
                                            <h3>{related.title}</h3>
                                            <div style={{ marginTop: 'auto', color: '#ea580c', fontWeight: '600' }}>Read Article &rarr;</div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BlogPost;
