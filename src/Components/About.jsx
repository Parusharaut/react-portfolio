// About.jsx
import React from "react";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <div className={styles.wrapper}>
        {/* Image Section */}
        <div className={styles.imageContainer}>
          <img src="/assets/meme1.png" alt="Profile" className={styles.profileImg} />
        </div>

        {/* Text Section */}
        <div className={styles.content}>
          <h2 className={styles.title}>About Me</h2>
          <p className={styles.description}>
            I am a Computer Science student at the University of Louisiana at Monroe
            with a strong passion for cybersecurity, networking, and AI research.
            My focus is on understanding and improving security infrastructure and
            developing innovative AI-driven cybersecurity strategies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
