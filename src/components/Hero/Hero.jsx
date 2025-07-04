 import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import { Typewriter } from "react-simple-typewriter";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Mouniya,</h1>
        <p className={styles.description}>
          <span>
            <Typewriter
              words={[
                "Full-stack Developer",
                "Frontend Developer",
                "Competitive Coder",
                "Backend Developer",
              ]}
              loop={0} // infinite loop
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </p>
        <a href="mailto:sheikmouniya327@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/mouniya.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};