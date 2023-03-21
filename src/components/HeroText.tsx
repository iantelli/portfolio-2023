import { motion } from "framer-motion";
import Icon from "./Icon";
import { RiGithubFill, RiLinkedinFill, RiMailFill, RiDiscordFill } from "react-icons/ri";

export default function HeroText() {
    return (
        <div className={"flex flex-wrap lg:flex-nowrap justify-between items-center md:mx-24 mt-14 md:mt-48"}>
            <div className="flex flex-col justify-center items-center text-center lg:justify-start lg:items-start lg:text-start w-full h-full mb-4">
                <motion.h1
                    className="text-4xl md:text-6xl font-bold font-display mb-4"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05, duration: 1 }}
                >
                    Hello, I'm <span className={"text-rosePineDawn-love dark:text-rosePine-foam"}> Ian.</span>
                </motion.h1>
                <motion.h2
                    className="text-2xl md:text-4xl font-semibold text-rosePineDawn-subtle dark:text-rosePine-subtle font-display"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 1 }}
                >
                    Full-Stack Developer
                </motion.h2>
                <motion.div
                    className="md:text-xl flex flex-col font-display text-rosePineDawn-text dark:text-rosePine-subtle mt-4"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15, duration: 1 }}
                >
                    I am a passionate developer based in Surrey BC, Canada. My expertise lies in developing robust and
                    scalable web applications that deliver a smooth user experience.
                </motion.div>
                <motion.div
                    className="flex mt-4 space-x-4"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 1 }}
                >
                    <Icon
                        link={"https://github.com/iantelli"}
                        newTab
                        hover
                        aria={"link to iantelli github"}
                        icon={<RiGithubFill className="h-12 w-12 text-rosePineDawn-love dark:text-rosePine-foam" />}
                    />

                    <Icon
                        link={"https://www.linkedin.com/in/ian-chao/"}
                        newTab
                        hover
                        aria={"link to iantelli linkedin"}
                        icon={<RiLinkedinFill className="h-12 w-12 text-rosePineDawn-love dark:text-rosePine-foam" />}
                    />
                    <Icon
                        link={"https://discord.com/users/155481915036532736"}
                        newTab
                        hover
                        aria={"link to iantelli discord"}
                        icon={<RiDiscordFill className="h-12 w-12 text-rosePineDawn-love dark:text-rosePine-foam" />}
                    />
                    <Icon
                        link={"mailto:iantelli@iantelli.com"}
                        newTab
                        hover
                        aria={"link to iantelli email"}
                        icon={<RiMailFill className="h-12 w-12 text-rosePineDawn-love dark:text-rosePine-foam" />}
                    />
                </motion.div>
            </div>
            <div className="flex justify-center lg:justify-end w-full h-full">
                <motion.img
                    className="rounded-full w-48 h-48 md:w-96 md:h-96 shadow-lg shadow-rosePineDawn-love dark:shadow-rosePine-foam"
                    src="profile.webp"
                    alt="Iantelli profile picture"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 1 }}
                />
            </div>
        </div>
    );
}
