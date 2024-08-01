import React from 'react';
// import './Reports.css';

const marketSummaryData = {
    title: 'Market Summary',
    description: 'A comprehensive overview of the market performance today.',
    summary: 'The market saw significant growth with major indices showing positive trends. The tech sector led the gains with notable performances from major players like Apple and Amazon.',
};

const stockReportsData = [
    { id: 1, title: 'AAPL', description: 'Apple Inc.', report: 'Apple reported strong quarterly earnings with a significant increase in iPhone sales.' },
    { id: 2, title: 'GOOGL', description: 'Alphabet Inc.', report: 'Alphabet announced a new line of Pixel devices, boosting their market share in the mobile sector.' },
    { id: 3, title: 'AMZN', description: 'Amazon.com, Inc.', report: 'Amazon saw a rise in stock prices after expanding its logistics network.' },
    // Add more stock reports as needed
];

const financialMetricsData = [
    { id: 1, metric: 'GDP Growth Rate', value: '3.5%' },
    { id: 2, metric: 'Unemployment Rate', value: '5.0%' },
    { id: 3, metric: 'Inflation Rate', value: '2.2%' },
    // Add more metrics as needed
];

function Reports() {
    return (
        <div className="reports">
            <h1>Market Reports</h1>
            <div className="market-summary">
                <h2>{marketSummaryData.title}</h2>
                <p>{marketSummaryData.description}</p>
                <p>{marketSummaryData.summary}</p>
            </div>
            <div className="stock-reports">
                <h2>Individual Stock Reports</h2>
                <ul className="stock-reports-list">
                    {stockReportsData.map(stock => (
                        <li key={stock.id} className="stock-report-item">
                            <h3>{stock.title} - {stock.description}</h3>
                            <p>{stock.report}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="financial-metrics">
                <h2>Key Financial Metrics</h2>
                <ul className="metrics-list">
                    {financialMetricsData.map(metric => (
                        <li key={metric.id} className="metric-item">
                            <p><strong>{metric.metric}:</strong> {metric.value}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Reports;
