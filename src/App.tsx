//import { useState } from "react";
import "./css/App.css";
//import {motion, useInView, useAnimation} from "framer-motion";
import Intro from "./components/Intro"
import Nav from "./components/Nav"
import Projects from "./components/Projects";
import About from "./components/About"

function App() {

  return (
    <>
      
      <Nav/>

      <main>
        <section id="intro">
          <Intro/>
        </section>
      
        <section id="projects">
          <Projects/>
        </section>
      
        <section id="about">
          <About/>
        </section>
      </main>
      
      
    </>
  );
}

export default App;
