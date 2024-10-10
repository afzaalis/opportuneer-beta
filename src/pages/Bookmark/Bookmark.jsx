import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import "../Bookmark/bookmark.css";


const bookmarks = [
    {
      title: "Basic SQL & Data Visualization",
      daysLeft: 3,
      date: "15 Jun 2024",
      comments: 159,
      likes: 1000,
      views: "1K",
      image: "../imgBookmark/sqlBookmark.png",
      content: "Basic SQL & Data Visualization",
      contentDetail: `
        Dalam kelas Basic SQL and Data Visualization, peserta akan mempelajari:
        1 Dasar SQL: Penggunaan perintah dasar seperti SELECT, JOIN, GROUP BY, dan ORDER BY untuk mengambil dan mengelola data dari database.
        2 Manipulasi Data: Menggabungkan tabel, melakukan agregasi, serta membuat query untuk analisis lebih lanjut.
        3 Visualisasi Data: Membuat grafik dan dashboard menggunakan alat seperti Tableau atau Power BI, serta memilih visualisasi yang tepat.
        4 Project Akhir: Menggabungkan SQL dan visualisasi data untuk menganalisis dan mempresentasikan data dalam sebuah project praktis.
        Kelas ini ideal bagi pemula yang ingin memahami SQL dan dasar visualisasi data.
      `,
    },
    {
      title: "Ms. Excel: Introduction",
      daysLeft: 5,
      date: "27 Oct 2024",
      comments: 143,
      likes: 4000,
      views: "4K",
      image: "../imgBookmark/introductionBookmark.png",
      content: "Ms. Excel: Introduction",
      contentDetail: `
        Kelas ini mencakup pengenalan dasar Microsoft Excel, termasuk:
        - Membuat dan memformat worksheet
        - Memahami fungsi dasar seperti SUM, AVERAGE, COUNT, dll.
        - Manajemen data dasar dan penggunaan filter.
      `,
    },
    {
      title: "Ms. Excel: Aggregate Data",
      daysLeft: 7,
      date: "2 Des 2024",
      comments: 201,
      likes: 5000,
      views: "5K",
      image: "../imgBookmark/aggregateBookmark.png",
      content: "Ms. Excel: Aggregate Data",
      contentDetail: `
        Di kelas ini, peserta akan belajar cara mengelola dan mengolah data dalam jumlah besar di Excel dengan fungsi seperti:
        - SUMIF, COUNTIF, dan penggunaan pivot table.
        - Menyiapkan laporan dengan visualisasi data.
      `,
    },
    {
      title: "Ms. Excel: Data Manipulation I",
      daysLeft: 9,
      date: "10 Aug 2024",
      comments: 170,
      likes: 9000,
      views: "9K",
      image: "../imgBookmark/excelBookmark.png",
      content: "Ms. Excel: Data Manipulation I",
      contentDetail: `
        Kelas ini fokus pada manipulasi data tingkat lanjut di Excel dengan penggunaan:
        - VLOOKUP, HLOOKUP, dan INDEX-MATCH.
        - Formula array dan analisis data lanjutan.
      `,
    },
  ];

export const Bookmark = () => {
  const [activeBookmark, setActiveBookmark] = useState(null);

  const toggleBookmark = (index) => {
    if (activeBookmark === index) {
      setActiveBookmark(null); 
    } else {
      setActiveBookmark(index); 
    }
  };

  return (
    <>
      <Sidebar />
      <div className="bookmark-page">
        <div className="bookmark-list">
          {bookmarks.map((bookmark, index) => (
            <React.Fragment key={index}>
              {/* Tampilkan item bookmark jika tidak ada bookmark yang aktif atau bookmark ini yang aktif */}
              {activeBookmark === null || activeBookmark === index ? (
                <div
                  className="bookmark-item"
                  onClick={() => toggleBookmark(index)}
                >
                  <img
                    src={bookmark.image}
                    alt={bookmark.title}
                    className="bookmark-image"
                  />
                  <div className="bookmark-info">
                    <h2>{bookmark.title}</h2>
                    <p>
                      {bookmark.daysLeft} days left • {bookmark.date}
                    </p>
                    <div className="bookmark-meta">
                      <span>
                        <img src="../imgBookmark/share.png" alt="comments" />
                        {bookmark.comments}
                      </span>
                      <span>
                        <img src="../imgBookmark/comment.png" alt="likes" />
                        {bookmark.likes}
                      </span>
                      <span>
                        <img src="../imgBookmark/viewers.png" alt="views" />
                        {bookmark.views}
                      </span>
                    </div>
                  </div>
                  <div className="bookmark-actions">
                    <i className="fas fa-trash"></i>
                    <i className="fas fa-user"></i>
                  </div>
                </div>
              ) : null}

              {/* Konten detail yang muncul di bawah bookmark yang aktif */}
              {activeBookmark === index && (
                <div className="bookmark-content">
                    <img src="../imgBookmark/kontenSql.png" alt="" />
                  <p>{bookmark.content}</p>
                  <p>{bookmark.contentDetail}</p>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
};

export default Bookmark;
