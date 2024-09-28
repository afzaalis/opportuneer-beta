import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../styles/dashboard.css';


export const Dashboard = () => {
  const navigate = useNavigate(); 

  const goSignUp = () => {
    navigate("/signup"); 
  }

  const goLogin = () => {
    navigate("/"); 
  } 
  return (
    <div className="dashboard">
      <nav className="navbar">
        <div className="navbar-container">
          <img src='../opportuneer.png' alt="Logo" className="navbar-logo" />
          <ul className="navbar-menu">
            <li className="navbar-item"><a href="/aboutus " className="navbar-link">About</a></li>
            <li className="navbar-item"><a href="/news" className="navbar-link">News</a></li>
            <li className="navbar-item"><a href="/help" className="navbar-link">Help</a></li>
          </ul>
          <div className="button-group">
          <button className="signup-button" onClick={goSignUp}>Sign Up</button> 
          <button className="login-button" onClick={goLogin}>Login</button> 
          </div>
        </div>
      </nav>

      <div className="intro">
        <div className="intro-text">
          <h1>Are You <span className="highlight">There?</span></h1>
          <h2>Discover Your Passion, Grow Your <span>Skills, Seize Opportunities</span></h2>
        </div>
        <div className="intro-image">
          <img src="../intro-img.png" alt="Intro Image" />
        </div>
      </div>

      <section className="content">
        <h1>Ada Apa Saja di Opportuneer?</h1>
        <div className="grid-container">
          <img src="../imgDashboard/Frame 42.png" alt="Image 1" />
          <img src="../imgDashboard/Frame 43.png" alt="Image 2" />
          <img src="../imgDashboard/Frame 44.png" alt="Image 3" />
        </div>
      </section>

      <footer className="footer-container">
    <div className="footer-content">
        <div className="information">
            <p>Opportuneer Start Up yang menghadirkan layanan menguji minat dan bakat</p>
            <p>Jl. Telekomunikasi No.1, Sukapura, Kec. Dayeuhkolot, Kabupaten Bandung, Jawa Barat 40257</p>
        </div>
        <div className="about">
            <ul>
                <li>Pelajari</li>
                <li>Tentang Opportuneer</li>
                <li>FAQ</li>
                <li>Partner Kami</li>
            </ul>
        </div>
    </div>
</footer>

    </div>
  );
};
