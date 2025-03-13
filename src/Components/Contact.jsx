import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../utils";

export const Contact = () => {
  // Function to scroll back to the top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className={styles.container} id="contact">
      <h2 className={styles.title}>Contact</h2>
      <div className={styles.contactWrapper}>

        {/* Email */}
        <div className={styles.contactItem}>
          <img src={getImageUrl("email.png")} alt="Email" className={styles.icon} />
          <a href="mailto:autumnwhispers12@gmail.com">Email</a>
        </div>

        {/* LinkedIn */}
        <div className={styles.contactItem}>
          <img src={getImageUrl("linkedin.png")} alt="LinkedIn" className={styles.icon} />
          <a href="https://www.linkedin.com/in/parusha-raut-64620a252/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>

        {/* GitHub */}
        <div className={styles.contactItem}>
          <img src={getImageUrl("git.png")} alt="GitHub" className={styles.icon} />
          <a href="https://github.com/Parusharaut" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>

      </div>

      {/* Back to Top Button */}
      <button className={styles.backToTop} onClick={scrollToTop}>
        ↑ Back to Top
      </button>
    </section>
  );
};

export default Contact;
