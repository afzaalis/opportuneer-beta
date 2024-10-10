import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import '../EditProfile/editprofile.css'

export const EditProfile = () => {
    return (
        <div className="edit-profile-page">
            <Sidebar />
            <div className="main-containers">
                <div className="left-content">
                    <div className="upload-photo">
                        <div className="photo">
                            <img src="../imgProfile/profileSidebar.png" alt="Profile" className="profile-image" />  
                        </div>
                        
                        <div className="photo-desc">
                            <h2>Your Photo</h2>
                            <p>This will be displayed on your profile</p>
                        </div>
                        
                        <div className="upload-btn">
                            <button>Upload New</button>
                        </div>

                        <div className="save-btn">
                            <button>Save</button>
                        </div>
                    </div>

                    <div className="personal-info">
                        <h2>Personal Information</h2>
                        <div className="form">
                            <h3>Full Name</h3>
                            <input
                            type="text"
                            className="fullname-form"
                            placeholder=""
                            />

                            <h3>Phone Number</h3>
                            <input
                            type="text"
                            className="phone-form"
                            placeholder=""
                            />

                            <h3>Email</h3>
                            <input
                            type="text"
                            className="email-form"
                            placeholder=""
                            />

                            <h3>Occupation</h3>
                            <input
                            type="text"
                            className="occupation-form"
                            placeholder=""
                            />
                        </div>
                        
                    </div>
                </div>

                <div className="right-content">
                    <div className="bio">
                        <h2>Bio</h2>
                        <input
                            type="text"
                            className="bio-form"
                            placeholder=""
                        />
                    </div>

                    <div className="interest">
                        <h2>Interest</h2>
                        <div className="interest-lists">
                            <div className="interest-list">
                                <p>UI Design</p>
                                <img src="../imgProfile/delete.png" alt="" />
                            </div>

                            <div className="interest-list">
                                <p>UX</p>
                                <img src="../imgProfile/delete.png" alt="" />
                            </div>

                            <div className="interest-list">
                                <p>Mobile Apps</p>
                                <img src="../imgProfile/delete.png" alt="" />
                            </div>

                            <div className="interest-list">
                                <p>Python</p>
                                <img src="../imgProfile/delete.png" alt="" />
                            </div>

                            <div className="interest-list">
                                <p>Javascript</p>
                                <img src="../imgProfile/delete.png" alt="" />
                            </div>

                            <div className="interest-list">
                                <p>PHP</p>
                                <img src="../imgProfile/delete.png" alt="" />
                            </div>

                            <div className="interest-list">
                                <p>Excel</p>
                                <img src="../imgProfile/delete.png" alt="" />
                            </div>
                        </div>

                        <div className="interest-save-btn">
                            <button>+Add More</button>
                        </div>
                    </div>

                    <div className="social-media">
                        <h2>Social Media Accounts</h2>

                        <div className="social-media-link">
                            <p>Twitter</p>
                            <input
                            type="text"
                            className="twitter-form"
                            placeholder=""
                            />

                            <p>Facebook</p>
                            <input
                            type="text"
                            className="facebook-form"
                            placeholder=""
                            />

                            <p>Linkedin</p>
                            <input
                            type="text"
                            className="linkedin-form"
                            placeholder=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditProfile;