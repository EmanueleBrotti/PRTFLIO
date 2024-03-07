import Reveal  from "./Reveal";
import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import { motion, useAnimation } from "framer-motion";
import ReCAPTCHA from "react-google-recaptcha";

export default function ContactMe(props:{mouseV:Function}) {
    
    const defaultState = {name: "", email: "", message: "", status: "", captcha: null as string | null}; //captcha uses a code
    const captchaRef = useRef<ReCAPTCHA>(null);
    const [data, setData] = useState(defaultState);


    function handleChange(event:React.ChangeEvent<HTMLInputElement>|React.ChangeEvent<HTMLTextAreaElement>) { //when something changes the state gets updated
        setData({...data, [event.target.name]: event.target.value})
    }

    async function sendEmail(event:React.FormEvent<HTMLFormElement>) { //to get an email when somebody compiles the form
        event.preventDefault();
        animation.start("visible")
        setData({...data, status: "loading..."})


        if (!data.captcha) { //if empty (captcha gives a code if valid)
            setData({...data, status: "Please check the captcha"})
            return
        }
        const templateParams = {
            from_name: data.name,
            from_email: data.email,
            message: data.message
        }

        const serviceID = process.env.SERVICE_ID as string;
        const templateID = process.env.TEMPLATE_ID as string;
        const userID = process.env.USER_ID as string;
        
        await emailjs.send(serviceID, templateID, templateParams, userID)
        .then((response) => {
            console.log('email sent!', response.status, response.text);
            setData({name: "", email: "", message: "", status: "Email successfully sent!", captcha: null})
            captchaRef.current?.reset()
            
        }) .catch((err) => {
            console.log(`failed with error ${err.status}, please try again later`)
            setData({name: "", email: "", message: "", status: "Error, please try again later :(", captcha: null})
            captchaRef.current?.reset()
        })


    }

    const variants = { //to animate the error
        hidden: {
            opacity: 0,
            x: -10
        },
        visible: {
            opacity: 1,
            x: 0
        }
    }

    const animation = useAnimation()

    return(
        <div className="bg-dark text-light p-4 h-[calc(100vh-2*var(--navHeight))] min-h-fit overflow-hidden">
            <Reveal>
                <h2 className="text-3xl xsm:text-4xl sm:text-5xl md:text-6xl font-bold mt-5 transition-all duration-500 pb-8 w-fit cursor-none" onMouseEnter={() => props.mouseV("text")} onMouseLeave={() => props.mouseV("default")}>LET'S RENDEZVOUS:</h2>
            </Reveal>
            
            <Reveal delay={0.1}>
                <form onSubmit={(event) => sendEmail(event)}> {/*async, stops the function until the data gets sent*/}

                    <div className="flex flex-col gap-4 md:w-1/2" onMouseEnter={() => props.mouseV("hidden")} onMouseLeave={() => props.mouseV("default")}>
                        <div className="flex flex-row gap-4">
                            <div className="flex flex-col gap-4  w-1/2">
                                <label htmlFor="name">NAME:</label>
                                <input type="text" id="name" name="name" required placeholder="Not Ema" className="bg-dark text-light border border-light rounded-lg p-2" onClick={() => document.getElementById("contact")?.scrollIntoView()} value={data.name} onChange={handleChange} autoComplete="name"/>
                            </div>

                            <div className="flex flex-col gap-4 w-1/2">
                                <label htmlFor="email">EMAL:</label>
                                <input type="email" id="email" name="email" required placeholder="mail@domain" className="bg-dark text-light border border-light rounded-lg p-2" onClick={() => document.getElementById("contact")?.scrollIntoView()} value={data.email} onChange={handleChange} autoComplete="email"/>
                            </div>
                        </div>
                        <textarea id="message" name="message" required placeholder="Brief summary, where you work, your vision, your timeline, etc." maxLength={2000} className="bg-dark text-light border border-light rounded-lg p-2  min-h-40 max-h-80 resize-none" onClick={() => document.getElementById("contact")?.scrollIntoView()} value={data.message} onChange={handleChange}></textarea>
                        <div className="flex flex-row gap-4 h-max">
                            <input type="submit" className="bg-light text-dark border border-dark rounded-lg p-2 w-1/2 font-bold hover:bg-green transition duration-300 h-full"/>
                            
                            <motion.p variants={variants} initial="hidden" animate={animation} className="text-lg xsm:text-xl sm:text-1xl md:text-2xl transition-all duration-500 m-0 p-0 text-nowrap">{data.status}</motion.p>
                        </div>
                        <ReCAPTCHA ref={captchaRef} sitekey="6Le_yJApAAAAAOOjbZdvh39F6haNojVbpqd96U18" onChange={(value)=>{setData({...data, captcha: value})}}/>
                        
                    </div>
                </form>
            </Reveal>
            
        </div>
    )
}