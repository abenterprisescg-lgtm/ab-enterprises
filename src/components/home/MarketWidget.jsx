import React from 'react';
import { LineChart, Line, ResponsiveContainer, YAxis } from 'recharts';
import { TrendingUp, TrendingDown } from 'lucide-react';
import './MarketWidget.css';

const dataAngles = [
    { val: 45000 }, { val: 45200 }, { val: 45100 }, { val: 45500 }, { val: 45800 }, { val: 46000 }
];
const dataChannels = [
    { val: 42000 }, { val: 41800 }, { val: 42100 }, { val: 42300 }, { val: 42500 }, { val: 42200 }
];
const dataTMT = [
    { val: 52000 }, { val: 52500 }, { val: 53000 }, { val: 53200 }, { val: 53500 }, { val: 54000 }
];
const dataWire = [
    { val: 48000 }, { val: 47900 }, { val: 47800 }, { val: 47500 }, { val: 47600 }, { val: 47400 }
];

const MarketCard = ({ title, price, change, data, isPositive }) => (
    <div className="market-card">
        <div className="market-info">
            <h4>{title}</h4>
            <div className="market-price">₹{price.toLocaleString()}</div>
            <div className={`market-change ${isPositive ? 'positive' : 'negative'}`}>
                {isPositive ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
                {change}%
            </div>
        </div>
        <div className="market-chart">
            <ResponsiveContainer width="100%" height={60}>
                <LineChart data={data}>
                    <YAxis domain={['dataMin', 'dataMax']} hide />
                    <Line
                        type="monotone"
                        dataKey="val"
                        stroke={isPositive ? '#10B981' : '#EF4444'}
                        strokeWidth={2}
                        dot={false}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    </div>
);

const MarketWidget = () => {
    return (
        <section className="market-widget-section">
            <div className="container">
                <div className="section-header">
                    <h2>Live Steel Market Rates</h2>
                    <p>Real-time market trends for premium steel products.</p>
                </div>
                <div className="market-grid">
                    <MarketCard title="MS Angles" price={46000} change={+2.4} data={dataAngles} isPositive={true} />
                    <MarketCard title="MS Channels" price={42200} change={+0.5} data={dataChannels} isPositive={true} />
                    <MarketCard title="TMT Bars (Fe 550)" price={54000} change={+3.8} data={dataTMT} isPositive={true} />
                    <MarketCard title="Wire Rod" price={47400} change={-1.2} data={dataWire} isPositive={false} />
                </div>
            </div>
        </section>
    );
};

export default MarketWidget;
