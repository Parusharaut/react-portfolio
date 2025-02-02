import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../utils";

export const Hero = () => {
    return (
      <section className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>Hi, I'm Parusha</h1>
          <p className={styles.description}>
            A Senior at University of Louisiana at Monroe
          </p>
          <a 
            href="https://drive.google.com/file/d/11lrkcBHZEjXM3M3f7gayqBFg9dMG4e_9/view?usp=sharing" 
            className={styles.contactBtn} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Resume
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
