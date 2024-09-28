import React from "react";
import Sidebar from "../components/Sidebar";
import { useLocation, useNavigate } from "react-router-dom";
import '../styles/hasiltesminat.css'

export const HasilTesMinat = () => {
    const location = useLocation();
    const { answers } = location.state;

    const getJobSuggestions = (answers) => {
        const jobs = {
            "Berbicara di depan umum atau memimpin diskusi": { title: "Copywriter ", img: "../imgPeluangKarir/copywriter.png" },
            "Membuat desain atau karya seni": { title: "Editor", img: "../imgPeluangKarir/editor.png" },
            "Membuat rencana, mengorganisir kegiatan": { title: "Jurnalis", img: "../imgPeluangKarir/jurnalis.png" },
            "Membantu orang lain menyelesaikan masalah": { title: "Programmer", img: "../imgPeluangKarir/programmer.png" },
            "Mengambil keputusan secara cepat dengan mengandalkan intuisi": { title: "Entrepreneur", img: "../imgPeluangKarir/enterpernur.png" },
            "Mencari solusi kreatif dengan menggambar atau menciptakan ide-ide baru": { title: "Creative Director", img: "../imgPeluangKarir/editor.png" },
            "Mengorganisir tim untuk menyelesaikan masalah bersama": { title: "Team Leader", img: "../imgPeluangKarir/publicspeaker.png" },
            "Membantu orang lain memahami dan menyelesaikan masalah mereka": { title: "Consultant", img: "../imgPeluangKarir/publicspeaker.png" },
            "Menggambar, melukis, atau menciptakan sesuatu": { title: "Seniman", img: "../imgPeluangKarir/seniman.png" },
            "Merencanakan acara atau perjalanan": { title: "Event Planner", img: "../imgPeluangKarir/publicspeaker.png" },
            "Menjadi relawan dalam kegiatan sosial": { title: "Doctor", img: "../imgPeluangKarir/publicspeaker.png" },
            "Mengikuti debat atau berbicara di depan banyak orang":{ title: "Entrepreneur", img: "../imgPeluangKarir/enterpernur.png" }

        };

        return answers.map(answer => jobs[answer] || { title: "Tidak Ada Saran", img: "../path/to/default-image.png" });
    };

    const suggestedJobs = getJobSuggestions(answers);
    const navigate = useNavigate();

    const goToPeluangKarir = () => {
        navigate("/peluangkarir", { state: { suggestedJobs } });
    }

    return (
        <>
            <Sidebar />
            <div className="container">
                <div className="judul"><h2>Hasil Tes</h2></div>
                <div className="desk">
                    <p>Anda dapat mencoba untuk mencari tahu mengenai minat dan bakat yang anda inginkan.</p>
                </div>

                <div className="hasil">
                    {suggestedJobs.map((job, index) => (
                        <div key={index} className="job-card">
                            <p>{job.title}</p>
                        </div>
                    ))}
                </div>
                <button onClick={goToPeluangKarir}>Cari Loker</button>
            </div>
        </>
    );
};
