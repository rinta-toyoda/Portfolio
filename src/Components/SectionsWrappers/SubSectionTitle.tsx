import { motion } from "motion/react";

export default function SubSectionTitle({
  title,
  onClickHandler,
  isShowing,
}: {
  title: string;
  onClickHandler: () => void;
  isShowing: boolean;
}) {
  return (
    <motion.div
      className="sm:w-full w-[380px] text-center mb-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.8 }}
      transition={{ duration: 1 }}
    >
      <motion.button
        whileHover={{
          scale: 1.1,
          backgroundColor: isShowing ? "transparent" : "#FFF8DB",
        }}
        whileTap={{ rotate: 3 }}
        transition={{ type: "spring", stiffness: 500, duration: 0.1 }}
        animate={{
          backgroundColor: isShowing ? "transparent" : "rgba(255,248,219,0.8)",
        }}
        onClick={onClickHandler}
        className={`
           font-bold sm:text-[6rem] text-[3rem] ${isShowing ? "text-[#A6CDC6]" : "text-[#7D8ABC] button-width rounded-2xl"}
        `}
      >
        {title}
      </motion.button>
      {isShowing && <hr className="bg-white sm:w-[80%] w-[350px] mx-auto" />}
    </motion.div>
  );
}
