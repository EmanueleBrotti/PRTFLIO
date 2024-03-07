
import SkillBlock from "./SkillBlock";
import { useState } from "react";
import Reveal from "./Reveal";

const skills = [
    {name: "HTML5", icon: "html5-plain", link:"https://www.freecodecamp.org/certification/EmanueleBrotti/responsive-web-design", job:"WEB DEV"},
    {name: "CSS3", icon: "css3-plain", link:"https://www.freecodecamp.org/certification/EmanueleBrotti/responsive-web-design", job:"WEB DEV"},
    
    {name: "TAILWINDCSS", icon: "tailwindcss-original", link:"https://www.freecodecamp.org/certification/EmanueleBrotti/front-end-development-libraries", job:"DESIGNER"},
    {name: "BOOTSTRAP", icon: "bootstrap-plain", link:"https://www.freecodecamp.org/certification/EmanueleBrotti/front-end-development-libraries", job:"DESIGNER"},
    {name: "JAVASCRIPT", icon: "javascript-plain", link:"https://www.freecodecamp.org/certification/EmanueleBrotti/javascript-algorithms-and-data-structures-v8", job:"DEV"},
    {name: "TYPESCRIPT", icon: "typescript-plain", link:"https://www.freecodecamp.org/certification/EmanueleBrotti/front-end-development-libraries", job:"DEV"},
    {name: "JQUERY", icon: "jquery-plain", link:"https://www.freecodecamp.org/certification/EmanueleBrotti/front-end-development-libraries", job:"DEV"},
    {name: "REACT", icon: "react-original", link:"https://www.freecodecamp.org/certification/EmanueleBrotti/front-end-development-libraries", job:"DEV"},
    {name: "REDUX TOOLKIT", icon: "redux-original", link:"https://www.freecodecamp.org/certification/EmanueleBrotti/front-end-development-libraries", job:"DEV"},
    
    
    {name: "C#", icon: "csharp-plain", link:"https://www.freecodecamp.org/certification/EmanueleBrotti/foundational-c-sharp-with-microsoft", job:"DEV"},
    {name: "GITHUB", icon: "github-original", link:"https://github.com/EmanueleBrotti", job:"USER"},
    {name: "VSCODE", icon: "vscode-plain", link:"https://www.freecodecamp.org/certification/EmanueleBrotti/foundational-c-sharp-with-microsoft", job:"USER"},
    // {name: "python", link:""}, so usarlo ma non ho certificazione
    //poi fai git php e rust
]



export default function About(props:{mouseV:Function}) {

    const [label, setLabel] = useState("SWISS ARMY KNIFE:"); //updates with the hovered skill

    function UpdateLabel(text:string) {
        setLabel(text);
    }

    /////



    const skillBlocks = skills.map((skill, index) => {

        return (
            <SkillBlock name={skill.name} icon={skill.icon} link={skill.link} key={index} onHover={UpdateLabel} job={skill.job} delay={index * 0.1}/>
        )
    })



    /////

    return ( <div className="w-full bg-light text-dark p-4 flex flex-col">
                <Reveal>
                <h2 className="text-3xl xsm:text-4xl sm:text-5xl md:text-6xl font-bold mt-5 transition-all duration-500 w-fit" onMouseEnter={() => props.mouseV("text")} onMouseLeave={() => props.mouseV("default")}>
                    INTERESTED?
                </h2>
                </Reveal>
                
    
                <div className="w-full flex flex-col-reverse h-fit justify-between items-center pt-6 lg:p-4 pb-8  gap-4 lg:flex-row">

                    <div className="w-full flex flex-col">
                        <Reveal delay={0.2}>
                        <p className="text-lg xsm:text-xl sm:text-2xl md:text-3xl transition-all duration-500 m-4 lg:border-l p-4 text-pretty" onMouseEnter={() => props.mouseV("hidden")} onMouseLeave={() => props.mouseV("default")}>
                            Continuously expanding my programming skills since I was a kid,
                            i strive to maintain a flexible mindset in an ever-changing industry,
                            to deliver cutting-edge solutions to my clients. <br/>
                            My goal is to provide an exceptional digital experience,
                            ensuring a seamless journey from start to finish.
                        </p>
                        </Reveal>
                        
                            
                            <p className="text-lg xsm:text-xl sm:text-2xl md:text-3xl transition-all duration-500 m-4 pt-2 text-nowrap font-bold" onMouseEnter={() => props.mouseV("hidden")} onMouseLeave={() => props.mouseV("default")}>
                                YOUR NEW {label} 
                            </p>
                        
                            <div className=" grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-6 xl:grid-cols-8 gap-4 p-4" onMouseEnter={() => props.mouseV("hidden")} onMouseLeave={() => props.mouseV("default")}>
                            
                                {skillBlocks}
                        
                            </div>
                            
                        
                        

                    </div>
                    <Reveal delay={0.3}>
                    <img onMouseEnter={() => props.mouseV("hidden")} onMouseLeave={() => props.mouseV("default")} src="https://placehold.co/400/orange/white"></img>
                    </Reveal>
                    
                </div>

                <hr className="w-[90%] mt-5"></hr>
                <Reveal delay={0.2}>
                    <>
                        <h3 className="text-2xl xsm:text-3xl sm:text-4xl md:text-5xl text-wrap xsm:text-nowrap transition-all duration-500 font-bold mt-5 w-fit" onMouseEnter={() => props.mouseV("text")} onMouseLeave={() => props.mouseV("default")}>
                            TRUSTED BY:
                        </h3>

                        <div className="flex flex-col min-h-96">

                        </div>
                    </>
                </Reveal>

                

                <hr className="w-[90%] mt-5"></hr>
            </div>)
}