import React from "react";
import styles from "./Achievement.module.css";

export const Achievement = () => {
  return (
    <section className={styles.container} id="achievements">
      <h2 className={styles.title}>Achievements</h2>
      <div className={styles.achievementsWrapper}>

        {/* Competition 1 - TechXpo */}
        <div className={styles.achievementCard}>
          <h3>🏆 Best Overall Project - TechXpo</h3>
          <p>
            Won the **Best Overall Project** award at **TechXpo** (GDSC ULM) for "SketchMan," a project exploring **CNNs and GANs** in deep learning.
          </p>
        </div>

        {/* Competition 2 - DT Cyber Games */}
        <div className={styles.achievementCard}>
          <h3>🏆 4th Place - DT Cyber Games</h3>
          <p>
            Competed in **DT Cyber Games: Bayou Hackathon** as part of **Team Eqyptian Database**, securing **4th place** among 50+ teams nationwide.
          </p>
        </div>

        {/* Certification 1 */}
        <div className={styles.achievementCard}>
          <h3>✅ Certified Ethical Hacker</h3>
          <p>Earned **Ethical Hacking Certification** from Udemy, strengthening skills in **penetration testing & cybersecurity**.</p>
        </div>

        {/* Certification 2 */}
        <div className={styles.achievementCard}>
          <h3>✅ Endpoint Security - CISCO</h3>
          <p>Completed **CISCO Endpoint Security Certification**, gaining expertise in **network security & threat prevention**.</p>
        </div>

        {/* Certification 3 */}
        <div className={styles.achievementCard}>
          <h3>✅ Introduction to Cybersecurity - CISCO</h3>
          <p>Certified by **CISCO** for foundational **cybersecurity principles, risk management, and secure networking**.</p>
        </div>

      </div>
    </section>
  );
};

export default Achievement;
