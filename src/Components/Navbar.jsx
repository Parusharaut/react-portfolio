import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  const toggleMenu = () => setIsOpen(!isOpen);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContent}>
        {/* Portfolio + Theme Toggle */}
        <div className={styles.logoAndToggle}>
          <button className={styles.themeToggle} onClick={toggleTheme}>
            {theme === "light" ? "🌙" : "☀️"}
          </button>
          <div className={styles.logo}>Portfolio</div>
        </div>

        {/* Navigation Menu */}
        <ul className={`${styles.menuItems} ${isOpen ? styles.open : ""}`}>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#achievements">Achievements</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className={styles.hamburger} onClick={toggleMenu}>
        ☰
      </div>
    </nav>
  );
};

export default Navbar;
