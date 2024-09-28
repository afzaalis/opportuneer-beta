import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import '../styles/pelatihanskill.css'

export const PelatihanSkillPage = () => {
    const [searchInput, setSearchInput] = useState("");
    const [selectedTraining, setSelectedTraining] = useState(null);
    const [selectedMaterial, setSelectedMaterial] = useState(null); // Menyimpan materi yang dipilih
    const [trainingList] = useState([
        { name: "CapCut", videos: 120, modules: 60, quizzes: 60, materials: [
            { title: "Tutorial Dasar Editing", content: "Isi materi tentang tutorial dasar editing di CapCut." },
            { title: "Cara Layouting di CapCut", content: "Isi materi tentang cara layouting di CapCut." },
        ]},
        { name: "Canva", videos: 100, modules: 50, quizzes: 55, materials: [
            { title: "Desain Dasar di Canva", content: "Isi materi tentang desain dasar di Canva." },
            { title: "Cara Membuat Presentasi di Canva", content: "Isi materi tentang membuat presentasi di Canva." },
        ]},
        { name: "Figma", videos: 90, modules: 45, quizzes: 40, materials: [
            { title: "Pengenalan Figma", content: "Isi materi tentang pengenalan dasar Figma." },
            { title: "Cara Membuat Prototype", content: "Isi materi tentang cara membuat prototype di Figma." },
        ]},
        { name: "Photoshop", videos: 110, modules: 60, quizzes: 65, materials: [
            { title: "Tutorial Dasar Photoshop", content: "Isi materi tentang tutorial dasar Photoshop." },
            { title: "Cara Membuat Desain di Photoshop", content: "Isi materi tentang cara membuat desain di Photoshop." },
        ]},
        { name: "PHP", videos: 80, modules: 40, quizzes: 50, materials: [
            { title: "Dasar Pemrograman PHP", content: "Isi materi dasar pemrograman PHP." },
            { title: "Cara Membuat Website dengan PHP", content: "Isi materi tentang membuat website dengan PHP." },
        ]},
        { name: "JavaScript", videos: 80, modules: 40, quizzes: 50, materials: [
            { title: "Pengantar JavaScript", content: "Isi materi tentang pengantar JavaScript." },
            { title: "Cara Membuat Aplikasi Interaktif", content: "Isi materi tentang cara membuat aplikasi interaktif dengan JavaScript." },
        ]},
        { name: "Python", videos: 80, modules: 40, quizzes: 50, materials: [
            { title: "Dasar Pemrograman Python", content: "Isi materi dasar pemrograman Python." },
            { title: "Membangun Machine Learning dengan Python", content: "Isi materi tentang machine learning menggunakan Python." },
        ]},
        { name: "PremierePro", videos: 80, modules: 40, quizzes: 50, materials: [
            { title: "Dasar Editing Video di PremierePro", content: "Isi materi dasar editing di PremierePro." },
            { title: "Cara Membuat Video Cinematic", content: "Isi materi tentang membuat video cinematic di PremierePro." },
        ]},
    ]);

    const handleSearchChange = (event) => {
        setSearchInput(event.target.value);
    };

    const filteredTrainings = trainingList.filter((training) =>
        training.name.toLowerCase().includes(searchInput.toLowerCase())
    );

    const visibleTrainings = searchInput === "" ? filteredTrainings.slice(0, 5) : filteredTrainings;

    const handleTrainingClick = (training) => {
        setSelectedTraining(training); // Set training yang dipilih
        setSelectedMaterial(null); // Reset materi yang dipilih jika memilih training baru
    };

    const handleMaterialClick = (material) => {
        setSelectedMaterial(material); // Set materi yang dipilih
    };

    return (
        <div className="pelatihan-skill-container">
            <Sidebar />
            <div className="main-content">
                {/* Jika tidak ada training yang dipilih, tampilkan daftar pelatihan */}
                {!selectedTraining ? (
                    <>
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

                        {/* Daftar Pelatihan */}
                        <div className="training-list">
                            {visibleTrainings.map((training, index) => (
                                <div
                                    key={index}
                                    className="training-item"
                                    onClick={() => handleTrainingClick(training)} // Saat klik training
                                >
                                    <div className="training-logo">
                                        <img
                                            src={`/imgPelatihanSkill/${training.name}.png`}
                                            alt={training.name}
                                        />
                                    </div>
                                    <div className="training-info">
                                        <h2>{training.name}</h2>
                                        <div className="training-meta">
                                            <span>📹 {training.videos} Video</span>
                                            <span>📖 {training.modules} Modul</span>
                                            <span>📝 {training.quizzes} Quiz</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Tombol Temukan Sesuai Minat */}
                        <button className="minat-btn">
                            <img src="../imgPelatihanSkill/imgMinatBtn.png" alt="" />
                            Temukan sesuai minat saya!
                        </button>
                    </>
                ) : selectedMaterial ? (
                    // Jika materi dipilih, tampilkan konten materi
                    <div className="material-detail">
                        {/* Gambar sebagai tombol kembali ke materi */}
                        <div className="back-btn-container">
                            <img
                                src={`/imgPelatihanSkill/${selectedTraining.name}.png`}
                                alt="Back"
                                className="back-btn-img"
                                onClick={() => setSelectedMaterial(null)} // Kembali ke daftar materi
                            />
                        </div>

                        <h2>{selectedMaterial.title}</h2>
                        <p>{selectedMaterial.content}</p>
                    </div>
                ) : (
                    <div className="training-detail">
                        {/* Gambar sebagai tombol kembali ke daftar training */}
                        <div className="back-btn-container">
                            <img
                                src={`/imgPelatihanSkill/${selectedTraining.name}.png`}
                                alt="Back"
                                className="back-btn-img"
                                onClick={() => setSelectedTraining(null)} // Kembali ke daftar pelatihan
                            />
                        </div>

                        <h2>{selectedTraining.name}</h2>
                        
                        {/* <p>📹 {selectedTraining.videos} Video tersedia</p>
                        <p>📖 {selectedTraining.modules} Modul pelatihan</p>
                        <p>📝 {selectedTraining.quizzes} Quiz untuk latihan</p> */}

                        {/* Daftar Materi */}
                        <div className="material-list">
                            {selectedTraining.materials.map((material, index) => (
                                <div
                                    key={index}
                                    className="material-item"
                                    onClick={() => handleMaterialClick(material)} // Klik untuk melihat materi
                                >
                                    <h4>{material.title}</h4>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PelatihanSkillPage;
