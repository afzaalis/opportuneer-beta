import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import "../Progress/progress.css";

export const Progress = () => {
  const navigate = useNavigate();

  const [jobTitle, setJobTitle] = useState("");
  const [location, setLocation] = useState("");
  const [jobType, setJobType] = useState("");
  const [jobRole, setJobRole] = useState("");

  const handleInputChange = (event, setter) => {
    setter(event.target.value);
  };

  const handleSearch = () => {
    const query = new URLSearchParams({
      jobTitle: jobTitle || "", 
      location: location || "",
      jobType: jobType || "",
      jobRole: jobRole || "",
    }).toString();
    
    navigate(`/pencarikerja?${query}`);
  };

  const goTesMinat = () => {
    navigate("/tesminat");
  };

  const goPelatihanSkill = () => {
    navigate("/pelatihanskill");
  };

  return (
    <>
      <Sidebar />
      <div className="container-barOpsi">
        {/* Bagian Tes Minat */}
        <div className="tesMinatBar">
          <h2>Hasil Tes Minat</h2>
          <p>
            Kenali minat karirmu dengan tes ini. Temukan bidang yang sesuai dengan
            minatmu.
          </p>
          <img src="../imgProgress/tesMinat.png" alt="" />
          <div className="hasilTesBar">
            <img src="../imgProgress/Rectangle.png" alt="" />
            <img src="../imgProgress/Rectangle.png" alt="" />
            <img src="../imgProgress/Rectangle.png" alt="" />
          </div>
          <div className="deskripsiHasilTes">
            <div className="hasilTes">
              <div className="1">
                <img src="../imgProgress/senimanIcon.png" alt="" />
                <h4 className="titleHasilTes">Seniman</h4>
                <p className="deskHasilTes">kreatif dan imajinatif</p>
              </div>
              <div className="2">
              <img src="../imgProgress/senimanIcon.png" alt="" />
              <h4 className="titleHasilTes">Seniman</h4>
                <p className="deskHasilTes">kreatif dan imajinatif</p>
              </div>
              <div className="3">
              <img src="../imgProgress/senimanIcon.png" alt="" />
              <h4 className="titleHasilTes">Seniman</h4>
                <p className="deskHasilTes">kreatif dan imajinatif</p>
              </div>
            </div>
          </div>
          <button
            style={{
              textDecoration: "underline",
              backgroundColor: "#4066EF",
              color: "white",
              borderRadius: "0px",
              width: "177px",
              marginTop: "27px",
              border: "none",
              padding: "10px",
            }}
            onClick={goTesMinat}
          >
            Ikuti Tes
          </button>
        </div>

        {/* Bagian Pelatihan Skill */}
        <div className="pelatihanBar">
          <h2>Pelatihan Skill</h2>
          <p>
            Tingkatkan kemampuanmu dengan pelatihan. Lihat progres keterampilan
            baru.
          </p>
          <img src="../imgProgress/pelatihanSkill.png" alt="" />

          <div className="hasilTesBar">
            <img src="../imgProgress/Rectangle.png" alt="" />
            <img src="../imgProgress/Rectangle.png" alt="" />
            <img src="../imgProgress/Rectangle.png" alt="" />

            <div className="deskripsiHasilTes">
              <div className="hasilTesSkill">
                <img src="../imgProgress/publicSpeaking.png" alt="" />
                <img src="../imgProgress/publicSpeaking.png" alt="" />
                <img src="../imgProgress/publicSpeaking.png" alt="" />
                <ul>
                  <li>Esensial untuk komunikasi dan kepemimpinan.</li>
                  <li>Esensial untuk komunikasi dan kepemimpinan.</li>
                  <li>Esensial untuk komunikasi dan kepemimpinan.</li>
                </ul>
              </div>
            </div>

            <button
              style={{
                textDecoration: "underline",
                backgroundColor: "#4066EF",
                color: "white",
                borderRadius: "0px",
                width: "177px",
                marginTop: "27px",
                border: "none",
                padding: "10px",
              }}
              onClick={goPelatihanSkill}
            >
              Click here
            </button>
          </div>
        </div>

        {/* Bagian Pencarian Lowongan */}
        <div className="pencariLowonganBar">
          <h2>Pencarian Lowongan</h2>
          <p>
            Lacak aplikasi kerja yang telah kamu lamar. Cek status dan hasil
            pencarian.
          </p>
          <img src="../imgProgress/pencariLowongan.png" alt="" />
          <div className="container-pencarian">
            <div className="jobTitle">
              <input
                type="text"
                placeholder="Job Title"
                style={{ width: "200px", height: "50px" }}
                value={jobTitle}
                onChange={(e) => handleInputChange(e, setJobTitle)} // Simpan input jobTitle
              />
            </div>
            <div className="location">
              <input
                type="text"
                placeholder="Location"
                style={{ width: "200px", height: "50px" }}
                value={location}
                onChange={(e) => handleInputChange(e, setLocation)} // Simpan input location
              />
            </div>
            <div className="jobTypes">
              <input
                type="text"
                placeholder="Job Types"
                style={{ width: "200px", height: "50px" }}
                value={jobType}
                onChange={(e) => handleInputChange(e, setJobType)} // Simpan input jobType
              />
            </div>
            <div className="jobRoles">
              <input
                type="text"
                placeholder="Job Roles"
                style={{ width: "200px", height: "50px" }}
                value={jobRole}
                onChange={(e) => handleInputChange(e, setJobRole)} // Simpan input jobRole
              />
            </div>
            <button
              style={{
                color: "white",
                border: "1px solid black",
                borderRadius: "30px",
                width: "123px",
                backgroundColor: "#4066EF",
              }}
              onClick={handleSearch} 
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
