import React from "react";
import styles from "./Achievement.module.css";
import { getImageUrl } from "../utils";

export const Achievement = () => {
  return (
    <section className={styles.container} id="achievements">
      <h2 className={styles.title}>Achievements</h2>
      <div className={styles.achievementsWrapper}>

      {/* Competition 1 - Best Student Worker */}
      <div className={styles.achievementCard}>
          <h3>🏆Best Student Worker</h3>
          <p>
          Awarded Best Student Worker of the Year in the IT department for outstanding performance, technical expertise, and dedication to supporting IT operations 
          </p>
          <div className={styles.projectLinks}>
          <a 
              href={getImageUrl("award.jpg")} // Path to the image
              className={styles.sourceBtn} 
              target="_blank" 
              rel="noopener noreferrer"
             >
              Source
          </a>
          </div>
        </div>

        {/* Competition 2 - TechXpo */}
        <div className={styles.achievementCard}>
          <h3>🏆 Best Overall Project - TechXpo</h3>
          <p>
            Won the Best Overall Project award at TechXpo (GDSC ULM) for "SketchMan," a project exploring CNNs and GANs in deep learning.
          </p>
          <div className={styles.projectLinks}>
          <a 
              href={getImageUrl("sketch.png")} // Path to the image
              className={styles.sourceBtn} 
              target="_blank" 
              rel="noopener noreferrer"
             >
              Source
          </a>
          </div>
        </div>

        {/* Competition 3 - DT Cyber Games */}
        <div className={styles.achievementCard}>
          <h3>🏆 4th Place - DT Cyber Games</h3>
          <p>
            Competed in "DT Cyber Games: Bayou Hackathon" as part of Team Eqyptian Database, securing 4th place among 50+ teams nationwide.
          </p>
          <div className={styles.projectLinks}>
          <a 
              href={getImageUrl("dt.jpg")} // Path to the image
              className={styles.sourceBtn} 
              target="_blank" 
              rel="noopener noreferrer"
             >
              Source
          </a>
          </div>
        </div>

         {/* Certification 1 */}
         <div className={styles.achievementCard}>
          <h3>✅ COMPTIA Security+ </h3>
          <p>Completed CompTIA Security+ Certification, gaining expertise in cybersecurity fundamentals, risk management, threat analysis, and network security.</p>
          <div className={styles.projectLinks}>
          <a 
              href= "https://www.credly.com/badges/bd6eee33-007d-4a07-80c2-d829d41b9890/linked_in_profile"
              className={styles.sourceBtn} 
              target="_blank" 
              rel="noopener noreferrer"
             >
              Source
          </a>
          </div>
        </div>

        {/* Certification 2 */}
        <div className={styles.achievementCard}>
          <h3>✅ Endpoint Security - CISCO</h3>
          <p>Completed **CISCO Endpoint Security Certification**, gaining expertise in network security & threat prevention.</p>
          <div className={styles.projectLinks}>
          <a 
              href= "https://www.credly.com/badges/ea73213f-d4df-4bb4-ab3c-6a7a90b5096e/linked_in_profile"
              className={styles.sourceBtn} 
              target="_blank" 
              rel="noopener noreferrer"
             >
              Source
          </a>
          </div>
        </div>

        {/* Certification 3 */}
        <div className={styles.achievementCard}>
          <h3>✅ Introduction to Cybersecurity - CISCO</h3>
          <p>Certified by **CISCO** for foundational cybersecurity principles, risk management, and secure networking.</p>
          <div className={styles.projectLinks}>
          <a 
             href="https://www.credly.com/badges/300f5ed5-add9-46cb-8b11-d78d027e89be/linked_in_profile"
             className={styles.sourceBtn} 
             target="_blank" 
             rel="noopener noreferrer"
            >
             Source
         </a>
         </div>
        </div>

      </div>
    </section>
  );
};

export default Achievement;
