import React from "react";
import styles from "./Experience.module.css";
import { getImageUrl } from "../utils";

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
            <div className={styles.skillIcon}><img src={getImageUrl("java.png")} alt="Java" /><span>Java</span></div>
            <div className={styles.skillIcon}><img src={getImageUrl("python.png")} alt="Python" /><span>Python</span></div>
            <div className={styles.skillIcon}><img src={getImageUrl("cpp.png")} alt="C++" /><span>C++</span></div>
            <div className={styles.skillIcon}><img src={getImageUrl("sql.png")} alt="SQL" /><span>SQL</span></div>
            <div className={styles.skillIcon}><img src={getImageUrl("react.png")} alt="React" /><span>React</span></div>
            <div className={styles.skillIcon}><img src={getImageUrl("node.png")} alt="Node.js" /><span>Node.js</span></div>
            <div className={styles.skillIcon}><img src={getImageUrl("git.png")} alt="Git" /><span>Git</span></div>
            <div className={styles.skillIcon}><img src={getImageUrl("kali.png")} alt="Kali Linux" /><span>Kali Linux</span></div>
          </div>
        </div>

        {/* Experience Section */}
        <div className={styles.experienceSection}>
          <h3 className={styles.sectionTitle}>Work Experience</h3>
          <div className={styles.experienceWrapper}>

            {/* Experience 1 */}
            <div className={styles.experienceCard}>
              <img src={getImageUrl("ulm.png")} alt="University" className={styles.companyLogo} />
              <div className={styles.experienceContent}>
                <h3>IT Technician</h3>
                <p><em>University of Louisiana Monroe | May 2024 – Present</em></p>
                <ul>
                  <li>Specialized in Identity and Access Management (IAM), troubleshooting system, network, and printer issues, including account
                  management and MFA support.</li>
                  <li>Led student technicians, provided training, and managed employee onboarding with FOG imaging</li>
                  <li>Supported software suites across multiple platforms and documented resolutions using OneNote and a ticketing system</li>
                </ul>
              </div>
            </div>

            {/* Experience 2 */}
            <div className={styles.experienceCard}>
              <img src={getImageUrl("ulm.png")} alt="University" className={styles.companyLogo} />
              <div className={styles.experienceContent}>
                <h3>IT Call Center</h3>
                <p><em>University of Louisiana Monroe | April 2022 – May 2024</em></p>
                <ul>
                  <li>Built strong customer relationships through clear communication, trust, and responsive technical support.</li>
                  <li>Efficiently diagnosed and resolved technical issues, ensuring accuracy, user satisfaction, and a seamless support experience.</li>
                </ul>
              </div>
            </div>

            {/* Experience 3 */}
            <div className={styles.experienceCard}>
              <img src={getImageUrl("CLECO.png")} alt="CLECO LLC" className={styles.companyLogo} />
              <div className={styles.experienceContent}>
                <h3>Intern – Network and Telecommunications</h3>
                <p><em>CLECO LLC | May 2023 – August 2023</em></p>
                <ul>
                  <li>Gained hands-on experience with microwave technology and network infrastructure, enhancing technical knowledge in real-
                  world applications.</li>
                  <li>Performed comprehensive network security assessments, analyzing firewall rules and actively monitoring SolarWinds Orion to
                  detect and mitigate potential threats.</li>
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
