import { ReactNode } from "react";
import { motion } from "motion/react";

export default function ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="mb-10">
      <motion.p
        initial={{ scale: 1, originX: 0.5, originY: 0.5 }}
        whileHover={{ scale: 1.1, originX: 0.5, originY: 0.5 }}
        style={{
          display: "inline-block",
          transformOrigin: "50% 50%",
        }}
        className="mb-5 font-bold sm:text-4xl text-3xl text-[#FFB74D] w-max mx-auto"
      >
        <u>{title}</u>
      </motion.p>
      {children}
    </div>
  );
}
