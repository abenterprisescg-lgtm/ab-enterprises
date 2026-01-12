import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator, ChevronDown, Scale, Ruler, Copy, Check } from 'lucide-react';
import './ProductCalculator.css';

const ProductCalculator = ({ product }) => {
    const [selectedRowIndex, setSelectedRowIndex] = useState(0);
    const [selectedThicknessIndex, setSelectedThicknessIndex] = useState(0); // For multiple thicknesses
    const [quantity, setQuantity] = useState(1);
    const [calculatedWeight, setCalculatedWeight] = useState(null);
    const [copied, setCopied] = useState(false);

    // Identify columns
    const headers = product.table?.headers || [];
    const rows = product.table?.rows || [];

    // Find relevant column indices
    const sizeIndex = 0;
    const weightIndex = headers.findIndex(h => h.toLowerCase().includes('weight'));
    const thicknessIndex = headers.findIndex(h => h.toLowerCase().includes('thickness'));

    // Check if the current row has multiple thicknesses
    const currentRow = rows[selectedRowIndex];
    const rawThickness = thicknessIndex !== -1 ? currentRow[thicknessIndex] : null;
    const rawWeight = weightIndex !== -1 ? currentRow[weightIndex] : null;

    // Helper to parse comma-separated values
    const parseValues = (str) => {
        if (!str) return [];
        return str.toString().split(',').map(s => s.trim());
    };

    // Helper to parse weight range "1.1 - 1.8" into array [1.1, 1.8] or "1.1, 1.5, 1.8"
    const parseWeightRange = (str) => {
        if (!str) return [];
        const s = str.toString();
        if (s.includes(',')) {
            return s.split(',').map(v => parseFloat(v.trim()));
        }
        if (s.includes('-')) {
            return s.split('-').map(v => parseFloat(v.trim()));
        }
        return [parseFloat(s)];
    };

    const thicknesses = rawThickness ? parseValues(rawThickness) : [];
    const weights = rawWeight ? parseWeightRange(rawWeight) : [];

    // Determine if we need a thickness selector
    // We need it if we have multiple thicknesses AND (matching multiple weights OR a range that implies mapping)
    const hasMultipleThicknesses = thicknesses.length > 1;

    // Get the specific weight for calculation
    const getUnitWeight = () => {
        if (!rawWeight) return null;

        // If simple single value
        if (!hasMultipleThicknesses) {
            const val = parseFloat(rawWeight);
            return isNaN(val) ? null : val;
        }

        // If multiple thicknesses, try to find matching weight
        // Case 1: Weights array matches thickness array length (Ideal)
        // e.g. Thickness: "3, 5", Weight: "1.1, 1.8" (hypothetical, usually data is "1.1 - 1.8")
        // Case 2: Weight is a range "1.1 - 1.8" and we have thicknesses "3, 5" (2 items).
        // We can map min->first, max->last. 
        // If more than 2 thicknesses but only 2 weights (min-max), we might need interpolation or just show range.

        // Let's assume simpler logic for now: 
        // If weights has same length, map index.
        if (weights.length === thicknesses.length) {
            return weights[selectedThicknessIndex];
        }

        // If weight is a range [min, max] and we have N thicknesses.
        // If N=2, easy. 0->min, 1->max.
        if (weights.length === 2 && thicknesses.length > 1) {
            // Linear interpolation? Or just map endpoints?
            // Let's map endpoints for 0 and last index. 
            if (selectedThicknessIndex === 0) return weights[0];
            if (selectedThicknessIndex === thicknesses.length - 1) return weights[1];

            // Interpolate for middle?
            const minW = weights[0];
            const maxW = weights[1];
            const tMin = parseFloat(thicknesses[0]);
            const tMax = parseFloat(thicknesses[thicknesses.length - 1]);
            const tCurrent = parseFloat(thicknesses[selectedThicknessIndex]);

            if (!isNaN(tMin) && !isNaN(tMax) && !isNaN(tCurrent) && tMax !== tMin) {
                const ratio = (tCurrent - tMin) / (tMax - tMin);
                return minW + ratio * (maxW - minW);
            }
        }

        // Fallback: return average
        if (weights.length === 2) return (weights[0] + weights[1]) / 2;
        return weights[0];
    };

    useEffect(() => {
        // Reset specific thickness selection when row changes
        setSelectedThicknessIndex(0);
    }, [selectedRowIndex]);

    useEffect(() => {
        const uW = getUnitWeight();
        if (uW !== null && !isNaN(uW)) {
            setCalculatedWeight((uW * quantity).toFixed(2));
        } else {
            setCalculatedWeight(null);
        }
    }, [quantity, selectedRowIndex, selectedThicknessIndex, product]);

    const handleCopy = () => {
        if (!calculatedWeight) return;
        const size = currentRow[0];
        const thick = hasMultipleThicknesses ? `, ${thicknesses[selectedThicknessIndex]}mm` : '';
        const text = `Inquiry for ${product.name}: ${size}${thick}, Qty: ${quantity}m, Approx Weight: ${calculatedWeight} kg`;
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="product-calculator-container">
            <div className="calculator-header">
                <Calculator className="calc-icon" size={20} />
                <h3>Smart Estimator</h3>
            </div>

            <div className="calculator-body">
                <div className="calc-grid-row">
                    {/* Size Selector */}
                    <div className="input-group">
                        <label>Size / Designation</label>
                        <div className="custom-select-wrapper">
                            <select
                                value={selectedRowIndex}
                                onChange={(e) => setSelectedRowIndex(parseInt(e.target.value))}
                                className="premium-select"
                            >
                                {rows.map((row, idx) => (
                                    <option key={idx} value={idx}>
                                        {row[0]}
                                    </option>
                                ))}
                            </select>
                            <ChevronDown className="select-arrow" size={16} />
                        </div>
                    </div>

                    {/* Thickness Selector (Conditional) */}
                    {hasMultipleThicknesses && (
                        <div className="input-group">
                            <label>Thickness (mm)</label>
                            <div className="custom-select-wrapper">
                                <select
                                    value={selectedThicknessIndex}
                                    onChange={(e) => setSelectedThicknessIndex(parseInt(e.target.value))}
                                    className="premium-select"
                                >
                                    {thicknesses.map((t, idx) => (
                                        <option key={idx} value={idx}>
                                            {t} mm
                                        </option>
                                    ))}
                                </select>
                                <ChevronDown className="select-arrow" size={16} />
                            </div>
                        </div>
                    )}
                </div>

                {/* Calculation Zone */}
                {weightIndex !== -1 && (
                    <div className="calculation-zone">
                        <div className="input-group quantity-group">
                            <label><Ruler size={14} /> Length / Quantity (meters)</label>
                            <input
                                type="number"
                                min="1"
                                value={quantity}
                                onChange={(e) => setQuantity(Math.max(1, parseFloat(e.target.value) || 0))}
                                className="premium-input"
                            />
                        </div>

                        <div className="result-display">
                            <div className="result-label">
                                <Scale size={16} />
                                <span>Estimated Weight</span>
                            </div>
                            <motion.div
                                className="result-value"
                                key={calculatedWeight}
                                initial={{ scale: 0.9, opacity: 0.5 }}
                                animate={{ scale: 1, opacity: 1 }}
                            >
                                {calculatedWeight ? calculatedWeight : '--'}
                                <span className="unit">kg</span>
                            </motion.div>
                        </div>
                    </div>
                )}

                {/* Specs Summary Row */}
                <div className="specs-summary">
                    {headers.slice(1).map((header, idx) => {
                        // Skip rendering Weight or Thickness in summary if handled by logic above to avoid redundancy?
                        // Actually, keep them as static reference for the row is useful.
                        return (
                            <div key={idx} className="spec-summary-item">
                                <span className="label">{header}:</span>
                                <span className="value">{rows[selectedRowIndex][idx + 1]}</span>
                            </div>
                        );
                    })}
                </div>

                <button
                    className={`copy-btn ${copied ? 'copied' : ''}`}
                    onClick={handleCopy}
                    disabled={!calculatedWeight}
                >
                    {copied ? <Check size={18} /> : <Copy size={18} />}
                    {copied ? 'Copied Details' : 'Copy Estimate'}
                </button>
            </div>
        </div>
    );
};

export default ProductCalculator;
