import React from "react";
import styles from "./Experience.module.css";

export const Experience = () => {
  return (
    <section className={styles.experienceSection} id="experience">
      <h2 className={styles.sectionTitle}>Experience</h2>

      {/* DSA Internship */}
      <div className={styles.experienceCard}>
        <div className={styles.headerRow}>
          <h3>
            DSA Intern @{" "}
            <a
              href="https://learnyard.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.companyLink}
            >
              Learnyard Pvt Ltd
            </a>
          </h3>
          <a
            href="https://drive.google.com/file/d/1S5jSthqPaUp7RnEff8_0FdKPKzTlPaNA/view"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.certificateBtn}
          >
            📄 Certificate
          </a>
        </div>
        <p className={styles.duration}>Jan 2024 – Jul 2024 · Remote</p>
        <ul className={styles.details}>
          <li>
            Solved 150+ DSA problems focused on runtime optimization and space
            efficiency.
          </li>
          <li>
            Reduced average solution runtime by 15% through algorithm analysis
            and optimization.
          </li>
          <li>
            Collaborated with peers on daily challenges and logic-building
            exercises.
          </li>
          <li>
            Built reusable templates and documented logic for common DSA
            patterns.
          </li>
        </ul>
      </div>

      {/* MERN Stack Internship */}
      <div className={styles.experienceCard}>
        <div className={styles.headerRow}>
          <h3>
            MERN Stack Intern @{" "}
            <a
              href="https://www.thesmartbridge.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.companyLink}
            >
              APSCHE & Smart Bridge
            </a>
          </h3>
        </div>
        <p className={styles.duration}>May 2024 – Present · Remote</p>
        <ul className={styles.details}>
          <li>
            Currently building end-to-end web applications using the MERN stack.
          </li>
          <li>
            Gained hands-on experience with MongoDB, Express, React, and Node.js.
          </li>
          <li>
            Working on CRUD-based dashboards with RESTful APIs and responsive
            frontend UIs.
          </li>
          <li>
            Collaborating in agile sprints and version control using GitHub.
          </li>
        </ul>
      </div>
    </section>
  );
};
