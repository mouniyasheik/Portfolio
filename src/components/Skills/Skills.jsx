
   import React from 'react';
import styles from './Skills.module.css';

export  const Skills = () => {
  return (
    <section className={styles.skillsSection} id="skills">
      <h2 className={styles.sectionTitle}>Skills & Tech Stack</h2>

      {/* Programming Languages */}
      <div className={styles.skillGroup}>
        <h3>Programming Languages</h3>
        <div className={styles.badges}>
          <span>C++</span>
          <span>Java</span>
          <span>Python</span>
          <span>C</span>
        </div>
      </div>

      {/* Frontend & Backend */}
      <div className={styles.skillGroup}>
        <h3>Frontend & Backend</h3>
        <div className={styles.badges}>
          <span>React</span>
          <span>Next.js</span>
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>Node.js</span>
          <span>Express.js</span>
          <span>Tailwind CSS</span>
        </div>
      </div>

      {/* Databases */}
      <div className={styles.skillGroup}>
        <h3>Databases</h3>
        <div className={styles.badges}>
          <span>MongoDB</span>
          <span>SQL</span>
        </div>
      </div>

      {/* Tools */}
      <div className={styles.skillGroup}>
        <h3>Tools</h3>
        <div className={styles.badges}>
          <span>GitHub</span>
          <span>VS Code</span>
          <span>Google Colab</span>
          <span>Git</span>
        </div>
      </div>

      {/* Soft Skills */}
      <div className={styles.skillGroup}>
        <h3>Soft Skills</h3>
        <div className={styles.badges}>
          <span>Teamwork</span>
          <span>Problem Solving</span>
          <span>Communication</span>
          <span>Adaptability</span>
        </div>
      </div>
    </section>
  );
};

// export default Skills;
