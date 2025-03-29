import { motion } from "motion/react";

export default function MainSectionTitle({
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
          backgroundColor: isShowing ? "transparent" : "#FFF8DB",
        }}
        whileTap={{ rotate: 3 }}
        transition={{ type: "spring", stiffness: 500, duration: 0.1 }}
        animate={{
          backgroundColor: isShowing ? "transparent" : "#FFB74D",
        }}
        onClick={onClickHandler}
        className={`
           font-bold text-[6rem] ${isShowing ? "text-[#26A69A]" : "text-[#FF6F61] button-width rounded-2xl"}
        `}
      >
        {title}
      </motion.button>
      {isShowing && <hr className="bg-white w-[80%] mx-auto" />}
    </div>
  );
}
