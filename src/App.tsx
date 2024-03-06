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
      <Intro/>
      
      <Projects/>
      <About/>
      
      
    </>
  );
}

export default App;
