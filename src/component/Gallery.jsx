// src/components/Gallery.jsx
import React from 'react';
import './Gallery.css';

const Gallery = () => {
  const projects = [
    {
      title: "Meet Adedayo Ademosu",
      description:
        " Adedayo, a 26-year-old Yabatech student of Banking and finanace struggling with drug abuse.",
      image: "/dayodirty.jpeg",
      buttonText: "WATCH VIDEO",
      href: "https://www.instagram.com/reel/DOoa83rgmyG/?igsh=dWJ6MGY3bGgzMnB3" // Example YouTube link
    },
    {
      title: "Meet Kehinde Idowu",
      description:
        "Kehinde Idowu, a 35 years old Graduate of Industrial Relations & Personnel Mgmt (University of Pretoria), she was a model in South Africa. Lost her dad, struggled with grief which led her to Drug-Substance addiction.",
      image: "/kehidediry.jpeg",
      buttonText: "WATCH VIDEO",
      href: "https://www.instagram.com/reel/DSdFbTQgsa5/?igsh=MWtjdTN1c2s5N3Y0ZQ=="
    },
    {
      title: "Meet Sandra Obianuju",
      description:
        "Sandra Obianuju, 28, a BSc student of Inteligence and Security Studies at Afe Babalola University (ABUAD) faced depression and peer pressure that led her to the streets of Mushin Idioro.Despite her struggles, she has a strong passion for cooking",
      image: "/sandradirty.jpeg",
      buttonText: "WATCH VIDEO",
      href: "https://www.instagram.com/reel/DMauvz9xDVf/?igsh=MWFsZzIxYWFpeHk1Zw==" // Example YouTube link
    },
    {
      title: "UPDATE ON ADEDAYO ADEMOSU",
      // description:
      //   "Meet Blessing, a 32-year-old lady who has faced significant Challenges in her life. Due to a combination of drug abuse and family problems",
      image: "/dayoupdate.jpeg",
      buttonText: "WATCH VIDEO",
      href: "https://www.instagram.com/reel/DR4ZqNDAmar/?igsh=MTAzbTR5NXdqZXFxbQ==" // Example YouTube link
    },
    {
      title: "UPDATE ON KEHINDE IDOWU",
      // description:
      //   "Queensly, a 36-year-old mom of two, struggling to overcome addiction, trauma & pain. A Bsc degree holder from BENSON IDAHOSA UNIVERSITY",
      image: "/kehindeupdate.jpeg",
      buttonText: "WATCH VIDEO",
      href: "https://www.instagram.com/reel/DS2nJK1AizE/?igsh=Z3VqdHVpemhmM2lu" // Example YouTube link
    },
    {
      title: "UPDATE ON SANDRA OBIANUJU",
      // description:
      //   "The story of Okiki Bireowo, a 27years old skilled fashion designer. Life happened and he ended on the street of Lagos.",
      image: "/sandraupdate.jpeg",
      buttonText: "WATCH VIDEO",
      href: "https://www.instagram.com/reel/DOD1BxaAgvk/?igsh=enI5Nmc3a2R3NmF1" // Example YouTube link
    },
  ];

  return (
    <section className="gallery-section">
      <div className="gallery-container">
        {projects.map((project, index) => (
          <div key={index} className="gallery-card">
            <div className="card-content">
              <h3 className="card-title">{project.title}</h3>
              <p className="card-description">{project.description}</p>
              <a href={project.href} target="_blank" rel="noopener noreferrer" className="view-button-link">
                <button className="view-button">{project.buttonText}</button>
              </a>
            </div>
            <div className="card-image-wrapper">
              <img src={project.image} alt={project.title} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;