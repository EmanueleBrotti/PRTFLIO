import { useState, useEffect } from "react";

function Clock() {
    //shows hour and minutes in rome timezone
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setDate(new Date()); //rerenders the date every 30 seconds, more accurate than 30s
        }, 15 * 1000);
        return () => {
            clearInterval(timer); //removes the timer
        };
    }, []);

    let time = date.toLocaleDateString("it-IT", {
        //formats the date with the correct timezone
        timeZone: "Europe/Rome",
        hour: "2-digit",
        minute: "2-digit",
    });

    time = time.split(", ")[1]; //removes the day of the week

    return (
        <div className="g-4 relative right-[8%] flex select-none flex-row place-self-center text-nowrap xsm:right-0">
            {`${time} `}
            <span className="hidden xsm:inline-block"> , CET (UTC+1)</span>
        </div>
    );
}

export default function Footer() {
    return (
        <footer className="relative bottom-[var(--navHeight)] z-20 flex h-[var(--navHeight)] w-full cursor-auto flex-row items-center justify-between overflow-hidden border-t border-light bg-dark p-4">
            <div className="flex flex-row gap-4">
                <a
                    aria-label="linkedin"
                    href="https://www.linkedin.com/in/emanuele-brotti-3329b22b6/"
                    target="_blank"
                    rel="noreferrer">
                    <div className=" flex items-center justify-center text-3xl transition duration-300 hover:text-green">
                        <i className={`devicon-linkedin-plain`}></i>
                    </div>
                </a>

                <a
                    aria-label="github"
                    href="https://github.com/EmanueleBrotti"
                    target="_blank"
                    rel="noreferrer">
                    <div className=" flex items-center justify-center text-3xl transition duration-300 hover:text-green">
                        <i className={`devicon-github-plain`}></i>
                    </div>
                </a>

                <a
                    aria-label="send email"
                    href="mailto:emanuelebrotti@gmail.com?subject=(your name) from Ema's Portfolio"
                    target="_blank"
                    rel="noreferrer">
                    <div className=" flex items-center justify-center text-3xl transition duration-300 hover:text-green">
                        <i className={`fa-solid fa-envelope`}></i>
                    </div>
                </a>
            </div>
            <Clock />
            <div className="flex flex-row">
                <button
                    aria-label="back to top"
                    className=" ml-2 select-none rounded-sm p-2 text-2xl transition duration-300 hover:text-green xsm:text-base xsm:hover:bg-green xsm:hover:text-dark"
                    onClick={() =>
                        document.getElementById("intro")?.scrollIntoView()
                    }>
                    <span className="hidden xsm:block">BACK TO TOP</span>
                    <i className="fa-solid fa-house xsm:hidden"></i>
                </button>
            </div>
        </footer>
    );
}
