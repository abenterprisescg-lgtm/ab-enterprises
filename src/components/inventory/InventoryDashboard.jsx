import React from 'react';
import { Download, RefreshCw, Truck, AlertCircle } from 'lucide-react';
import './InventoryDashboard.css';

const INVENTORY_DATA = [
    { id: 101, material: 'Mild Steel Angle', spec: '50x50x6 IS 2062', qty: '120.5 MT', price: '₹45,000', status: 'Available', eta: 'In Stock' },
    { id: 102, material: 'MS Channel', spec: '100x50 IS 2062', qty: '85.2 MT', price: '₹42,200', status: 'Low Stock', eta: '2 Days' },
    { id: 103, material: 'TMT Bar Fe 550', spec: '12mm', qty: '450.0 MT', price: '₹54,000', status: 'Available', eta: 'In Stock' },
    { id: 104, material: 'TMT Bar Fe 550', spec: '16mm', qty: '320.5 MT', price: '₹54,000', status: 'Available', eta: 'In Stock' },
    { id: 105, material: 'MS Plate', spec: '10mm E250', qty: '15.0 MT', price: '₹48,500', status: 'Critical', eta: '5 Days' },
    { id: 106, material: 'GI Pipe', spec: '2 Inch Class B', qty: '60.0 MT', price: '₹65,000', status: 'Available', eta: 'In Stock' },
    { id: 107, material: 'Wire Rod', spec: '5.5mm SAE 1008', qty: '200.0 MT', price: '₹47,400', status: 'Available', eta: 'In Stock' },
];

const InventoryDashboard = () => {
    return (
        <div className="inventory-dashboard">
            <div className="inv-header">
                <div className="container">
                    <div className="inv-title">
                        <h1>Live Inventory Dashboard</h1>
                        <p>Real-time stock availability and pricing for registered partners.</p>
                    </div>
                    <div className="inv-actions">
                        <button className="btn btn-secondary">
                            <RefreshCw size={18} style={{ marginRight: '8px' }} /> Refresh Feed
                        </button>
                        <button className="btn btn-primary">
                            <Download size={18} style={{ marginRight: '8px' }} /> Export Catalog
                        </button>
                    </div>
                </div>
            </div>

            <div className="container inv-content">
                {/* Stats Row */}
                <div className="inv-stats">
                    <div className="stat-card">
                        <h3>Total Stock Value</h3>
                        <div className="stat-value">₹ 14.2 Cr</div>
                        <div className="stat-trend positive">+2.4% today</div>
                    </div>
                    <div className="stat-card">
                        <h3>Active Orders</h3>
                        <div className="stat-value">124</div>
                        <div className="stat-desc">Processing now</div>
                    </div>
                    <div className="stat-card">
                        <h3>Tonnage Available</h3>
                        <div className="stat-value">1,250 MT</div>
                        <div className="stat-desc">Across all yards</div>
                    </div>
                </div>

                {/* Inventory Table */}
                <div className="inv-table-container">
                    <table className="inv-table">
                        <thead>
                            <tr>
                                <th>Material</th>
                                <th>Specification</th>
                                <th>Available Qty</th>
                                <th>Price / Ton</th>
                                <th>Status</th>
                                <th>Next Batch ETA</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {INVENTORY_DATA.map(item => (
                                <tr key={item.id}>
                                    <td className="fw-bold">{item.material}</td>
                                    <td>{item.spec}</td>
                                    <td className="font-mono">{item.qty}</td>
                                    <td className="font-mono text-primary">{item.price}</td>
                                    <td>
                                        <span className={`status-badge ${item.status.toLowerCase().replace(' ', '-')}`}>
                                            {item.status}
                                        </span>
                                    </td>
                                    <td>
                                        {item.eta === 'In Stock' ? (
                                            <span className="text-success"><Truck size={14} /> Ready</span>
                                        ) : (
                                            <span className="text-warning"><AlertCircle size={14} /> {item.eta}</span>
                                        )}
                                    </td>
                                    <td>
                                        <button className="btn-sm">Quote</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default InventoryDashboard;
