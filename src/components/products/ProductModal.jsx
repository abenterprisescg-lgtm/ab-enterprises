import React from 'react';
import { X, CheckCircle, MessageCircle, Ruler, Box } from 'lucide-react';
import ProductCalculator from './ProductCalculator';
import { motion, AnimatePresence } from 'framer-motion';
import './ProductModal.css';

const ProductModal = ({ product, isOpen, onClose }) => {
    if (!product) return null;

    const handleGetQuote = () => {
        const message = `Hi, I am interested in *${product.name}*.\nPlease provide quotation for the following sizes:\n\n`;
        const phone = '917089030444';
        window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="product-modal-overlay" onClick={onClose}>
                    <motion.div
                        className="product-modal-content"
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button className="modal-close" onClick={onClose}><X size={24} /></button>

                        <div className="modal-header">
                            <h2>{product.name}</h2>
                            <p>{product.description}</p>
                        </div>

                        <div className="modal-body">
                            <div className="modal-specs">
                                <h3><CheckCircle size={18} /> Specifications (IS Standard)</h3>
                                <div className="specs-grid">
                                    {product.specs?.map((spec, i) => (
                                        <div key={i} className="spec-item">
                                            <span className="spec-label">{spec.label}</span>
                                            <span className="spec-value">{spec.value}</span>
                                        </div>
                                    ))}
                                    <div className="spec-item">
                                        <span className="spec-label">Grades Available</span>
                                        <span className="spec-value">{product.grades?.join(', ')}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="modal-table-container">
                                <h3><Ruler size={18} /> Standard Size Chart</h3>
                                <div className="table-wrapper">
                                    <table className="size-table">
                                        <thead>
                                            <tr>
                                                {product.table?.headers.map((h, i) => <th key={i}>{h}</th>)}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {product.table?.rows.map((row, i) => (
                                                <tr key={i}>
                                                    {row.map((cell, j) => <td key={j}>{cell}</td>)}
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <ProductCalculator product={product} />
                        </div>

                        <div className="modal-actions">
                            <button className="btn btn-primary quote-btn" onClick={handleGetQuote}>
                                Get Quote for {product.name} <MessageCircle size={20} />
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default ProductModal;
