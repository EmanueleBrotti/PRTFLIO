import { useState } from "react";
import "./css/App.css";
//import {motion, useInView, useAnimation} from "framer-motion";
import Intro from "./components/Intro"
import Nav from "./components/Nav"
import Projects from "./components/Projects";
import About from "./components/About"
import ContactMe from "./components/ContactMe"
import Footer from "./components/Footer";
import Blob from "./components/Blob";
import Cursor from "./components/Cursor";

function App() {

  const [mouseVariant, setMouseVariant] = useState("default"); //used to change the mouse when hovering an element

  return (
    <>
      <Nav/>

      <Cursor variant={mouseVariant}/>

      <main onMouseEnter={()=>{mouseVariant=="hidden" && setMouseVariant("default")}} onMouseLeave={() => setMouseVariant("hidden")}>
        <section id="intro">
          <Intro mouseV={setMouseVariant}/>
        </section>

        <Blob/>

        <section id="projects">
          <Projects mouseV={setMouseVariant}/>
        </section>

        <Blob/>
      
        <section id="about">
          <About mouseV={setMouseVariant}/>
        </section>

        <section id="contact"> 
          <ContactMe mouseV={setMouseVariant}/>
        </section>

        
      </main>

      <Footer/>
      
      
    </>
  );
}

export default App;
