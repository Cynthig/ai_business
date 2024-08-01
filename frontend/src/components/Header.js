import React from 'react';
import '../assets/styles/main.css';  // Import the CSS file for styles

const Header = () => {
  return (
    <header className="header">
      <div className="logo">YourLogo</div>
      <nav className="nav">
        <a href="#home">Home</a>
        <a href="#trends">Trends</a>
        {/* <a href="#recommendations">Recommendations</a> */}
        <a href="#reports">Reports</a>
        <a href="#settings">Settings</a>
      </nav>
      <div className="user-icon">👤</div>

    </header>
  );
};

export default Header;
