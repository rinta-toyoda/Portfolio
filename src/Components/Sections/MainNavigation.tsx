import { motion } from "motion/react";
import { FaGithub } from "react-icons/fa";

export default function MainNavigation() {
  return (
    <motion.header
      whileHover={{ backgroundColor: "rgba(255,248,219,1)" }}
      className="group flex justify-between w-full h-20 top-[-10px] bg-opacity-30 bg-[#FFF8DB] text-[#FFF8DB] hover:text-[#7D8ABC] z-20 fixed"
    >
      <div className="flex-1 font-bold text-4xl ml-4 pt-6">
        Rinta's Portfolio
      </div>
      <motion.a
        href="https://github.com/rinta-toyoda"
        target="_blank"
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.2 }}
        className="cursor-pointer mt-6 mr-3"
      >
        <FaGithub size={40} className="group-hover:text-black" />
      </motion.a>
    </motion.header>
  );
}
