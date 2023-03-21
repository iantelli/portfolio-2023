import React from "react";
import { motion } from "framer-motion";

type IconProps = {
    icon: React.ReactNode;
    link: string;
    newTab?: boolean;
    aria: string;
    hover?: boolean;
};

export default function Icon({ icon, hover, link, newTab, aria }: IconProps) {
    return (
        <>
            {newTab ? (
                <a href={link} aria-label={aria} target="_blank" rel="noreferrer">
                    <div className="flex items-center justify-center h-auto w-auto">
                        {hover ? <motion.div whileHover={{ scale: 1.2, rotate: 10 }}>{icon}</motion.div> : icon}
                    </div>
                </a>
            ) : (
                <a href={link} aria-lable={aria}>
                    <div className="flex items-center justify-center h-auto w-auto">
                        {hover ? <motion.div whileHover={{ scale: 1.2, rotate: 10 }}>{icon}</motion.div> : icon}
                    </div>
                </a>
            )}
        </>
    );
}
