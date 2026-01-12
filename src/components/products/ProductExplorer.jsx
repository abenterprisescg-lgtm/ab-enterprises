import React, { useState } from 'react';
import { Filter, ShoppingCart, ChevronRight, Check } from 'lucide-react';
import './ProductExplorer.css';

const PRODUCTS = [
    { id: 1, name: 'Mild Steel Angle', category: 'Angle', grade: 'IS 2062', size: '50x50x6mm', price: '₹45/kg', stock: 'High' },
    { id: 2, name: 'MS Channel', category: 'Channel', grade: 'IS 2062', size: '100x50mm', price: '₹42/kg', stock: 'Medium' },
    { id: 3, name: 'TMT Bar Fe 550', category: 'TMT', grade: 'Fe 550', size: '12mm', price: '₹54/kg', stock: 'High' },
    { id: 4, name: 'GI Pipe', category: 'Pipes', grade: 'B Class', size: '2 Inch', price: '₹65/kg', stock: 'Low' },
    { id: 5, name: 'MS Plate', category: 'Plates', grade: 'E250', size: '10mm', price: '₹48/kg', stock: 'High' },
    { id: 6, name: 'Wire Rod', category: 'Wire Rod', grade: 'SAE 1008', size: '5.5mm', price: '₹47/kg', stock: 'Medium' },
];

const CATEGORIES = ['All', 'Angle', 'Channel', 'TMT', 'Pipes', 'Plates', 'Wire Rod'];

const ProductExplorer = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    const filteredProducts = PRODUCTS.filter(product => {
        const matchesCategory = activeCategory === 'All' || product.category === activeCategory;
        const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="product-explorer">
            <div className="pe-sidebar">
                <div className="pe-filters">
                    <h3><Filter size={20} /> Filters</h3>

                    <div className="filter-group">
                        <h4>Category</h4>
                        <ul>
                            {CATEGORIES.map(cat => (
                                <li
                                    key={cat}
                                    className={activeCategory === cat ? 'active' : ''}
                                    onClick={() => setActiveCategory(cat)}
                                >
                                    {cat} <ChevronRight size={14} className="arrow" />
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="filter-group">
                        <h4>Availability</h4>
                        <label><input type="checkbox" defaultChecked /> In Stock</label>
                        <label><input type="checkbox" /> Pre-order</label>
                    </div>
                </div>
            </div>

            <div className="pe-content">
                <div className="pe-header">
                    <h2>Product Explorer</h2>
                    <input
                        type="text"
                        placeholder="Search products..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pe-search"
                    />
                </div>

                <div className="pe-grid">
                    {filteredProducts.map(product => (
                        <div key={product.id} className="product-card">
                            <div className="pc-image-placeholder">
                                {/* In a real app, images would go here */}
                                <span>{product.category}</span>
                            </div>
                            <div className="pc-details">
                                <span className="pc-category">{product.category}</span>
                                <h3>{product.name}</h3>
                                <div className="pc-specs">
                                    <span>Grade: {product.grade}</span>
                                    <span>Size: {product.size}</span>
                                </div>
                                <div className="pc-meta">
                                    <span className="pc-price">{product.price}</span>
                                    <span className={`pc-stock ${product.stock.toLowerCase()}`}>
                                        <div className="stock-dot"></div> {product.stock} Stock
                                    </span>
                                </div>
                                <button className="btn btn-primary pc-btn">
                                    Add to Quote <ShoppingCart size={16} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductExplorer;
