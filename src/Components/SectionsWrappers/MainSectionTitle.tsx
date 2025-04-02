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
    <div className="sm:w-full w-[380px] text-center mb-10">
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
           font-bold sm:text-[6rem] text-[3rem] ${isShowing ? "text-[#26A69A]" : "text-[#FF6F61] button-width rounded-2xl"}
        `}
      >
        {title}
      </motion.button>
      {isShowing && <hr className="bg-white sm:w-[80%] w-[350px] mx-auto" />}
    </div>
  );
}
