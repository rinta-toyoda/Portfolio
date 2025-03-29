import { motion } from "motion/react";
import { FaGithub } from "react-icons/fa";

export default function MainNavigation() {
  return (
    <motion.header
      whileHover={{ backgroundColor: "rgba(255,248,219,1)" }}
      className="group w-full h-20 top-[-10px] bg-opacity-30 bg-[#FFF8DB] text-[#FFF8DB] hover:text-[#7D8ABC] fixed"
    >
      <div className="font-bold text-4xl ml-4 pt-6">Rinta's Portfolio</div>
      <motion.a
        href="https://github.com/rinta-toyoda"
        target="_blank"
        initial={{ scale: 1, originX: 0.5, originY: 0.5 }}
        whileHover={{ scale: 1.2, originX: 0.5, originY: 0.5 }}
        style={{
          width: 40,
          height: 40,
          display: "inline-block",
          transformOrigin: "50% 50%",
        }}
        className="absolute right-5 top-6 cursor-pointer"
      >
        <FaGithub size={40} className="group-hover:text-black" />
      </motion.a>
    </motion.header>
  );
}
