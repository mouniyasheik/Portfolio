import React from "react";
import styles from "./About.module.css";


export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>
        About <span className={styles.highlight}>Me</span>
      </h2>

      <div className={styles.content}>
        <p className={styles.intro}>
          Hello! I'm Mouniya, a self-motivated developer with experience in
          full-stack development, programming, and building intuitive digital
          experiences. I thrive in collaborative environments and love
          transforming ideas into polished solutions. My journey has been shaped
          by curiosity, persistence, and a strong desire to continuously learn
          and improve.
        </p>

        <p className={styles.intro}>
          I'm excited to grow in dynamic teams and contribute to impactful
          projects that challenge and inspire me.
        </p>

        <div className={styles.bottomRow}>
          <div className={styles.badges}>
            <span>🎓 Final Year B.Tech CSE</span>
            <span>📊 CGPA: 8.28 / 10</span>
          </div>

          <div className={styles.resumeWrapper}>
           <a
  href="/mouniya_resume1.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className={styles.resumeButton}
>
  📄 View My Resume
</a>
          </div>
        </div>
      </div>
    </section>
  );
};
