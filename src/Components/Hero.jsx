// Hero.jsx
import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../utils";

export const Hero = () => {
    return (
      <section className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>Hi, I'm Parusha</h1>
          <p className={styles.description}>
            A Senior at Univeristy of Louisiana at Monroe
          </p>
          <a href="mailto:autumnwhispers12@email.com" className={styles.contactBtn}>
            Contact Me
          </a>
        </div>
        <img
          src={getImageUrl("meme.png")}
          alt="Hero image of me"
          className={styles.heroImg}
        />
        
      </section>
    );
};

export default Hero;
