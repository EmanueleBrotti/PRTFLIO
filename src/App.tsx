//import { useState } from "react";
import "./css/App.css";
//import {motion, useInView, useAnimation} from "framer-motion";
import Intro from "./components/Intro"
import Nav from "./components/Nav"
import Projects from "./components/Projects";
import About from "./components/About"
import ContactMe from "./components/ContactMe"
import Footer from "./components/Footer";
import Blob from "./components/Blob";

function App() {

  return (
    <>
      
      <Nav/>

      <main>
        <section id="intro">
          <Intro/>
        </section>

        <Blob type={0}/>

        <section id="projects">
          <Projects/>
        </section>

        <Blob type={2}/>
      
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
