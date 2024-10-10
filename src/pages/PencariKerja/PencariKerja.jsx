import React, { useEffect, useState } from "react";
import { useLocation,useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import '../PencariKerja/pencarikerja.css';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export const PencariKerja = () => {
  const query = useQuery();
  const [jobResults, setJobResults] = useState([]);
  const [selectedJobIndex, setSelectedJobIndex] = useState(null);
  const [checkboxChecked, setCheckboxChecked] = useState(false); // State untuk checkbox
  const [showModal, setShowModal] = useState(false); // State untuk modal

  const jobs = [
    { 
      image:"../imgPencariKerja/apple.png", 
      title: "Frontend Developer", 
      location: "Jakarta", 
      type: "Full-time", 
      role: "Software Developer",
      responsibilities: "Membangun komponen UI yang dapat digunakan kembali, berkolaborasi dengan tim desainer.",
      requirements: "Pengalaman 3+ tahun dalam pengembangan Frontend, mahir dengan React.js." 
    },
    { 
      image:"../imgPencariKerja/huawei.png", 
      title: "Backend Engineer", 
      location: "Bandung", 
      type: "Part-time", 
      role: "Software Developer",
      responsibilities: "Merancang dan membangun sistem backend yang skalabel, berkolaborasi dengan frontend dan tim lainnya.",
      requirements: "Pengalaman 3+ tahun di Backend Development, mahir dalam Node.js." 
    },
    { 
      image:"../imgPencariKerja/redmi.png", 
      title: "UI/UX Designer", 
      location: "Remote", 
      type: "Full-time", 
      role: "Designer",
      responsibilities: "Membuat wireframes dan mockup, bekerja sama dengan tim pengembang.",
      requirements: "Pengalaman 2+ tahun sebagai UI/UX Designer, mahir dengan tools desain seperti Figma atau Sketch." 
    },
    { 
      image:"../imgPencariKerja/shopee.png", 
      title: "Data Analyst", 
      location: "Surabaya", 
      type: "Freelance", 
      role: "Business Analyst",
      responsibilities: "Menganalisis data bisnis, membuat laporan berkala.",
      requirements: "Pengalaman 2+ tahun dalam analisis data, familiar dengan SQL dan Excel." 
    },
  ];

  const jobTitle = query.get("jobTitle") || "";
  const location = query.get("location") || "";
  const jobType = query.get("jobType") || "";
  const jobRole = query.get("jobRole") || "";

  useEffect(() => {
    const filteredJobs = jobs.filter((job) => {
      return (
        (!jobTitle || job.title.toLowerCase().includes(jobTitle.toLowerCase())) &&
        (!location || job.location.toLowerCase().includes(location.toLowerCase())) &&
        (!jobType || job.type.toLowerCase().includes(jobType.toLowerCase())) &&
        (!jobRole || job.role.toLowerCase().includes(jobRole.toLowerCase()))
      );
    });
    setJobResults(filteredJobs);
  }, [jobTitle, location, jobType, jobRole]);

  const handleJobClick = (index) => {
    if (selectedJobIndex === index) {
      setSelectedJobIndex(null);
    } else {
      setSelectedJobIndex(index);
    }
  };

  const handleCheckboxChange = () => {
    setCheckboxChecked(!checkboxChecked);
  };

  const handleApplyClick = () => {
    if (checkboxChecked) {
      setShowModal(true); 
    } else {
      alert("Please agree to the terms and conditions."); // Pesan jika checkbox belum dicentang
    }
  };

  const handleCloseModal = () => {
    setShowModal(false); 
  };


  const navigate = useNavigate();

  const goToProgress = () => {
    navigate("/progress");
  }
  return (
    <>
      <Sidebar />
      <div className="main-content">
        <h1 style={{ textDecoration: 'underline' }}>Pencarian Lowongan</h1>

        <div className="job-results">
          {jobResults.length > 0 ? (
            jobResults.map((job, index) => (
              selectedJobIndex !== null && selectedJobIndex !== index ? null : (
                <div key={index} className="job-item">
                  <div 
                    className="job-header" 
                    onClick={() => handleJobClick(index)} 
                    style={{ cursor: 'pointer' }} 
                  >
                    {job.image ? (
                      <img
                        src={job.image}
                        alt={job.title}
                        className="job-image"
                        style={{ width: "50px", height: "50px", marginRight: "10px" }}
                      />
                    ) : (
                      <img
                        src="../imgPencariKerja/default.png"
                        alt="Default"
                        className="job-image"
                        style={{ width: "50px", height: "50px", marginRight: "10px" }}
                      />
                    )}
                    <h2>{job.title}</h2>
                    <p>Location: {job.location}</p>
                    <p>Type: {job.type}</p>
                    <p>Role: {job.role}</p>
                  </div>
                </div>
              )
            ))
          ) : (
            <p>Tidak ada lowongan yang sesuai dengan pencarian.</p>
          )}
        </div>

        {selectedJobIndex !== null && (
          <div className="job-details-container">
            <div className="responsibilities">
              <h3>Responsibilities</h3>
              <p>{jobResults[selectedJobIndex].responsibilities}</p>
            </div>
            <div className="requirements">
              <h3>Requirements</h3>
              <li>{jobResults[selectedJobIndex].requirements}</li>

              <div className="checkbox-container">
                <input
                  type="checkbox"
                  id={`agree-terms-${selectedJobIndex}`}
                  name={`agree-terms-${selectedJobIndex}`}
                  className="custom-checkbox" 
                  checked={checkboxChecked}
                  onChange={handleCheckboxChange}
                />
                <label htmlFor={`agree-terms-${selectedJobIndex}`}>
                  By clicking this button you agree to the terms & conditions
                </label>
              </div>

              <button className="apply-button" onClick={handleApplyClick}>
                <img src="../imgPencariKerja/tangan.png" alt="Apply Icon" className="button-icon" />
                Apply
              </button>
            </div>
          </div>
        )}

        {/* Modal */}
        {showModal && (
          <div className="modal">
            <div className="modal-content">
              <span className="close-button" onClick={handleCloseModal}>&times;</span>
              <img src="../imgPencariKerja/successfully.png" alt="" />
              <h2>You applied successfully!</h2>
              <p>Thank you for Applying!</p>
            <button onClick={goToProgress}>Continue</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default PencariKerja;
