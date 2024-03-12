import Reveal from "./Reveal";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion, useAnimation } from "framer-motion";

export default function ContactMe(props: { mouseV: Function }) {
    const defaultState = {
        name: "",
        email: "",
        message: "",
        status: "",
    }; //captcha uses a code
    const [data, setData] = useState(defaultState);

    function handleChange(
        event:
            | React.ChangeEvent<HTMLInputElement>
            | React.ChangeEvent<HTMLTextAreaElement>,
    ) {
        //when something changes the state gets updated
        setData({ ...data, [event.target.name]: event.target.value });
    }

    async function sendEmail(event: React.FormEvent<HTMLFormElement>) {
        //to get an email when somebody compiles the form
        event.preventDefault();
        animation.start("visible");
        setData({ ...data, status: "loading..." });

        const templateParams = {
            from_name: data.name,
            from_email: data.email,
            message: data.message,
        };

        const serviceID = process.env.SERVICE_ID as string;
        const templateID = process.env.TEMPLATE_ID as string;
        const userID = process.env.USER_ID as string;

        await emailjs
            .send(serviceID, templateID, templateParams, userID)
            .then((response) => {
                console.log("email sent!", response.status, response.text);
                setData({
                    name: "",
                    email: "",
                    message: "",
                    status: "Email successfully sent!",
                });
            })
            .catch((err) => {
                console.log(
                    `failed with error ${err.status}, please try again later`,
                );
                setData({
                    name: "",
                    email: "",
                    message: "",
                    status: "Error, please try again later :(",
                });
            });
    }

    const variants = {
        //to animate the error
        hidden: {
            opacity: 0,
            x: -10,
        },
        visible: {
            opacity: 1,
            x: 0,
        },
    };

    const animation = useAnimation();

    return (
        <div className="h-[calc(100vh-var(--navHeight))] min-h-fit overflow-hidden bg-dark p-4 text-light">
            <Reveal>
                <h2
                    className="mt-5 w-fit cursor-none pb-8 text-3xl font-bold transition-all duration-500 xsm:text-4xl sm:text-5xl md:text-6xl"
                    onMouseEnter={() => props.mouseV("text")}
                    onMouseLeave={() => props.mouseV("default")}>
                    LET'S RENDEZVOUS:
                </h2>
            </Reveal>

            <Reveal delay={0.1}>
                <form onSubmit={(event) => sendEmail(event)}>
                    {" "}
                    {/*async, stops the function until the data gets sent*/}
                    <div
                        className="flex flex-col gap-4 md:w-1/2"
                        onMouseEnter={() => props.mouseV("hidden")}
                        onMouseLeave={() => props.mouseV("default")}>
                        <div className="flex flex-row gap-4">
                            <div className="flex w-1/2 flex-col  gap-4">
                                <label htmlFor="name">NAME:</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    placeholder="Not Ema"
                                    className="rounded-lg border border-light bg-dark p-2 text-light"
                                    onClick={() =>
                                        document
                                            .getElementById("contact")
                                            ?.scrollIntoView()
                                    }
                                    value={data.name}
                                    onChange={handleChange}
                                    autoComplete="name"
                                />
                            </div>

                            <div className="flex w-1/2 flex-col gap-4">
                                <label htmlFor="email">EMAL:</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    placeholder="mail@domain"
                                    className="rounded-lg border border-light bg-dark p-2 text-light"
                                    onClick={() =>
                                        document
                                            .getElementById("contact")
                                            ?.scrollIntoView()
                                    }
                                    value={data.email}
                                    onChange={handleChange}
                                    autoComplete="email"
                                />
                            </div>
                        </div>
                        <textarea
                            id="message"
                            name="message"
                            required
                            placeholder="Brief summary, where you work, your vision, your timeline, etc."
                            maxLength={2000}
                            className="max-h-80 min-h-40 resize-none rounded-lg border border-light  bg-dark p-2 text-light"
                            onClick={() =>
                                document
                                    .getElementById("contact")
                                    ?.scrollIntoView()
                            }
                            value={data.message}
                            onChange={handleChange}></textarea>
                        <div className="flex h-max flex-row gap-4">
                            <input
                                type="submit"
                                className="h-full w-1/2 rounded-lg border border-dark bg-light p-2 font-bold text-dark transition duration-300 hover:bg-green"
                            />

                            <motion.p
                                variants={variants}
                                initial="hidden"
                                animate={animation}
                                className="sm:text-1xl m-0 text-nowrap p-0 text-lg transition-all duration-500 xsm:text-xl md:text-2xl">
                                {data.status}
                            </motion.p>
                        </div>
                    </div>
                </form>
            </Reveal>
        </div>
    );
}
