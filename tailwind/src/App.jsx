import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <nav className="navbar">
        <div className="brand">Kalvium</div>
        <ul className="nav-links">
          <li><a href="/">About Us</a></li>
          <li><a href="/">Contacts</a></li>
          <li><a href="/">Courses</a></li>
        </ul>
        <button className="login-btn">Login</button>
      </nav>

      <div className="content">
        <button className="main-btn">Button one</button>
        <div className="alert-box">
          <strong>Alert!</strong>
          <span>This is awesome!</span>
        </div>
        <div className="course-info">
          <img src="https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png" alt="Kalvium Logo" />
          <div className="course-details">
            <h4>KalviumStore</h4>
            <p>You have a new course!</p>
          </div>
        </div>
      </div>

      <footer>
        <div className="footer-text">
          &copy; 2024 Kalvium
        </div>
      </footer>
    </div>
  );
}

export default App;
