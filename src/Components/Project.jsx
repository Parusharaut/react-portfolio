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
            <h3>Role of AI in Cybersecurity</h3>
            <p><em>Research, AI, Cybersecurity | Spring 2024</em></p>
            <ul>
              <li>Researched AI applications in improving cybersecurity strategies.</li>
              <li>Proposed robust mitigation techniques to address AI-related challenges.</li>
              <li>Enhanced the efficiency of Red and Blue team operations through AI solutions.</li>
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
        
        {/* Project 2 */}
        <div className={styles.projectCard}>
          <div className={styles.projectContent}>
            <h3>Wardriving Project</h3>
            <p><em>Kali Linux, Kismet, GPS, Wireshark, Google Earth | Fall 2023</em></p>
            <ul>
              <li>Configured tools and hardware to scan and analyze 14,943 access points.</li>
              <li>Assessed wireless security vulnerabilities and identified weak security measures.</li>
              <li>Converted data into insights using Kismet, Google Earth, and MS Excel.</li>
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
        
        {/* Project 3 */}
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
