import { motion } from "motion/react";
import { ReactNode } from "react";

export default function Card({
  name,
  description,
  icon,
  skills,
}: {
  name: string;
  description: string;
  icon: ReactNode;
  skills: string[];
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.2 }}
      className="bg-[#FFF8DB] rounded-2xl bg-opacity-85 p-4 basis-[45%]"
    >
      <h1 className="text-2xl text-[#7D8ABC] font-bold">{name}</h1>
      <div className="flex flex-row gap-2">
        <p className="text-lg text-[#304463]">{description}</p>
        <div className="mr-3">{icon}</div>
      </div>
      <p className="text-xl font-bold text-[#7D8ABC]">Used Skills</p>
      <div className="flex flex-row flex-wrap justify-center gap-3 mt-1">
        {skills.map((skill) => (
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="h-6 w-24 bg-[#7D8ABC] rounded-xl text-center font-bold text-[#FFF8DB]"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
