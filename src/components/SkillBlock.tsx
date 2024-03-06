import "../css/App.css";


export default function SkillBlock(props: {name: string,icon: string, link: string, onHover: Function, job:string}) {

    return (
        <a href={props.link} target="_blank" rel="noreferrer" onMouseEnter={() => props.onHover(`${props.name} ${props.job}.`)} onMouseLeave={() => props.onHover("SWISS ARMY KNIFE:")}>
            <div className="group">
                <div className=" flex items-center justify-center p-3 text-light bg-dark rounded-lg text-5xl relative group-hover:bottom-1  group-hover:bg-green group-hover:text-dark transition duration-300">

                <i className={`devicon-${props.icon}`}></i>

                </div>
            </div>
            
        </a>
    )
}