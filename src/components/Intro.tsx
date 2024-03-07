import Reveal from "./Reveal";

export default function Intro(props: { mouseV: Function }) {
    return (
        <div className="flex h-screen w-full flex-col p-4 ">
            <Reveal>
                <h1
                    className="w-fit cursor-none text-nowrap pt-14 text-4xl font-bold transition-all duration-500 xsm:text-5xl sm:text-6xl md:text-8xl lg:text-9xl"
                    onMouseEnter={() => props.mouseV("title")}
                    onMouseLeave={() => props.mouseV("default")}>
                    HI, I'M EMA. <br />
                    IT'S A PLEASURE <br />
                    TO MEET YOU.
                    <br />
                </h1>
            </Reveal>
            <Reveal delay={0.2}>
                <h2
                    className="ml-2 mt-2 w-fit cursor-none text-sm font-bold transition-all duration-500 xsm:ml-3 xsm:mt-3 sm:text-xl md:ml-5 md:mt-5 md:text-3xl lg:text-4xl"
                    onMouseEnter={() => props.mouseV("text")}
                    onMouseLeave={() => props.mouseV("default")}>
                    UI / UX / DEV /// JACK OF ALL TRADES.
                </h2>
            </Reveal>
        </div>
    );
}
