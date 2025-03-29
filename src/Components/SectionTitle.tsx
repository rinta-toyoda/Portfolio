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
        transition={{ type: "spring", stiffness: 500 }}
        onClick={onClickHandler}
        className="text-white font-bold text-[6rem]"
      >
        {title}
      </motion.button>
      {isShowing && <hr className="bg-white w-[80%] mx-auto" />}
    </div>
  );
}
