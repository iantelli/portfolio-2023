import { motion } from "framer-motion";
import React, { useState } from "react";
import { RiMoonClearFill, RiSunFill } from "react-icons/ri";
import { useTheme } from "../hooks/useTheme";

export default function ThemeToggle() {
    const { theme, handleThemeChange } = useTheme();

    const [isToggle, setIsToggle] = useState(theme !== "light");

    const handleToggle = () => {
        setIsToggle(!isToggle);
        handleThemeChange();
    };

    const spring = {
        type: "spring",
        stiffness: 700,
        damping: 30,
    };

    return (
        <div
            onClick={handleToggle}
            className={`flex-start flex h-[50px] w-[100px] rounded-[50px] bg-rosePineDawn-highlightHigh p-[5px] shadow-inner hover:cursor-pointer dark:bg-rosePine-highlightHigh ${
                isToggle && "place-content-end"
            }`}
        >
            <motion.div
                className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-black/90"
                layout
                transition={spring}
            >
                <motion.div whileTap={{ rotate: 360 }}>
                    {isToggle ? (
                        <RiSunFill className="h-6 w-6 text-rosePine-gold" />
                    ) : (
                        <RiMoonClearFill className="h-6 w-6 text-rosePineDawn-highlightHigh" />
                    )}
                </motion.div>
            </motion.div>
        </div>
    );
}
