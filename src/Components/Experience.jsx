import React from "react";
import styles from "./Experience.module.css";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>

      {/* Side-by-side layout */}
      <div className={styles.contentWrapper}>

        {/* Skills Section */}
        <div className={styles.skillsSection}>
          <h3 className={styles.sectionTitle}>Skills</h3>
          <div className={styles.iconsGrid}>
            <div className={styles.skillIcon}><img src="/assets/java.png" alt="Java" /><span>Java</span></div>
            <div className={styles.skillIcon}><img src="/assets/python.png" alt="Python" /><span>Python</span></div>
            <div className={styles.skillIcon}><img src="/assets/cpp.png" alt="C++" /><span>C++</span></div>
            <div className={styles.skillIcon}><img src="/assets/sql.png" alt="SQL" /><span>SQL</span></div>
            <div className={styles.skillIcon}><img src="/assets/react.png" alt="React" /><span>React</span></div>
            <div className={styles.skillIcon}><img src="/assets/node.png" alt="Node.js" /><span>Node.js</span></div>
            <div className={styles.skillIcon}><img src="/assets/git.png" alt="Git" /><span>Git</span></div>
            <div className={styles.skillIcon}><img src="/assets/kali.png" alt="Kali Linux" /><span>Kali Linux</span></div>
          </div>
        </div>

        {/* Experience Section */}
        <div className={styles.experienceSection}>
          <h3 className={styles.sectionTitle}>Work Experience</h3>
          <div className={styles.experienceWrapper}>

            {/* Experience 1 */}
            <div className={styles.experienceCard}>
              <img src="/assets/ulm.png" alt="University" className={styles.companyLogo} />
              <div className={styles.experienceContent}>
                <h3>IT Technician</h3>
                <p><em>University of Louisiana Monroe | May 2024 – Present</em></p>
                <ul>
                  <li>Troubleshoot and resolve technical issues related to computer systems, networks, and printers.</li>
                  <li>Set up new computers using FOG imaging technology and assist with onboarding new employees.</li>
                </ul>
              </div>
            </div>

            {/* Experience 2 */}
            <div className={styles.experienceCard}>
              <img src="/assets/ulm.png" alt="University" className={styles.companyLogo} />
              <div className={styles.experienceContent}>
                <h3>IT Call Center</h3>
                <p><em>University of Louisiana Monroe | April 2022 – May 2024</em></p>
                <ul>
                  <li>Built trust with customer accounts through effective communication.</li>
                  <li>Provided accurate information and resolved technical issues efficiently.</li>
                </ul>
              </div>
            </div>

            {/* Experience 3 */}
            <div className={styles.experienceCard}>
              <img src="/assets/cleco.png" alt="CLECO LLC" className={styles.companyLogo} />
              <div className={styles.experienceContent}>
                <h3>Intern – Network and Telecommunications</h3>
                <p><em>CLECO LLC | May 2023 – August 2023</em></p>
                <ul>
                  <li>Gained hands-on exposure to microwave technology and network infrastructure.</li>
                  <li>Performed maintenance on SolarWinds Orion and updated network maps using Network Atlas.</li>
                </ul>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
