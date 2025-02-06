import { useState, useEffect } from "react";
import  styles  from "./App.module.css"; 
import { Navbar } from "./Components/Navbar"; 
import { Hero } from "./Components/Hero";
import { About } from "./Components/About";
import { Experience } from "./Components/Experience"; 
import { Project } from "./Components/Project"; 
import {Achievement} from "./Components/Achievement";
import { Contact } from "./Components/Contact";
function App() {

  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Project />
      <Achievement />
      <Contact />
    </div>
  );
}

export default App;