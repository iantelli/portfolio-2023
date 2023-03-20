import { useTheme } from "../hooks/useTheme";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
    const { theme, handleThemeChange } = useTheme();

    return (
        <div className="flex sticky top-0 justify-between items-center px-2 py-4 bg-rosePineDawn-base dark:bg-rosePine-base z-50">
            <div className="flex items-center">
                <h1 className="text-2xl md:text-4xl font-bold font-display text-rosePineDawn-subtle dark:text-rosePine-subtle">
                    {"<"}<span className={"text-rosePineDawn-love dark:text-rosePine-foam"}>Iantelli </span>{" />"}
                </h1>
            </div>
            <div className="flex items-center">
                <ThemeToggle />
            </div>
        </div>
    );
}
