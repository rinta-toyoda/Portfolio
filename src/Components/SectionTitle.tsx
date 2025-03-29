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
        whileHover={{ scale: 1.1 }}
        whileTap={{ rotate: 3 }}
        transition={{ type: "spring", stiffness: 500, duration: 0.1 }}
        animate={{ backgroundColor: isShowing ? "transparent" : "#FFF8DB" }}
        onClick={onClickHandler}
        className={`
          text-[#7D8ABC] font-bold text-[6rem] ${!isShowing && "w-[50rem] rounded-2xl"}
        `}
      >
        {title}
      </motion.button>
      {isShowing && <hr className="bg-white w-[80%] mx-auto" />}
    </div>
  );
}
