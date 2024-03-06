//import { useState } from "react";
import "./css/App.css";
//import {motion, useInView, useAnimation} from "framer-motion";
import Intro from "./components/Intro"
import Nav from "./components/Nav"
import Projects from "./components/Projects";
import About from "./components/About"
import ContactMe from "./components/ContactMe"
import Footer from "./components/Footer";

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

        <section id="contact"> 
          <ContactMe/>
        </section>

        <Footer/>
      </main>
      
      
    </>
  );
}

export default App;
