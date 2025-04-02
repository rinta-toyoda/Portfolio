import { PiChalkboardTeacher } from "react-icons/pi";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { FaLaptopCode } from "react-icons/fa";

const ICON_SIZE = 80;

export const WorkDatas = [
  {
    id: 0,
    name: "Tutoring Teacher, Tokyo Individualized Education Inst., Japan",
    date: "01/06/2020–30/12/2020",
    icon: <PiChalkboardTeacher size={ICON_SIZE} color="#FF6F61" />,
    description:
      "Teaching elementary to high school children, mathematics, physics, Japanese, English and Science.",
    skills: ["Mathematics", "Physics", "Science", "Japanese", "English"],
  },
  {
    id: 1,
    name: "Programming Teacher, Viling Inc, Japan",
    date: "01/04/2021–30/03/2022",
    icon: <LiaChalkboardTeacherSolid size={ICON_SIZE} color="#26A69A" />,
    description: "Teaching students basics of programming.",
    skills: ["Python"],
  },
  {
    id: 2,
    name: "Backend Engineer Internship, Nuco Inc., Japan",
    date: "28/12/2022–30/06/2024",
    icon: <FaLaptopCode size={ICON_SIZE} color="#7D8ABC" />,
    description:
      "Implementing API, testing, and debugging with Python, FastAPI, and AWS. Collaborated and discussed about the efficiency and quality of the codes.",
    skills: ["Python", "FastAPI", "AWS", "Github"],
  },
  {
    id: 3,
    name: "Full-stack Engineer Internship, Bocek Inc., Japan",
    date: "15/01/2025-CURRENT",
    icon: <FaLaptopCode size={ICON_SIZE} color="#FF6F61" />,
    description:
      "Implementing API, testing and debugging fast growing Artificial Intelligence SaaS platform in Japan. Discussed about the methods to implement and infrastructure for memory and time efficient algorithms.",
    skills: [
      "JavaScript",
      "TypeScript",
      "React",
      "Python",
      "FastAPI",
      "PHP",
      "Laravel",
      "Kotlin",
      "AWS",
      "Github",
      "Terraform",
    ],
  },
];
