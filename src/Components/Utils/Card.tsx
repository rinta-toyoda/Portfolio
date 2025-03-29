import { motion } from "motion/react";
import { ReactNode } from "react";
import Bubbles from "./Bubbles.tsx";

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
      whileHover={{ scale: 1.2, backgroundColor: "#FFF8DB" }}
      className="bg-[#FFF8DB] rounded-2xl bg-opacity-85 p-4 sm:basis-[45%] basis-[90%] xl:w-[100%] sm:w-[70%] w-[80%] mx-auto"
      key={name}
    >
      <h1 className="text-2xl text-[#7D8ABC] font-bold">{name}</h1>
      <div className="flex flex-row gap-2 justify-between">
        <p className="text-lg text-[#304463]">{description}</p>
        <div className="mr-3">{icon}</div>
      </div>
      <p className="text-xl font-bold text-[#7D8ABC]">Used Skills</p>
      <Bubbles items={skills} />
    </motion.div>
  );
}
