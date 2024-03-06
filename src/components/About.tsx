
import SkillBlock from "./SkillBlock";
import { useState } from "react";

const skills = [
    {name: "HTML5", icon: "html5-plain", link:"https://www.freecodecamp.org/certification/EmanueleBrotti/responsive-web-design", job:"WEB DEV"},
    {name: "CSS3", icon: "css3-plain", link:"https://www.freecodecamp.org/certification/EmanueleBrotti/responsive-web-design", job:"WEB DEV"},
    
    {name: "TAILWINDCSS", icon: "tailwindcss-original", link:"https://www.freecodecamp.org/certification/EmanueleBrotti/front-end-development-libraries", job:"DESIGNER"},
    {name: "BOOTSTRAP", icon: "bootstrap-plain", link:"https://www.freecodecamp.org/certification/EmanueleBrotti/front-end-development-libraries", job:"DESIGNER"},
    {name: "JAVASCRIPT", icon: "javascript-plain", link:"https://www.freecodecamp.org/certification/EmanueleBrotti/javascript-algorithms-and-data-structures-v8", job:"DEV"},
    {name: "TYPESCRIPT", icon: "typescript-plain", link:"https://www.freecodecamp.org/certification/EmanueleBrotti/front-end-development-libraries", job:"DEV"},
    {name: "REACT", icon: "react-original", link:"https://www.freecodecamp.org/certification/EmanueleBrotti/front-end-development-libraries", job:"DEV"},
    {name: "REDUX TOOLKIT", icon: "redux-original", link:"https://www.freecodecamp.org/certification/EmanueleBrotti/front-end-development-libraries", job:"DEV"},
    
    
    {name: "C#", icon: "csharp-plain", link:"https://www.freecodecamp.org/certification/EmanueleBrotti/foundational-c-sharp-with-microsoft", job:"DEV"},
    {name: "GITHUB", icon: "github-original", link:"https://github.com/EmanueleBrotti", job:"USER"},
    {name: "VSCODE", icon: "vscode-plain", link:"https://www.freecodecamp.org/certification/EmanueleBrotti/foundational-c-sharp-with-microsoft", job:"USER"},
    // {name: "python", link:""}, so usarlo ma non ho certificazione
    //poi fai git php e rust
]



export default function About() {

    const [label, setLabel] = useState("SWISS ARMY KNIFE:"); //updates with the hovered skill

    function UpdateLabel(text:string) {
        setLabel(text);
    }

    /////



    const skillBlocks = skills.map((skill, index) => {

        return (
            <SkillBlock name={skill.name} icon={skill.icon} link={skill.link} key={index} onHover={UpdateLabel} job={skill.job}/>
        )
    })



    /////

    return ( <div className="w-full bg-light text-dark p-4 flex flex-col">
                <h2 className="text-3xl xsm:text-4xl sm:text-5xl md:text-6xl font-bold mt-5 transition-all duration-500">
                    INTERESTED?
                </h2>
    
                <div className="w-full flex flex-col-reverse h-fit justify-between items-center pt-6 lg:p-4 pb-8  gap-4 lg:flex-row">

                    <div className="w-full flex flex-col">
                        <p className="text-lg xsm:text-xl sm:text-2xl md:text-3xl transition-all duration-500 m-4 lg:border-l p-4 text-pretty">
                            Continuously expanding my programming language skills since I was a kid,
                            i strive to maintain a flexible mindset in an ever-changing industry,
                            to deliver cutting-edge solutions to my clients. <br/>
                            My goal is to provide an exceptional digital experience,
                            ensuring a seamless journey from start to finish.
                        </p>
                        <p className="text-lg xsm:text-xl sm:text-2xl md:text-3xl transition-all duration-500 m-4 pt-2 text-nowrap font-bold">
                            YOUR NEW {label} 
                        </p>
                        <div className=" grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-6 xl:grid-cols-8 gap-4 p-4">
                            
                            {skillBlocks}
                        
                        </div>

                    </div>
                    
                    <img src="https://placehold.co/400/orange/white"></img>
                </div>

                <hr className="w-[90%] mt-5"></hr>
                <h3 className="text-2xl xsm:text-3xl sm:text-4xl md:text-5xl text-wrap xsm:text-nowrap transition-all duration-500 font-bold mt-5">
                    TRUSTED BY:
                </h3>

                <div>

                </div>

                <hr className="w-[90%] mt-5"></hr>
            </div>)
}