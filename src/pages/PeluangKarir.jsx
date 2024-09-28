import React from "react";
import Sidebar from "../components/Sidebar";
import { useLocation,useNavigate } from "react-router-dom";
import '../styles/peluangkarir.css';

export const PeluangKarir = () => {
    const location = useLocation();
    const { suggestedJobs } = location.state;

    const navigate = useNavigate();

    const goToProgress = () => {
        navigate("/progress")
    }
    return (
        <>
            <Sidebar />
            <div className="container">
                <div className="judul">
                    <h2>Beberapa Lowongan Pekerjaan Untuk Anda</h2>
                    <p>Anda dapat mendapatkan pekerjaan sesuai dengan minat bakat anda</p>
                </div>
                <div className="job-list">
                    {suggestedJobs.map((job, index) => (
                        <div key={index} className="job-card">
                            <img src={job.img} alt={job.title} width={320} height={240} />
                        </div>
                    ))}
                </div>
                <button
                    onClick={goToProgress}
                >Sesuai minat</button>
            </div>
        </>
    );
};
