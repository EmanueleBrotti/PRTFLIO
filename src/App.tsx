import { useState } from "react";
import "./css/App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <nav className="text-light bg-dark flex w-full flex-row justify-end xsm:justify-between items-center fixed border-b border-light p-2">
        <p className="hidden xsm:block text-nowrap text-sm">EMANUELE BROTTI, 2024 ©</p>
        <div className="flex flex-row gap-2">
          <button className="Dbuttons">PORTFOLIO</button>
          <button className="Dbuttons">ABOUT</button>
          <button className="Dbuttons">CONTACT ME</button>
        </div>
      </nav>
      <div className="w-100 flex flex-col justify-center h-screen p-4">
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
    </>
  );
}

export default App;
