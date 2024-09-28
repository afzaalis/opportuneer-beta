import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/VerifyAcc.css'


export const Verif = () => {
  const [code, setCode] = useState(new Array(6).fill(""));

  const handleChange = (e, index) => {
    const value = e.target.value;

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    if (value && index < 5) {
      document.getElementById(`code-${index + 1}`).focus();
    }
  };

  const handleSubmit = () => {
   //
  }

  return (
    <>
      <div className="judul">
        <img src="/opportuneer.png" alt="Logo" />
        <h1>Greetings! and Welcome to Oportuneer!</h1>
      </div>

      <div className="container-verif">
        <div className="content-container">
          <div className="logo">
            <img src="/mailMessage.png" alt="Mail Message" />
          </div>
          <h1>Please Verify Account</h1>
          <p>Enter the six digit code we sent to your email address to verify your new Opportuneer account.</p>
          <div className="verification-container">
            {code.map((num, index) => (
              <input
                key={index}
                id={`code-${index}`}
                type="text"
                maxLength="1"
                value={num}
                onChange={(e) => handleChange(e, index)}
                className="verification-input"
                style={{marginLeft:'15px'}}
                required
              />
            ))}
          </div>
          <Link to="/Verified"> 
            <button type="button">Verify and Continue</button>
          </Link>
        </div>
      </div>
    </>
  );
};
