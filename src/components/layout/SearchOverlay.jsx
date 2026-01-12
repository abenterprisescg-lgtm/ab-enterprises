import React, { useState, useEffect, useRef } from 'react';
import { X, Search, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './SearchOverlay.css';

const SEARCH_DATA = [
    { title: 'Home', path: '/', type: 'Page' },
    { title: 'About Us', path: '/about', type: 'Page' },
    { title: 'Contact Support', path: '/contact', type: 'Page' },
    { title: 'Our Services', path: '/services', type: 'Page' },
    { title: 'Inventory Dashboard', path: '/inventory', type: 'Page' },

    // Products
    // Products
    // Products - Finished
    { title: 'Hot Rolled Steel Sheets', path: '/products', type: 'Product', id: 'plate', category: 'finished' },
    { title: 'Cold Rolled Coils (CRC)', path: '/products', type: 'Product', id: 'plate', category: 'finished' }, // Mapping correctly if possible, or generic
    { title: 'Galvanized Steel Plates', path: '/products', type: 'Product', id: 'plate', category: 'finished' },
    { title: 'Mild Steel Angles (ISA)', path: '/products', type: 'Product', id: 'angle', category: 'finished' },
    { title: 'Steel Channels (ISMC)', path: '/products', type: 'Product', id: 'channel', category: 'finished' },
    { title: 'Structural Heavy Beams (ISMB)', path: '/products', type: 'Product', id: 'beam', category: 'finished' },
    { title: 'H-Beams & I-Beams', path: '/products', type: 'Product', id: 'beam', category: 'finished' },
    { title: 'Industrial Pipes & Tubes', path: '/products', type: 'Product', id: 'pipe', category: 'finished' },
    { title: 'TMT Bars & Reinforcement', path: '/products', type: 'Product', id: 'tmt', category: 'finished' },
    { title: 'Flat Bars & Squares', path: '/products', type: 'Product', id: 'flat', category: 'finished' },
    { title: 'Wire Rods', path: '/products', type: 'Product', id: 'wire-rod', category: 'finished' },

    // Products - Raw Materials
    { title: 'Industrial Raw Materials', path: '/products', type: 'Category', category: 'raw' },
    { title: 'Mild Steel Ingots', path: '/products', type: 'Product', id: 15, category: 'raw' },
    { title: 'Mild Steel Billets', path: '/products', type: 'Product', id: 16, category: 'raw' },
    { title: 'Sponge Iron (DRI)', path: '/products', type: 'Product', id: 17, category: 'raw' },
    { title: 'Foundry Pig Iron', path: '/products', type: 'Product', id: 18, category: 'raw' },
    { title: 'Iron Ore Lumps & Fines', path: '/products', type: 'Product', id: 19, category: 'raw' },
    { title: 'Industrial Coal (RB1/RB2)', path: '/products', type: 'Product', id: 20, category: 'raw' },

    // Services
    { title: 'Precision Logistics', path: '/services', type: 'Service' },
    { title: 'Custom Sizing & Cutting', path: '/services', type: 'Service' },
    { title: 'Quality Assurance', path: '/services', type: 'Service' },
    { title: 'JIT Delivery', path: '/services', type: 'Service' },
];

const SearchOverlay = ({ isOpen, onClose }) => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const inputRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            if (inputRef.current) inputRef.current.focus();
        } else {
            document.body.style.overflow = 'unset';
            setQuery('');
            setResults([]);
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen]);

    const handleSearch = (e) => {
        const value = e.target.value;
        setQuery(value);

        if (value.trim() === '') {
            setResults([]);
            return;
        }

        const filtered = SEARCH_DATA.filter(item =>
            item.title.toLowerCase().includes(value.toLowerCase())
        );
        setResults(filtered);
    };

    const handleNavigate = (item) => {
        // Pass productId and category in state for direct opening
        navigate(item.path, {
            state: {
                productId: item.id,
                category: item.category
            }
        });
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="search-overlay">
            <button className="close-search" onClick={onClose}>
                <X size={32} />
            </button>

            <div className="search-container">
                <div className="search-input-wrapper">
                    <Search className="search-icon-large" size={32} />
                    <input
                        ref={inputRef}
                        type="text"
                        placeholder="Search for products, services, or pages..."
                        value={query}
                        onChange={handleSearch}
                        className="search-input"
                    />
                </div>

                <div className="search-results">
                    {results.length > 0 ? (
                        results.map((result, index) => (
                            <div
                                key={index}
                                className="search-result-item"
                                onClick={() => handleNavigate(result)}
                            >
                                <div className="result-info">
                                    <span className="result-title">{result.title}</span>
                                    <span className="result-type">{result.type}</span>
                                </div>
                                <ArrowRight className="result-arrow" size={20} />
                            </div>
                        ))
                    ) : query.length > 0 ? (
                        <div className="no-results">
                            <p>No matches found for "{query}"</p>
                        </div>
                    ) : (
                        <div className="search-suggestions">
                            <p>Popular Searches:</p>
                            <div className="tags">
                                {['Plates', 'Services', 'Inventory', 'Contact'].map(tag => (
                                    <span key={tag} onClick={() => setQuery(tag) || handleSearch({ target: { value: tag } })}>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SearchOverlay;
