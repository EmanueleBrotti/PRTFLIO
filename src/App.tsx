import { useState } from "react";
import "./css/App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <nav className="text-light bg-dark flex w-full flex-row justify-end sm:justify-between items-center sticky border-b border-light top-0 p-2 flex-wrap">
        <p className="hidden sm:block">Emanuele Brotti, 2024 ©</p>
        <div className="flex flex-row gap-2">
          <button className="Dbuttons">PORTFOLIO</button>
          <button className="Dbuttons">ABOUT</button>
          <button className="Dbuttons">CONTACT ME</button>
        </div>
      </nav>
      <div className="w-100 flex flex-col justify-center h-100 p-4">
        <h1 id="title" className="text-4xl xsm:text-5xl sm:text-6xl md:text-8xl text-nowrap">
          <br></br>
          HI, I'M EMA. <br></br>
          IT'S A PLEASURE <br></br>
          TO MEET YOU.
          <br></br>
        </h1>
      </div>
    </>
  );
}

export default App;
