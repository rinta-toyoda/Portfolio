import { motion } from "motion/react";

export default function SectionTitle({
  title,
  onClickHandler,
  isShowing,
}: {
  title: string;
  onClickHandler: () => void;
  isShowing: boolean;
}) {
  return (
    <div className="w-full text-center mb-10">
      <motion.button
        whileHover={{
          scale: 1.1,
          backgroundColor: isShowing ? "transparent" : "rgba(255,248,219,1)",
        }}
        whileTap={{ rotate: 3 }}
        transition={{ type: "spring", stiffness: 500, duration: 0.1 }}
        animate={{
          backgroundColor: isShowing ? "transparent" : "rgba(255,248,219,0.8)",
        }}
        onClick={onClickHandler}
        className={`
           font-bold text-[6rem] ${isShowing ? "text-[#A6CDC6]" : "text-[#7D8ABC] w-[43rem] rounded-2xl"}
        `}
      >
        {title}
      </motion.button>
      {isShowing && <hr className="bg-white w-[80%] mx-auto" />}
    </div>
  );
}
