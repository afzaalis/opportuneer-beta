import React from "react";
import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router-dom";
import '../styles/tesminat.css';

export const TesMinatPage = () => {
    const navigate = useNavigate();

    const goToQuestion = () => {
        navigate("/TesMinatQuestion");
    };

    return (
        <>
            <Sidebar />
            <div className="container">
                <div className="judul">
                    <h2>Tes Minat Bakat</h2>
                </div>
                <div className="desk">
                    <p>Anda dapat mencoba untuk mencari tahu mengenai minat dan bakat yang anda inginkan.</p>
                </div>
                <div className="gambar-intro">
                    <img src="../imgTesMinat/intro.png" alt="Intro" />
                </div>
                <div className="tombol-mulai">
                    <button onClick={goToQuestion}>Start</button>
                </div>
            </div>
        </>
    );
};
