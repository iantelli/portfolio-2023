import HeroText from "./components/HeroText";
import PageDownArrow from "./components/PageDownArrow";
import { useTheme } from "./hooks/useTheme";
import Break from "./components/Break";
import ProjectLarge from "./components/ProjectLarge";
import Contact from "./components/Contact";
import { motion } from "framer-motion";

function App() {
    const { theme, handleThemeChange } = useTheme();
    return (
        <>
            <HeroText />
            <PageDownArrow />
            <motion.h1
                className={
                    "flex justify-center items-center text-2xl md:text-4xl font-bold font-display mt-16 md:mt-64 text-rosePineDawn-love dark:text-rosePine-foam"
                }
                id="projects"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0, duration: 1 }}
            >
                Project Showcase
            </motion.h1>
            <Break aniDelay={0} />
            <ProjectLarge
                title={"InterviewPal"}
                description={
                    "InterviewPal is a GPT-3.5 powered AI that helps you practice for your interviews. It will ask you common and relevant interview questions and give you insightful feedback on your answers."
                }
                image={"InterviewPal.webp"}
                technologies={["Next.js", "Typescript", "Tailwindcss", "Redis", "OpenAI", "GPT-3.5", "Rosepine"]}
                github={"https://github.com/InterviewPal/InterviewPal"}
                website={"https://interviewpal.vercel.app/"}
                pictureLink={"https://interviewpal.vercel.app/"}
                reverse
                aniDelay={0}
            />
            <Break aniDelay={0} />
            <ProjectLarge
                title={"IGAQ"}
                description={
                    "I Got A Queery (IGAQ) provides a safe space for the members of the LGBTQ+ community to ask questions, share stories, and read resources about all things LGBTQ+."
                }
                image={"IGAQ.webp"}
                technologies={[
                    "Next.js",
                    "Nest",
                    "JavaScript",
                    "Typescript",
                    "Neo4j",
                    "React",
                    "Styled Components",
                    "Mantine",
                ]}
                github={"https://github.com/IGAQ/NextApp"}
                website={"https://www.igaq.gay/"}
                pictureLink={"https://www.igaq.gay/"}
                reverse={false}
                aniDelay={0}
            />
            <Break aniDelay={0} />
            <ProjectLarge
                title={"WordGotchu"}
                description={
                    "WordGotchu is a Pixel styled multiplayer web platform game based on Wordle and original characters known as “Gotchus’’ that battle against each other in an arena."
                }
                image={"WordGotchu.webp"}
                technologies={["React", "JavaScript", "Node.js", "Express", "Firebase", "HTML/CSS"]}
                github={"https://github.com/iantelli/word-gotchu"}
                website={"https://word-gotchu.up.railway.app"}
                pictureLink={"https://word-gotchu.up.railway.app"}
                reverse
                aniDelay={0}
            />
            <Break aniDelay={0} />
            <ProjectLarge
                title={"FFSandbox"}
                description={
                    "FFSandbox (work in progress) is a raid planning tool for Final Fantasy XIV. Users can create and share their own raid plans with the community. Guides and resources are also available to help users plan their raids."
                }
                image={"ffsandbox.webp"}
                technologies={["React", "Typescript", "Tailwindcss", "TRPC", "Primsa", "PostgreSQL"]}
                reverse={false}
                pictureLink={"https://github.com/iantelli"}
                showIcons={false}
                aniDelay={0}
            />
            <Break aniDelay={0} />
            <Contact />
        </>
    );
}

export default App;
