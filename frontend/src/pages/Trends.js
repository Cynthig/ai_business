import React from 'react';
// import './Trends.css';

const trendsData = [
    { id: 1, title: 'AAPL', description: 'Apple Inc.', price: '$150', change: '+1.2%', chart: 'chart_placeholder' },
    { id: 2, title: 'GOOGL', description: 'Alphabet Inc.', price: '$2800', change: '-0.5%', chart: 'chart_placeholder' },
    { id: 3, title: 'AMZN', description: 'Amazon.com, Inc.', price: '$3300', change: '+0.8%', chart: 'chart_placeholder' },
    // Add more trends as needed
];

const newsData = [
    { id: 1, title: 'Market Update', description: 'Stocks are up today as investors react to earnings reports.' },
    { id: 2, title: 'Tech Sector', description: 'Tech stocks are leading the market gains, with Apple and Amazon showing significant growth.' },
    // Add more news as needed
];

function Trends() {
    return (
        <div className="trends">
            <h1>Market Trends</h1>
            <div className="trends-container">
                <div className="section">
                    <h2>Featured Reports</h2>
                    <div className="reports-grid">
                        {trendsData.map(trend => (
                            <div key={trend.id} className="report-card">
                                <h3>{trend.title}</h3>
                                <p>{trend.description}</p>
                                <p>Price: {trend.price}</p>
                                <p>Change: {trend.change}</p>
                                <div className="chart-placeholder">{trend.chart}</div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="section">
                    <h2>Recent News</h2>
                    <ul className="news-list">
                        {newsData.map(news => (
                            <li key={news.id} className="news-item">
                                <h3>{news.title}</h3>
                                <p>{news.description}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Trends;
