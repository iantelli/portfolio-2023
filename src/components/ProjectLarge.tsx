import { motion } from "framer-motion";
import Icon from "./Icon";
import { RiGithubFill, RiLink } from "react-icons/ri";

type ProjectLargeProps = {
    title: string;
    description: string;
    image: string;
    technologies: string[];
    github: string;
    website: string;
    aniDelay: number;
    reverse?: boolean;
};

export default function ProjectLarge({
    title,
    description,
    image,
    technologies,
    github,
    website,
    aniDelay,
    reverse,
}: ProjectLargeProps) {
    return (
        <>
            {reverse ? (
                <motion.div className={"flex flex-wrap-reverse lg:flex-nowrap justify-between lg:mx-24 my-12 lg:mt-24"}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: aniDelay, duration: 1 }}>
                    <div className="flex flex-col justify-center items-center text-center lg:justify-start lg:items-start lg:text-start">
                        <h1
                            className="text-4xl lg:text-6xl font-bold font-display mb-4"
                        >
                            {title}
                        </h1>
                        <h2
                            className="text-xl lg:text-2xl font-semibold text-rosePineDawn-subtle dark:text-rosePine-subtle font-display"
                        >
                            {description}
                        </h2>
                        <div
                            className="flex flex-col font-display text-rosePineDawn-subtle dark:text-rosePine-subtle mt-4"
                        >
                            <div className="flex flex-wrap justify-center lg:justify-start">
                                {technologies.map((technology) => (
                                    <div
                                        key={technology}
                                        className="bg-rosePineDawn-highlightMed dark:bg-rosePine-highlightLow text-rosePineDawn-love dark:text-rosePine-foam font-semibold rounded-lg px-2 py-1 mr-2 mb-2"
                                    >
                                        {technology}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div
                            className="flex items-center justify-center lg:items-start lg:justify-start w-full h-full mt-4"
                        >
                            <Icon newTab hover icon={<RiGithubFill className="h-8 w-8 text-rosePineDawn-love dark:text-rosePine-foam" />} link={github} />
                            <Icon newTab hover icon={<RiLink className="h-8 w-8 text-rosePineDawn-love dark:text-rosePine-foam" />} link={website} />
                        </div>
                    </div>
                    <div className={"flex flex-col justify-center items-center lg:justify-end lg:items-end lg:text-start w-full h-full mb-4 lg:mb-0"}>
                        <motion.img
                            src={image}
                            alt={title}
                            className="lg:grayscale lg:hover:grayscale-0 lg:transition lg:duration-200 rounded-lg shadow-lg"
                            initial={{ scale: 1 }}
                            whileHover={{ scale: 1.10, transition: { duration: 0.1 } }}
                        />
                    </div>
                </motion.div> ): (
                <motion.div className={"flex flex-wrap lg:flex-nowrap justify-between lg:mx-24 mt-8 lg:mt-24"}
                     initial={{ opacity: 0, y: 50 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: aniDelay, duration: 1 }}>
                        <div className={"flex flex-col justify-center items-center lg:justify-start lg:items-start lg:text-start w-full h-full mb-4 lg:mb-0"}>
                            <motion.img
                                src={image}
                                alt={title}
                                className="lg:grayscale lg:hover:grayscale-0 lg:transition lg:duration-200 rounded-lg shadow-lg"
                                initial={{ scale: 1 }}
                                whileHover={{ scale: 1.10, transition: { duration: 0.1 } }}
                            />
                        </div>
                    <div className="flex flex-col justify-center items-center text-center lg:justify-end lg:items-end lg:text-end mb-4">
                        <h1
                            className="text-4xl lg:text-6xl font-bold font-display mb-4"
                        >
                            {title}
                        </h1>
                        <h2
                            className="text-xl lg:text-2xl font-semibold text-rosePineDawn-subtle dark:text-rosePine-subtle font-display"
                        >
                            {description}
                        </h2>
                        <motion.div
                            className="flex flex-col font-display text-rosePineDawn-subtle dark:text-rosePine-subtle mt-4"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: aniDelay, duration: 1 }}
                        >
                            <div className="flex flex-wrap justify-center lg:justify-end">
                                {technologies.map((technology) => (
                                    <div
                                        key={technology}
                                        className="bg-rosePineDawn-highlightMed dark:bg-rosePine-highlightLow text-rosePineDawn-love dark:text-rosePine-foam font-semibold rounded-lg px-2 py-1 mr-2 mb-2"
                                    >
                                        {technology}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                        <div
                            className="flex items-center justify-center lg:items-end lg:justify-end w-full h-full mt-4"
                        >
                            <Icon newTab hover icon={<RiGithubFill className="h-8 w-8 text-rosePineDawn-love dark:text-rosePine-foam" />} link={github} />
                            <Icon newTab hover icon={<RiLink className="h-8 w-8 text-rosePineDawn-love dark:text-rosePine-foam" />} link={website} />
                        </div>
                    </div>
                </motion.div>
            )}
        </>

    );
}