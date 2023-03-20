import HeroText from "./components/HeroText";
import PageDownArrow from "./components/PageDownArrow";
import { useTheme } from "./hooks/useTheme";
import Break from "./components/Break";
import ProjectLarge from "./components/ProjectLarge";
import { motion } from "framer-motion";

function App() {
    const { theme, handleThemeChange } = useTheme();
    return (
        <>
            <HeroText />
            <PageDownArrow />
            <motion.h1 className={"flex justify-center items-center text-4xl md:text-6xl font-bold font-display mt-16 md:mt-64 text-rosePineDawn-love dark:text-rosePine-foam"}
                       id="projects"
                       initial={{ opacity: 0, y: 50 }}
                       whileInView={{ opacity: 1, y: 0 }}
                       viewport={{ once: true }}
                       transition={{ delay: 0.25, duration: 1 }}
            >
                Project Showcase
            </motion.h1>
            <Break aniDelay={0.25}/>
            <ProjectLarge
                title={"InterviewPal"}
                description={"InterviewPal is a GPT-3.5 powered AI that helps you practice for your interviews. It will ask you common and relevant interview questions and give you insightful feedback on your answers."}
                image={"InterviewPal.png"}
                technologies={["Next.js", "Typescript", "Redis", "OpenAI", "GPT-3.5", "Rosepine", ]}
                github={"https://github.com/InterviewPal/InterviewPal"}
                website={"https://interviewpal.vercel.app/"}
                reverse
                aniDelay={0.25}
            />
            <Break aniDelay={0.5}/>
            <ProjectLarge
                title={"IGAQ"}
                description={"I Got A Queery (IGAQ) provides a safe space for the members of the LGBTQ+ community to ask questions, share stories, and read resources about all things LGBTQ+."}
                image={"IGAQ.png"}
                technologies={["Next.js", "Nest", "JavaScript", "Typescript", "Neo4j", "React", "Styled Components", "Mantine", ]}
                github={"https://github.com/IGAQ/NextApp"}
                website={"https://www.igaq.gay/"}
                reverse={false}
                aniDelay={0.5}
            />

            <Break aniDelay={0.25}/>
            <ProjectLarge
                title={"WordGotchu"}
                description={"WordGotchu is a Pixel styled web platform game based on Wordle and original characters known as “Gotchus’’ that battle against each other in an arena."}
                image={"WordGotchu.png"}
                technologies={["React", "JavaScript", "Node.js", "Express", "Firebase", "HTML/CSS" ]}
                github={"https://github.com/iantelli/word-gotchu"}
                website={"https://wordgotchu.herokuapp.com/"}
                reverse
                aniDelay={0.25}
            />
        </>
    );
}

export default App;
