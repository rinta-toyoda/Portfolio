import { motion } from "motion/react";
import { IconType } from "react-icons";

export default function Card({
  name,
  description,
  icon,
  skills,
}: {
  name: string;
  description: string;
  icon: IconType;
  skills: string[];
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.2 }}
      className="bg-gray-300 rounded-2xl bg-opacity-10 p-4 basis-[40%]"
    >
      <h1 className="text-2xl font-bold">{name}</h1>
      <div className="flex flex-row gap-2">
        <p className="text-lg">{description}</p>
        <div className="mr-3">{icon}</div>
      </div>
      <p className="text-xl font-bold">Used Skills</p>
      <div className="flex flex-row flex-wrap gap-2 mt-1">
        {skills.map((skill) => (
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="h-6 w-24 bg-gray-500 rounded-xl text-center font-bold"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
