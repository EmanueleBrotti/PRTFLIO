import Blob from "./Blob"
import Reveal from "./Reveal"

export default function Projects(props:{mouseV:Function}) {
    return (<>
                <div className="w-full h-fit flex flex-col p-4 bg-light text-dark pb-0">
                <Reveal>
                <h2 className="text-3xl xsm:text-4xl sm:text-5xl md:text-6xl text-wrap xsm:text-nowrap transition-all duration-500 font-bold mt-5 m-0 w-fit" onMouseEnter={() => props.mouseV("title")} onMouseLeave={() => props.mouseV("default")}>
                    DON'T WASTE YOUR TIME, <br></br>
                    HERE'S MY PORTFOLIO. 
                </h2>
                </Reveal>
                
                </div>
                <Blob upsideDown/>
                
                <div className="w-full h-fit bg-dark text-light p-4 grid grid-flow-row grid-cols-1 sm:grid-cols-2 gap-4 min-h-96">
                    {/*portfolio elements*/}

                </div>
            </>)
}