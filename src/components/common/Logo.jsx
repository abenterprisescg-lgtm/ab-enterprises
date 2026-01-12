import React from 'react';
import './Logo.css';

const Logo = ({ className = "", light = false }) => {
    return (
        <div className={`logo-container ${className}`} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <img
                src="/ab-logo-v2.png"
                alt="AB Enterprises"
                className="brand-logo"
                style={{
                    height: '200px',
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'
                }}
            />
        </div>
    );
};

export default Logo;
