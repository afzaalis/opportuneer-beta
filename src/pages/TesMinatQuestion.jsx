import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router-dom";
import '../styles/tesminatquestion.css'

export const TesMinatQuestion = () => {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState([]);

  const questions = [
    {
      text: "1. Dalam aktivitas sehari-hari, kegiatan apa yang paling sering Anda nikmati?",
      options: [
        "Berbicara di depan umum atau memimpin diskusi",
        "Membuat desain atau karya seni",
        "Membuat rencana, mengorganisir kegiatan",
        "Membantu orang lain menyelesaikan masalah"
      ]
    },
    {
      text: "2. Ketika diberikan sebuah masalah, bagaimana biasanya Anda menyelesaikannya?",
      options: [
        "Mengambil keputusan secara cepat dengan mengandalkan intuisi",
        "Mencari solusi kreatif dengan menggambar atau menciptakan ide-ide baru",
        "Mengorganisir tim untuk menyelesaikan masalah bersama",
        "Membantu orang lain memahami dan menyelesaikan masalah mereka"
      ]
    },
    {
      text: "3. Aktivitas mana yang paling Anda sukai selama waktu luang?",
      options: [
        "Mengikuti debat atau berbicara di depan banyak orang",
        "Menggambar, melukis, atau menciptakan sesuatu",
        "Merencanakan acara atau perjalanan",
        "Menjadi relawan dalam kegiatan sosial"
      ]
    }
  ];

  const handleAnswerChange = (questionIndex, option) => {
    const updatedAnswers = [...answers];
    updatedAnswers[questionIndex] = option;
    setAnswers(updatedAnswers);
  };

  const handleSubmit = () => {
    navigate("/HasilTesMinat", { state: { answers } });
  };

  return (
    <>
      <Sidebar />
      <div className="question-container">
        <h3>Selamat Mengerjakan</h3>
        <p style={{ color: '#666D80' }}>
          Anda dapat mencoba untuk mencari tahu mengenai minat dan bakat yang anda inginkan.
        </p>

        {questions.map((question, questionIndex) => (
          <div key={questionIndex} className="question-block">
            <p>{question.text}</p>
            <div className="options-container">
              {question.options.map((option, optionIndex) => (
                <div key={optionIndex} className="option-item">
                  <input
                    type="radio"
                    id={`question-${questionIndex}-option-${optionIndex}`}
                    name={`question-${questionIndex}`}
                    value={option}
                    onChange={() => handleAnswerChange(questionIndex, option)}
                  />
                  <label htmlFor={`question-${questionIndex}-option-${optionIndex}`}>
                    {option}
                  </label>
                </div>
              ))}
            </div>
          </div>
        ))}

        <button onClick={handleSubmit}>Submit</button>
      </div>
    </>
  );
};
