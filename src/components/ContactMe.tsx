import Reveal  from "./Reveal"

export default function ContactMe(props:{mouseV:Function}) {
    return(
        <div className="bg-dark text-light p-4 h-[calc(100vh-2*var(--navHeight))] min-h-fit">
            <Reveal>
                <h2 className="text-3xl xsm:text-4xl sm:text-5xl md:text-6xl font-bold mt-5 transition-all duration-500 pb-8 w-fit cursor-none" onMouseEnter={() => props.mouseV("text")} onMouseLeave={() => props.mouseV("default")}>LET'S RENDEZVOUS:</h2>
            </Reveal>
            
            <Reveal delay={0.1}>
                <form >

                    <div className="flex flex-col gap-4 md:w-1/2" onMouseEnter={() => props.mouseV("hidden")} onMouseLeave={() => props.mouseV("default")}>
                        <div className="flex flex-row gap-4">
                            <div className="flex flex-col gap-4  w-1/2">
                                <label htmlFor="name">NAME:</label>
                                <input type="text" id="name" name="name" required placeholder="Not Ema" className="bg-dark text-light border border-light rounded-lg p-2" onClick={() => document.getElementById("contact")?.scrollIntoView()}/>
                            </div>

                            <div className="flex flex-col gap-4 w-1/2">
                                <label htmlFor="email">EMAL:</label>
                                <input type="email" id="email" name="email" required placeholder="mail@domain" className="bg-dark text-light border border-light rounded-lg p-2" onClick={() => document.getElementById("contact")?.scrollIntoView()}/>
                            </div>
                        </div>
                        <textarea id="message" name="message" placeholder="Brief summary, where you work, your vision, your timeline, etc." maxLength={2000} className="bg-dark text-light border border-light rounded-lg p-2  min-h-40 max-h-[40rem]" onClick={() => document.getElementById("contact")?.scrollIntoView()}></textarea>
                        <input type="submit" className="bg-light text-dark border border-dark rounded-lg p-2 w-1/2 font-bold hover:bg-green transition duration-300"/>
                    </div>
                </form>
            </Reveal>
            
        </div>
    )
}