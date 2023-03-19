import { motion } from "framer-motion";
import Icon from "./Icon";
import {
    RiGithubFill,
    RiLinkedinFill,
    RiMailFill,
    RiDiscordFill,
} from "react-icons/ri";

export default function HeroText() {
    return (
        <div
            className={
                "flex flex-wrap md:flex-nowrap justify-between items-center md:mx-24 mt-24 md:mt-64"
            }
        >
            <div className="flex flex-col justify-center items-center text-center md:justify-start md:items-start md:text-start w-full h-full mb-4">
                <motion.h1
                    className="text-4xl md:text-6xl font-bold font-display mb-4"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 1 }}
                >
                    Hello, I'm{" "}
                    <span
                        className={
                            "text-rosePineDawn-love dark:text-rosePine-foam"
                        }
                    >
                        {" "}
                        Ian.
                    </span>
                </motion.h1>
                <motion.h2
                    className="text-2xl md:text-4xl font-semibold text-rosePineDawn-subtle dark:text-rosePine-subtle font-display"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 1 }}
                >
                    Full-Stack Developer
                </motion.h2>
                <motion.div
                    className="flex flex-col font-display text-rosePineDawn-subtle dark:text-rosePine-subtle mt-4"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5, duration: 1 }}
                >
                    I am a passionate developer based in Surrey BC, Canada. My
                    expertise lies in developing robust and scalable web
                    applications that deliver a smooth user experience.
                </motion.div>
                <motion.div
                    className="flex flex-row justify-center items-center mt-4 space-x-4"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2, duration: 1 }}
                >
                    <a
                        href="https:github.com/iantelli"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Icon
                            icon={
                                <RiGithubFill className="h-12 w-12 text-rosePineDawn-love dark:text-rosePine-foam" />
                            }
                        />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/ian-chao/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Icon
                            icon={
                                <RiLinkedinFill className="h-12 w-12 text-rosePineDawn-love dark:text-rosePine-foam" />
                            }
                        />
                    </a>
                    <a
                        href="https://discord.com/users/155481915036532736"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Icon
                            icon={
                                <RiDiscordFill className="h-12 w-12 text-rosePineDawn-love dark:text-rosePine-foam" />
                            }
                        />
                    </a>
                    <a href="mailto:iantelli@duck.com">
                        <Icon
                            icon={
                                <RiMailFill className="h-12 w-12 text-rosePineDawn-love dark:text-rosePine-foam" />
                            }
                        />
                    </a>
                </motion.div>
            </div>
            <div className="flex justify-center md:justify-end w-full h-full">
                <motion.img
                    className="rounded-full w-64 h-64 md:w-96 md:h-96"
                    src="profile.jpg"
                    alt="Iantelli"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2, duration: 1 }}
                />
            </div>
        </div>
    );
}
