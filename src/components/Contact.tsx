import { motion } from "framer-motion";
import Icon from "./Icon";
import { RiGithubFill, RiLinkedinFill, RiMailFill, RiDiscordFill } from "react-icons/ri";

export default function Contact() {
    return (
        <div className={"flex flex-wrap lg:flex-nowrap justify-between items-center md:mx-24 mt-14 md:mt-24"}>
            <div className="flex flex-col justify-center items-center text-center lg:justify-start lg:items-start lg:text-start w-full h-full mb-4">
                <motion.h1
                    className="text-2xl md:text-4xl font-bold font-display mb-4"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 1 }}
                >
                    Wanna reach out?
                </motion.h1>
                <motion.h2
                    className="text-xl md:text-2xl font-semibold text-rosePineDawn-subtle dark:text-rosePine-subtle font-display"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15, duration: 1 }}
                >
                    If you have a project you'd like to discuss or simply want to say hello, feel free to reach out to
                    me at any platform listed below. I'm always interested in meeting new people and exploring exciting
                    opportunities.
                </motion.h2>
                <motion.div
                    className="flex mt-4 space-x-4"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 1 }}
                >
                    <Icon
                        icon={<RiMailFill className="h-8 w-8 text-rosePineDawn-love dark:text-rosePine-foam" />}
                        link={"mailto:iantelli@duck.com"}
                        hover
                        newTab
                    />
                    <Icon
                        icon={<RiLinkedinFill className="h-8 w-8 text-rosePineDawn-love dark:text-rosePine-foam" />}
                        link={"https://www.linkedin.com/in/ian-chao/"}
                        hover
                        newTab
                    />
                    <Icon
                        icon={<RiDiscordFill className="h-8 w-8 text-rosePineDawn-love dark:text-rosePine-foam" />}
                        link={"https://discord.com/users/155481915036532736"}
                        hover
                        newTab
                    />
                    <Icon
                        icon={<RiGithubFill className="h-8 w-8 text-rosePineDawn-love dark:text-rosePine-foam" />}
                        link={"https://www.github.com/iantelli"}
                        hover
                        newTab
                    />
                </motion.div>
            </div>
        </div>
    );
}
