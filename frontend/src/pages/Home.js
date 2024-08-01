import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="home">
            <div className="home-content">
                <h1>Market Trend Predictor</h1>
                <p>Discover the latest market trends and insights</p>
                <Link to="/trends">
                    <button className="explore-button">Explore Trends</button>
                </Link>
            </div>
        </div>
    );
}

export default Home;
