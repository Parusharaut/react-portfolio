import React from "react";
import styles from "./Project.module.css";

export const Project = () => {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projectsWrapper}>
        {/* Project 1 */}
        <div className={styles.projectCard}>
          <div className={styles.projectContent}>
            <h3>P40-UNDERDOG Project </h3>
            <p><em>Paw-sitive | Spring 2025</em></p>
            <ul>
              <li>Enhanced security with session management and salting techniques and ensuring robust password protection</li>
              <li>Utilized MongoDB for secure data storage, enforcing best practices to protect sensitive information, reducing vulnerabilities, and minimizing unauthorized access risks.</li>
              <li>Applied security best practices at every stage of development, leveraging React for the frontend and Node.js with Express.js for the backend. Integrated bcrypt for password hashing, JWT (JSON Web Token) for authentication, and environment variables (.env) to safeguard sensitive configurations.</li>
            </ul>
            <div className={styles.projectLinks}>
              <a 
                href="https://p40-positive.vercel.app/" 
                className={styles.sourceBtn} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Source
              </a>
            </div>
          </div>
        </div>
        {/* Project 2 */}
        <div className={styles.projectCard}>
          <div className={styles.projectContent}>
            <h3>Role of AI in Cybersecurity</h3>
            <p><em>Research, AI, Cybersecurity | Spring 2024</em></p>
            <ul>
              <li>Conducted in-depth research on AI’s role in cybersecurity, analyzing its impact on red and blue team operations, automated
              threat detection, and penetration testing</li>
              <li>Developed theoretical mitigation strategies to counter AI-driven cyber threats, addressing adversarial AI, automated phishing,
              and AI-powered malware risks</li>
              <li>Explored the integration of AI in cybersecurity frameworks, evaluating AI-driven security tools, predictive analytics, and
              ethical considerations in cyber defense</li>
            </ul>
            <div className={styles.projectLinks}>
              <a 
                href="https://drive.google.com/file/d/1QQNABTVHUtDemPbqFTT6C1Soa2HFXHHK/view?usp=sharing" 
                className={styles.sourceBtn} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Source
              </a>
            </div>
          </div>
        </div>
        
        {/* Project 2*/}
        <div className={styles.projectCard}>
          <div className={styles.projectContent}>
            <h3>Wardriving Project</h3>
            <p><em>Kali Linux, Kismet, GPS, Wireshark, Google Earth | Fall 2023</em></p>
            <ul>
              <li>Scanned and analyzed 14,943 access points using advanced tools and hardware to assess network security across multiple
              locations.</li>
              <li>Identified key wireless security vulnerabilities, uncovering networks with weak protection and potential threats.</li>
              <li>Transformed data into actionable insights using Kismet, Google Earth, and MS Excel, driving effective cybersecurity strategies.</li>
            </ul>
            <div className={styles.projectLinks}>
              <a 
                href="https://drive.google.com/file/d/1g-okvBHkI87J99IcbuuUmCkOBl65ba9l/view?usp=sharing" 
                className={styles.sourceBtn} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Source
              </a>
            </div>
          </div>
        </div>
        
        {/* Project 4 */}
        <div className={styles.projectCard}>
          <div className={styles.projectContent}>
            <h3>Loss of Relict Oak Forests Along Coastal Louisiana</h3>
            <p><em>QGIS, Google Earth Engine | Aug 2021 – May 2022</em></p>
            <ul>
              <li>Analyzed environmental data to study the decline of relict oak forests.</li>
              <li>Utilized QGIS for detailed visual reports for research publication.</li>
              <li>Collaborated with a team to compile findings into a comprehensive report.</li>
            </ul>
            <div className={styles.projectLinks}>
              <a 
                href="https://www.mdpi.com/1999-4907/13/7/1132" 
                className={styles.sourceBtn} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Source
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
