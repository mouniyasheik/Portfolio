import React from "react";
import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <section className={styles.contactSection} id="contact">
      <h2 className={styles.sectionTitle}>Contact Me</h2>

      <p className={styles.contactText}>
        Excited to collaborate, learn, and grow — reach out, and let’s make an
        impact together! I’m open to discussing projects, internships, or any
        opportunity where I can contribute, learn, and create something
        valuable. Let’s build the future — one idea at a time.
      </p>

      <a href="mailto:sheikmouniya327@gmail.com" className={styles.emailButton}>
        Send Email
      </a>

      <div className={styles.socialLinks}>
        <a
          href="https://github.com/mouniyasheik"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/mouniya/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
       

      </div>
    </section>
  );
};
