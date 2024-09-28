import React from "react";
import { Link } from "react-router-dom";
import '../styles/Verified.css'

export const Verified = () => {
    return (
        <>
        <div className="judul">
          <img src="/opportuneer.png" alt="Logo" />
          <h1>Greetings! and Welcome to Oportuneer!</h1>
        </div>
  
        <div className="container-verified">
          <div className="content-container">
            <div className="logo">
              <img src="/verified.png" alt="Mail Message" />
            </div>
            <h1>Your Email has been verified</h1>
            <p>You can now sign in with your new acccount.</p>
      
            <Link to="/dashboard"> 
              <button type="submit">Lets Go!</button>
            </Link>
  
          </div>
        </div>
      </>

    );
}
