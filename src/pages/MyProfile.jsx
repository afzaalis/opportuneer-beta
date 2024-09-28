import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import '../styles/myprofile.css'

export const MyProfile = () => {
  const [searchInput, setSearchInput] = useState("");
  const [profileBio] = useState([
      { name: "Dina Saras", 
        major: "Information System", 
        university: "Telkom University", 
        email: "dinasaras@gmail.com", 
        phone: "+6281294566271" }
  ]);

  const handleSearchChange = (event) => {
      setSearchInput(event.target.value);
  };

  const navigate = useNavigate();

  const EditProfile = () => {
    navigate("/editprofile"); 
  };

  return (
    <div className="profile-page">
      <Sidebar />
      <div className="main-container">
        {/* Search Bar dan Filter */}
        <div className="search-filter">
            <div className="search-container">
                <img src="../imgPelatihanSkill/search.png" alt="" className="search-icon"/>
                <input
                    type="text"
                    className="search-bar"
                    placeholder="Search by class..."
                    value={searchInput} 
                    onChange={handleSearchChange} 
                />
            </div>
            <button className="filter-btn">
                Filter
                <img src="../imgPelatihanSkill/filter.png" alt="" style={{
                    marginLeft: '10px', 
                }} />
            </button>
        </div>

        <div className="profile-faq-container">
             {/* Profile Card */}        
              <div className="profile-section">
              {profileBio.map((profile, index) => (
                <div key={index} className="profile">
                      <div className="profile-picture">
                          <img src="../imgProfile/profileSidebar.png" alt="Profile" className="profile-image" />
                      </div>
                      <div className="profile-bio">
                          <h2>{profile.name}</h2>
                          <p>{profile.major} at {profile.university}</p>
                          <p>{profile.email}</p>
                          <p>{profile.phone}</p>
                      </div>
                </div>
              ))}
              <div className="edit-profile-btn">
                  <button onClick={EditProfile}>Edit Profile</button>
              </div>
              </div>

              {/* Faq Card */} 
              <div className="faq-section">
                <h2>Frequently Asked Questions</h2>
                <ul>
                  <li>
                    <p>Bagaimana fitur edit profile bekerja?</p>
                  </li>
                  <li>
                    <p>Apa yang dimaksud Pengembangan Skill?</p>
                  </li>
                  <li>
                    <p>Bisakah kita mencari lowongan pekerjaan sesuai dengan minat kita?</p>
                  </li>
                  <li>
                    <p>Bagaiman data kita bisa diperoleh saat kita mengakses Proses Pengembangan?</p>
                  </li>
                </ul>
              </div>
   
        </div>
        
        {/* Upcoming Class */} 
        <div className="upcoming-class">
            <h3>Upcoming Class</h3>
          <img src="../imgProfile/upcoming.png" alt="Upcoming Class" className="upcoming-image" />
        </div>

      </div>
    </div>
  );
};

export default MyProfile;