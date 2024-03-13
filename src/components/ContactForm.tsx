import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion, useAnimation } from "framer-motion";
import { Turnstile, TurnstileInstance } from "@marsidev/react-turnstile";
import { useAppDispatch } from "../store/hooks";
import { setCursorVariant } from "../store/slices/cursorSlice";

const defaultState = {
    //used to reset and init the form
    name: "",
    email: "",
    message: "",
    status: "",
    captcha: false,
};

const variants = {
    //to animate the error message
    hidden: {
        opacity: 0,
        x: -10,
    },
    visible: {
        opacity: 1,
        x: 0,
    },
};

export default function ContactForm() {
    const dispatch = useAppDispatch();

    const captchaRef = useRef<TurnstileInstance>(null); //to reset the captcha

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

        if (!data.captcha) {
            //captcha is false
            setData({
                ...data,
                status: "Please complete the captcha",
            });
            return;
        }

        const templateParams = {
            //email template
            from_name: data.name,
            from_email: data.email,
            message: data.message,
        };
        //access the env vars
        const serviceID = process.env.SERVICE_ID as string;
        const templateID = process.env.TEMPLATE_ID as string;
        const userID = process.env.USER_ID as string;

        await emailjs //sends the email using emailjs
            .send(serviceID, templateID, templateParams, userID)
            .then((response) => {
                console.log("email sent!", response.status, response.text);
                setData({
                    ...defaultState,
                    status: "Email successfully sent!",
                });
            })
            .catch((err) => {
                console.log(
                    `failed with error ${err.status}, please try again later`,
                );
                setData({
                    ...defaultState,
                    status: "Error, please try again later :(",
                });
            });
    }

    const animation = useAnimation();

    return (
        <form
            onSubmit={(event) => sendEmail(event)}
            className="w-full md:w-1/2">
            <div
                className="flex flex-col gap-4"
                onMouseEnter={() => dispatch(setCursorVariant("hidden"))}
                onMouseLeave={() => dispatch(setCursorVariant("default"))}>
                <div className="flex flex-row gap-4">
                    {" "}
                    {/* name and email */}
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
                        document.getElementById("contact")?.scrollIntoView()
                    }
                    value={data.message}
                    onChange={handleChange}></textarea>
                <div className="flex h-max flex-row gap-4">
                    <input
                        type="submit"
                        className="w-full rounded-sm border border-dark bg-light p-2 font-bold text-dark transition duration-300 hover:bg-green"
                    />
                    <Turnstile
                        siteKey={process.env.CAPTCHA_KEY as string}
                        ref={captchaRef}
                        onSuccess={() => {
                            setData({ ...data, captcha: true });
                        }}
                        onError={() => {
                            setData({ ...data, captcha: false });
                        }}
                        onExpire={() => {
                            setData({ ...data, captcha: false });
                            captchaRef.current?.reset();
                        }}
                    />
                </div>
                {/* error message: */}
                <motion.p
                    variants={variants}
                    initial="hidden"
                    animate={animation}
                    className="sm:text-1xl m-0 text-nowrap p-0 text-lg transition-all duration-500 xsm:text-xl md:text-2xl">
                    {data.status}
                </motion.p>
            </div>
        </form>
    );
}
