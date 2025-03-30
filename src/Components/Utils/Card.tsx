import { motion } from "motion/react";
import { ReactNode } from "react";
import Bubbles from "./Bubbles.tsx";

export default function Card({
  name,
  description,
  icon,
  skills,
  skills_title = "Used Skills",
  link,
}: {
  name: string;
  description: string;
  icon: ReactNode;
  skills: string[];
  skills_title: string;
  link?: string;
}) {
  let nameElement = (
    <motion.h1
      initial={{ scale: 1, originX: 0.5, originY: 0.5 }}
      whileHover={{ scale: 1.05, originX: 0.5, originY: 0.5 }}
      style={{
        display: "inline-block",
        transformOrigin: "50% 50%",
      }}
      className="text-2xl text-[#7D8ABC] font-bold"
    >
      {name}
    </motion.h1>
  );

  let iconElement = (
    <motion.div whileHover={{ scale: 1.1 }} className="mr-3 mt-3">
      {icon}
    </motion.div>
  );

  if (link) {
    nameElement = (
      <a href={link} target="_blank">
        {nameElement}
      </a>
    );

    iconElement = (
      <a href={link} target="_blanks">
        {iconElement}
      </a>
    );
  }

  return (
    <motion.div
      whileHover={{ scale: 1.2, backgroundColor: "#FFF8DB" }}
      className="bg-[#FFF8DB] rounded-2xl bg-opacity-85 p-4 sm:basis-[45%] basis-[90%] xl:w-[100%] sm:w-[70%] w-[80%] mx-auto"
      key={name}
    >
      {nameElement}
      <div className="flex flex-row gap-2 justify-between">
        <p className="text-lg text-[#304463]">{description}</p>
        {iconElement}
      </div>
      <p className="text-xl font-bold text-[#7D8ABC] mt-2">{skills_title}</p>
      <Bubbles items={skills} />
    </motion.div>
  );
}
