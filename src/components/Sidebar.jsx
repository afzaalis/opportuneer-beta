import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import '../styles/sidebar.css';

const Sidebar = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  
  const handleLogoutClick = () => {
    setShowModal(true); 
  };

  const handleCloseModal = () => {
    setShowModal(false); 
  };

  const handleConfirmLogout = () => {
    //logika hapus token saat logout

    setShowModal(false); 
    navigate("/dashboard"); 
  };

  return (
    <div className="sidebar">
      <div className="profile-pic">
        <img src="../imgProfile/profileSidebar.png" alt="Profile" />
        <h2>Dina Saras</h2>
        <p>Informatics Student at Telkom University</p>
      </div>
      <hr />
      <ul className="sidebar-options">
        <li>
          <NavLink to="/myprofile" className={({ isActive }) => (isActive ? 'active' : '')}>
            <img src="../imgSidebar/Myprofile.png" alt="" />
            My Profile
          </NavLink>
        </li>
        <li>
          <NavLink to="/bookmark" className={({ isActive }) => (isActive ? 'active' : '')}>
            <img src="../imgSidebar/Bookmark.png" alt="" />
            Bookmark
          </NavLink>
        </li>
        <li>
          <NavLink to="/progress" className={({ isActive }) => (isActive ? 'active' : '')}>
            <img src="../imgSidebar/Progress.png" alt="" />
            My Progress
          </NavLink>
        </li>
        <li>
          <NavLink to="/classes" className={({ isActive }) => (isActive ? 'active' : '')}>
            <img src="../imgSidebar/classes.png" alt="" />
            Classes
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>
            <img src="../imgSidebar/aboutus.png" alt="" />
            About Us
          </NavLink>
        </li>
      </ul>
      <div className="info">
        <h3 style={{ textAlign: 'center', textDecoration: 'underline' }}>Did you know?</h3>
        <p>
          With more and more companies turning to digital technology, Information Systems plays an
          important role in digital transformation. Students learn about cloud computing, big data, and
          artificial intelligence (AI), all of which are an important part of today's technological landscape.
        </p>
      </div>
      <div className="logout-btn">
        <button onClick={handleLogoutClick}>Log out</button>
      </div>

      {/* Popup untuk konfirmasi logout */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <img src="../imgSidebar/logoutIcon.png" alt="" />
            <h2>Are you sure you want to logout?</h2>
            <div className="modal-buttons">
              <button 
              onClick={handleCloseModal}
              style={{
                backgroundColor:'white',
                border:'2px solid #4066F0',
                color:'#4066F0',
                textDecoration:'none'
              }}
              >Cancel</button>
             <button 
             onClick={handleConfirmLogout}
             style={{
              backgroundColor:'#4066F0',
              textDecoration:'none'
             }}
             
             >Logout</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
