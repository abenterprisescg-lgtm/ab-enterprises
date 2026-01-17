import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, ArrowRight } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { products } from '../data/products';
import ProductModal from '../components/products/ProductModal';
import SEO from '../components/common/SEO';
import './Products.css';

const Products = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeCategory, setActiveCategory] = useState('finished');
    const [selectedProduct, setSelectedProduct] = useState(null);
    const location = useLocation();

    // Handle deep link / search navigation
    useEffect(() => {
        if (location.state?.productId) {
            const product = products.find(p => p.id === location.state.productId || p.name === location.state.productId);
            if (product) {
                // Auto-switch category if needed
                if (product.category && product.category !== activeCategory) {
                    setActiveCategory(product.category);
                }
                setTimeout(() => {
                    setSelectedProduct(product);
                }, 100);
            }
        }
        // Also handle category passed via state
        if (location.state?.category) {
            setActiveCategory(location.state.category);
        }

        // Handle search term passed via state (e.g. from Footer)
        if (location.state?.search) {
            setSearchTerm(location.state.search);
            // If searching for something specific, likely 'finished' or 'all' but let's stick to default unless specified
            if (location.state.tab) {
                setActiveCategory(location.state.tab);
            }
        }
    }, [location.state]);

    const filteredProducts = products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
        const cat = activeCategory === 'all' ? true : (product.category || 'finished') === activeCategory;
        // If activeCategory is 'all', show everything, else filter
        // Wait, original code only supported 'finished' or 'raw'. Let's keep it simple for now, 
        // but 'raw' items need to be findable.
        // Original logic: const cat = product.category || 'finished'; const matchesCategory = cat === activeCategory;

        // Revised to match original stricter logic for tabs, but ensuring 'raw' works
        const productCat = product.category || 'finished';
        const matchesCategory = productCat === activeCategory;

        return matchesSearch && matchesCategory;
    });

    const categories = [
        { id: 'finished', label: 'Prime Finished Steel' },
        { id: 'raw', label: 'Industrial Raw Material' }
    ];

    return (
        <div className="products-page">
            <SEO
                title={`${activeCategory === 'finished' ? 'Structural Steel & TMT Bars' : 'Industrial Raw Materials'} | Product Catalog`}
                description="Explore our comprehensive range of steel products including TMT bars, angles, beams, channels, and industrial raw materials like iron ore and coal."
            />
            {/* Hero Section */}
            <section className="products-hero">
                <div className="container">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        Our Product Collection
                    </motion.h1>
                    <p>From foundational raw materials to precision-finished steel components.</p>

                    <div className="category-tabs">
                        {categories.map(cat => (
                            <button
                                key={cat.id}
                                className={`cat-tab ${activeCategory === cat.id ? 'active' : ''}`}
                                onClick={() => setActiveCategory(cat.id)}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Search & Filter Bar */}
            <section className="products-filter-bar container">
                <div className="search-box">
                    <Search size={20} />
                    <input
                        type="text"
                        placeholder={`Search ${activeCategory === 'finished' ? 'Structural Steel' : 'Raw Materials'}...`}
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </section>

            {/* Product Grid */}
            <section className="products-grid container">
                {filteredProducts.map((product) => (
                    <motion.div
                        layoutId={`product-${product.id}`}
                        key={product.id}
                        className="product-card"
                        onClick={() => setSelectedProduct(product)}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
                        viewport={{ once: true }}
                    >
                        <div className="card-image-placeholder" style={{ height: '220px' }}>
                            <img
                                src={product.image}
                                alt={product.name}
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </div>
                        <div className="card-content">
                            <h3>{product.name}</h3>
                            <p>{product.description.substring(0, 60)}...</p>
                            <div className="card-footer">
                                <span className="view-details">
                                    View Sizes <ArrowRight size={16} />
                                </span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </section>

            {/* Product Detail Modal */}
            <ProductModal
                product={selectedProduct}
                isOpen={!!selectedProduct}
                onClose={() => setSelectedProduct(null)}
            />
        </div>
    );
};

export default Products;
