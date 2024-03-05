//import { useState } from "react";
import "./css/App.css";
//import {motion, useInView, useAnimation} from "framer-motion";

function App() {

  return (
    <>
      <nav className="text-light bg-dark flex w-screen flex-row justify-end xsm:justify-between items-center fixed border-b border-light p-2 z-10">
        <p className="hidden xsm:block text-nowrap text-sm">EMANUELE BROTTI, 2024 ©</p>
        <div className="flex flex-row gap-2">
          <button className="Dbuttons text-sm xsm:text-base">PORTFOLIO</button>
          <button className="Dbuttons text-sm xsm:text-base">ABOUT</button>
          <button className="Dbuttons text-sm xsm:text-base">CONTACT ME</button>
        </div>
      </nav>
      <div className="w-100 flex flex-col h-screen p-4">
        <h1 className="text-4xl xsm:text-5xl sm:text-6xl md:text-8xl text-nowrap title">
          <br></br>
          HI, I'M EMA. <br></br>
          IT'S A PLEASURE <br></br>
          TO MEET YOU.
          <br></br>
        </h1>
        <h2 className="mt-2 xsm:mt-3 md:mt-5 ml-2 xsm:ml-3 md:ml-5 sm:text-xl text-sm title">
          UI / UX / DEV /// JACK OF ALL TRADES.
        </h2>
      </div>
      
      <div className="w-100 h-300 flex flex-col p-4 bg-light text-dark">
        <h2 className="text-2xl xsm:text-4xl sm:text-5xl md:text-6xl text-wrap xsm:text-nowrap title font-bold mt-5">
            DON'T WASTE YOUR TIME, <br></br>
            HERE'S MY PORTFOLIO.
        </h2>
      </div>
      
      
    </>
  );
}

export default App;
