import { motion } from "framer-motion";

type BreakProps = {
  aniDelay: number;
};
export default function Break({ aniDelay }: BreakProps) {
  return (
    <motion.div
      className={"flex justify-center items-center text-center"}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: aniDelay, duration: 0.5 }}
    >
      <hr
        className={
          "border-rosePineDawn-subtle dark:border-rosePine-subtle w-5/6 border-1 my-4 lg:hidden"
        }
      />
    </motion.div>
  );
}
