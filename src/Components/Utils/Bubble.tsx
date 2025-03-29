import { motion } from "motion/react";

export default function Bubble({ item }: { item: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.2, backgroundColor: "#304463" }}
      className="h-[2rem] w-[7rem] bg-[#7D8ABC] rounded-xl text-center font-bold text-[1.25rem] text-[#FFF8DB] "
    >
      {item}
    </motion.div>
  );
}
