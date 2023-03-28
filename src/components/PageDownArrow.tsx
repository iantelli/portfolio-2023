import { motion } from "framer-motion";
import Icon from "./Icon";
import { RiArrowDropDownLine } from "react-icons/ri";

export default function PageDownArrow() {
  return (
    <motion.div
      className="flex justify-center items-center w-full h-full mt-12 md:mt-24"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.5 }}
    >
      <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
        <Icon
          aria={"link to project showcase"}
          link={"#projects"}
          icon={
            <RiArrowDropDownLine className="h-24 w-24 text-rosePineDawn-love dark:text-rosePine-foam" />
          }
        />
      </motion.div>
    </motion.div>
  );
}
