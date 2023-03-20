import { useTheme } from "../hooks/useTheme";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
    const { theme, handleThemeChange } = useTheme();

    return (
        <div className="flex sticky top-0 justify-between items-center px-4 py-2 md:px-24  bg-rosePineDawn-base dark:bg-rosePine-base z-50">
            <div className="flex items-center">
                <h1 className="text-2xl md:text-4xl font-bold font-display text-rosePineDawn-subtle dark:text-rosePine-subtle">
                    <a className={"text-rosePineDawn-love dark:text-rosePine-foam"} href={"#"}>Iantelli </a>
                </h1>
            </div>
            <div className="flex items-center">
                <ThemeToggle />
            </div>
        </div>
    );
}
