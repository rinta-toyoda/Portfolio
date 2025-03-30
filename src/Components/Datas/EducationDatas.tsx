import { LuBrain } from "react-icons/lu";
import { RiRobot2Line } from "react-icons/ri";
import { FcEngineering } from "react-icons/fc";

const ICON_SIZE = 90;

export const EducationDatas = [
  {
    id: 1,
    name: "Brain Science Training Program, RIKEN Center for Brain Science",
    date: "11/10/2022 – 20/06/2023",
    icon: <LuBrain size={ICON_SIZE} color="#FFB74D" />,
    description:
      "Gained knowledge about the basics and the latest researches of Neuroscience and Neural Engineering",
    skills: ["Neuroscience"],
  },
  {
    id: 2,
    name: "Bachelor of Engineering, Waseda University",
    date: "03/04/2020-21/03/2024",
    icon: <FcEngineering size={ICON_SIZE} />,
    description:
      "Gained knowledge of Mathematics, Physics, Circuit Theory, Biology, Neuroscience, Machine Learning and Programming. Researched and analyzed brain signal EEG with machine learning and signal processing.",
    skills: [
      "Mathematics",
      "Physics",
      "Circuit Theory",
      "Machine Learning",
      "Signal Processing",
      "Biology",
      "Neuroscience",
      "Data Science",
      "Artifical Intelligence",
      "Python",
      "Java",
      "C++",
    ],
  },
  {
    id: 3,
    name: "Master of Computer Science, University of Sydney",
    date: "29/07/2024–CURRENT",
    icon: <RiRobot2Line size={ICON_SIZE} color="#26A69A" />,
    description:
      "Currently enrolled. Studying about Artifical Intelligence and Data Science. Learnt about Database Management, Project Management, Software Engineering and Networks",
    skills: [
      "Python",
      "Java",
      "Database Management",
      "SQL",
      "PostgreSQL",
      "Networks",
      "Project Management",
      "Artifical Intelligence",
      "Software Engineering",
      "Data Science",
    ],
  },
];
