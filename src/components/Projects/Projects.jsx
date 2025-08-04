import React from "react";
import styles from "./Projects.module.css";
import { getImageUrl } from "../../utils";

export const Projects = () => {
  return (
    <section className={styles.projectsSection} id="projects">
      <h2 className={styles.sectionTitle}>Projects</h2>

      {/* Project 1 (Image Left) */}
      <div className={styles.projectCard}>
        <img
          src={getImageUrl("projects/doctorpic.jpg")}
          alt="Doctor Booking System"
          className={styles.projectImage}
        />
        <div className={styles.projectContent}>
          <h3>Doctor Appointment Booking System</h3>
          <p>
            A responsive web app for booking doctor appointments with real-time
            search and filtering. Built using React.js and Tailwind CSS.
            Features include specialization filters and appointment scheduling.
            Deployed on Render with GitHub CI/CD.
          </p>
          <div className={styles.projectLinks}>
            <a
              href="https://medslot-irz3.onrender.com/"
              target="_blank"
              rel="noreferrer"
            >
              🔗 Live Demo
            </a>
            <a
              href="https://github.com/mouniyasheik/MedSlot"
              target="_blank"
              rel="noreferrer"
            >
              📁 Source Code
            </a>
          </div>
        </div>
      </div>

      {/* Project 2 (Image Right) */}
      <div className={styles.projectCard}>
         <img
          src={getImageUrl("projects/mernimg.jpg")}
          alt="AI Image Generator"
          className={styles.projectImage}
        />
        <div className={styles.projectContent}>
          <h3>AI Text-to-Image Generator</h3>
          <p>
            A full-stack app that generates images from user input using AI
            APIs. Developed with MERN stack for complete frontend and backend.
            RESTful APIs and image metadata stored in MongoDB. Live deployment
            with continuous updates via Render.
          </p>
          <div className={styles.projectLinks}>
            <a
              href="https://imagegen-client-mqmi.onrender.com/"
              target="_blank"
              rel="noreferrer"
            >
              🔗 Live Demo
            </a>
            <a
              href="https://github.com/mouniyasheik/ImageGen"
              target="_blank"
              rel="noreferrer"
            >
              📁 Source Code
            </a>
          </div>
        </div>
       
      </div>

      {/* Project 3 (Image Left) */}
      <div className={styles.projectCard}>
       <img
  src={getImageUrl("projects/prot.jpg")}
  alt="Portfolio Website"
  className={`${styles.projectImage} `}
/>

        <div className={styles.projectContent}>
          <h3>Portfolio Website</h3>
          <p>
            Designed and developed a responsive personal portfolio to showcase
            projects, experience, and technical skills. Implemented using
            React.js and CSS Modules, with clean UI, smooth scroll, and modern
            layout principles.
          </p>
          <div className={styles.projectLinks}>
            <a
              href="https://mouniya-portfolio.onrender.com"
              target="_blank"
              rel="noreferrer"
            >
              🔗 Live Demo
            </a>
            <a
              href="https://github.com/mouniyasheik/Portfolio"
              target="_blank"
              rel="noreferrer"
            >
              📁 Source Code
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
