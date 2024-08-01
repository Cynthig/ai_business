import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Trends from './pages/Trends';
import RecommendationsPage from './pages/Recommendations';
import ReportsPage from './pages/Reports';
import Settings from './pages/Settings';
import './assets/styles/main.css';

function App() {
    return (
        <Router>
            <div className="app-container">
                <Navbar />
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/trends" element={<Trends />} />
                        {/* <Route path="/recommendations" element={<RecommendationsPage />} /> */}
                        <Route path="/reports" element={<ReportsPage />} />
                        <Route path="/settings" element={<Settings />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
