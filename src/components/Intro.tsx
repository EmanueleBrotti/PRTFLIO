import Reveal from "./Reveal"


export default function Intro(props:{mouseV:Function}) {


    return (
        <div className="w-full flex flex-col h-screen p-4 ">
            <Reveal>
                <h1 className="text-4xl xsm:text-5xl sm:text-6xl md:text-8xl lg:text-9xl text-nowrap transition-all duration-500 pt-14 font-bold w-fit" onMouseEnter={() => props.mouseV("title")} onMouseLeave={() => props.mouseV("default")}>
                    HI, I'M EMA. <br/>
                    IT'S A PLEASURE <br/>
                    TO MEET YOU.
                    <br/>
                </h1>
            </Reveal>
            <Reveal delay={0.2}>
                <h2 className="mt-2 xsm:mt-3 md:mt-5 ml-2 xsm:ml-3 md:ml-5 sm:text-xl md:text-3xl lg:text-4xl text-sm transition-all duration-500 font-bold w-fit" onMouseEnter={() => props.mouseV("text")} onMouseLeave={() => props.mouseV("default")}>
                    UI / UX / DEV /// JACK OF ALL TRADES.
                </h2>
            </Reveal>
                

            
            
        </div>
    )


}