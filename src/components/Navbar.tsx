import { useTheme } from "../hooks/useTheme";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
    const { theme, handleThemeChange } = useTheme();

    return (
        <div className="flex justify-between items-center px-2 py-4 bg-rosePineDawn-base dark:bg-rosePine-base">
            <div className="flex items-center">
                <h1 className="text-2xl md:text-4xl font-bold font-display text-rosePineDawn-love dark:text-rosePine-foam">
                    Iantelli
                </h1>
            </div>
            <div className="flex items-center">
                <ThemeToggle />
            </div>
        </div>
    );
}
