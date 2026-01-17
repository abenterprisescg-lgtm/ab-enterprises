import React from 'react';
import { Globe, TrendingUp, Ship, MapPin } from 'lucide-react';
import './GlobalReach.css';

const GlobalReach = () => {
    return (
        <section className="global-reach-section">
            <div className="map-background" style={{ backgroundImage: "url('/world_map_dots.webp')" }}>
                {/* Visual Pulse Points representing export hubs */}
                <div className="pulse-point p-usa" title="North America"></div>
                <div className="pulse-point p-eu" title="Europe"></div>
                <div className="pulse-point p-uae" title="Middle East"></div>
                <div className="pulse-point p-asia" title="Southeast Asia"></div>
                <div className="pulse-point p-aus" title="Australia"></div>
            </div>

            <div className="container global-content">
                <div className="global-header">
                    <span className="subtitle">International Export Leader</span>
                    <h2>Powering The World. <br />Crossing Borders.</h2>
                    <p>
                        AB Enterprises isn't just a local supplier; we are one of the **largest exporters of steel products** globally.
                        From standard grades to specialized alloys, our high-quality steel builds infrastructure across 5 continents.
                    </p>
                </div>

                <div className="stats-container">
                    <div className="stat-item">
                        <Globe className="stat-icon" size={32} />
                        <h3>25+</h3>
                        <p>Countries Served</p>
                    </div>
                    <div className="stat-item">
                        <Ship className="stat-icon" size={32} />
                        <h3>500k+</h3>
                        <p>Tons Exported</p>
                    </div>
                    <div className="stat-item">
                        <TrendingUp className="stat-icon" size={32} />
                        <h3>100%</h3>
                        <p>Export Growth</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GlobalReach;
