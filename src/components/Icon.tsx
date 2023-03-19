import React from "react";
import { motion } from "framer-motion";

type IconProps = {
    icon: React.ReactNode;
};

export default function Icon({ icon }: IconProps) {
    return (
        <div className="flex items-center justify-center h-auto w-auto">
            <motion.div whileHover={{ scale: 1.2, rotate: 10 }}>
                {icon}
            </motion.div>
        </div>
    );
}
