import { motion } from "motion/react";

export default function Title() {
  return (
    <motion.div
      className="flex-1 max-w-16 text-[#FFF8DB] top-[7rem] mt-10 mb-[18rem] left-10 space-y-0 relative font-bold md:text-[10rem] sm:text-[8rem] text-[4rem] text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <motion.p
        whileHover={{ scale: 1.1, rotate: -5 }}
        transition={{ type: "spring", stiffness: 500 }}
      >
        Rinta's
      </motion.p>
      <motion.p
        whileHover={{ scale: 1.1, rotate: -5 }}
        transition={{ type: "spring", stiffness: 500 }}
      >
        Portfolio
      </motion.p>
    </motion.div>
  );
}
