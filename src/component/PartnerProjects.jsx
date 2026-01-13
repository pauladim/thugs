// src/components/PartnerProjects.jsx
import React from 'react';
import './PartnerProjects.css';

const PartnerProjects = () => {
  const projects = [
    {
      title: "MEET DR.WALES",
      description:
        "Doctor Olawale ogunlana,popularly known as Dr.Wales, he's a medical doctor, a public health advocate and one of the four wellness ambassadors for TikTok in the sub saharan Africa, Dr.Wales is passionate about using digital platforms to promote health, wellness and to drive poicy change.",
      image: "/drwales.jpeg",
      href:"https://www.instagram.com/reel/DRrnBQ_AkS-/?igsh=dzJ3eG8xZmRhbXo3",
      buttonText: "Watch Video",
    },
    {
      title: "PURCHASE DRUGFREE MERCH",
      description:
        "As a part of our campaign we've created DrugFree'20 merch, not just as shirts, but as a symbols of hope and commitment. Every purchase is a contribution to someone's journey towards recovery.I invite you WANT FAMILY to WEAR HOPE..",
      image: "/notthugscamp.jpeg",
      href:"https://Wearenothugs.com",
      buttonText: "Click to Order",
    },
    {
      title: "MEET DR.SHINA",
      description:
        "Dr. Ajidahun olusina popularly known as bearded Dr.sina is a medical doctor, a digital strategist, and health influencer, As the co-founder of Priv-Health, he's dedicated to promoting health and wellness. While hosting community health talks to educate many people on the effects of drug and substance abuse Dr. Sina will be sharing valuable information to help us combat this issue.",
      image: "/drshina.jpeg",
      href:"https://www.instagram.com/reel/DQ6t8wlAiyo/?igsh=MWpqNnlyOWRkOG9pdA==",
      buttonText: "Watch Video",
    },
  ];

  const handleButtonClick = (href) => {
    window.open(href, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="partner-projects">
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="card-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <button 
                className="view-button" 
                onClick={() => handleButtonClick(project.href)}
              >
                {project.buttonText}
              </button>
            </div>
            <div className="image-wrapper">
              <img src={project.image} alt={project.title} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PartnerProjects;