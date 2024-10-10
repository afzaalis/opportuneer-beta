import React from "react";
import '../styles/footer.css';

export const Footer = () => {
    return (
        <div className="footer-container">
            <div className="konten">
                <div className="info">
                    <p style={{
                        color:'white'
                    }}>Opportuneer
                    Start Up yang menghadirkan layananan menguji minat dan bakat</p>
                        <p style={{
                        color:'white'
                    }}>
                        Jl. Telekomunikasi No.1, Sukapura, Kec. Dayeuhkolot, Kabupaten Bandung, Jawa Barat 40257
                        </p>
                </div>
                <div className="tentang" >
                    <ul >
                        <li>Pelajari</li>
                        <li>Tentang Opportuneer</li>
                        <li>FAQ</li>
                        <li>Partner Kami</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}   