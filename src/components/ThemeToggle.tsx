import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { RiMoonClearFill, RiSunFill } from "react-icons/ri";
import { useTheme } from "../hooks/useTheme";

export default function ThemeToggle() {
  const { theme, handleThemeChange } = useTheme();

  const [isToggle, setIsToggle] = useState(theme === "dark");

  useEffect(() => {
    setIsToggle(theme === "dark");
  }, [theme]);

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
      className={`flex-start flex h-[25] w-[50px] md:h-[50px] md:w-[100px] rounded-[50px] bg-rosePineDawn-highlightHigh p-[5px] shadow-inner hover:cursor-pointer dark:bg-rosePine-highlightHigh ${
        isToggle && "place-content-end"
      }`}
    >
      <motion.div
        className="flex h-[20px] w-[20px] md:h-[40px] md:w-[40px] items-center justify-center rounded-full bg-black/90"
        layout
        transition={spring}
      >
        <motion.div whileTap={{ rotate: 360 }}>
          {isToggle ? (
            <RiSunFill className="h-3 w-3 md:h-6 md:w-6 text-rosePine-gold" />
          ) : (
            <RiMoonClearFill className="h-3 w-3 md:h-6 md:w-6 text-rosePineDawn-highlightHigh" />
          )}
        </motion.div>
      </motion.div>
    </div>
  );
}
