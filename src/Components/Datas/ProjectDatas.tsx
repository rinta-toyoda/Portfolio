import { LuNotebookPen } from "react-icons/lu";
import { CgWebsite } from "react-icons/cg";
import { LuShip } from "react-icons/lu";
import { RiMoneyDollarCircleLine } from "react-icons/ri";

const ICON_SIZE = 80;

export const ProjectDatas = [
  {
    id: 1,
    name: "Portfolio Website",
    date: "",
    icon: <CgWebsite size={ICON_SIZE} color="#FF6F61" />,
    description: "This Website. A very nicely animated front-end website.",
    skills: ["HTML", "TypeScript", "React", "Vite"],
    link: "https://github.com/rinta-toyoda/Portfolio",
  },
  {
    id: 2,
    name: "Bezzecca Website Design",
    date: "",
    icon: <LuShip size={ICON_SIZE} color="#304463" />,
    description: "A website that sells imported Italian Olive Oils.",
    skills: ["Wordpress"],
    link: "http://bezzecca.com.au/",
  },
  {
    id: 3,
    name: "Todo App",
    date: "",
    icon: <LuNotebookPen size={ICON_SIZE} color="#7D8ABC" />,
    description: "Backend app that records todos.",
    skills: ["Python", "FastAPI", "Docker"],
    link: "https://github.com/rinta-toyoda/todo_app",
  },
  {
    id: 4,
    name: "Money Recorder",
    date: "",
    icon: <RiMoneyDollarCircleLine size={ICON_SIZE} color="#FF9B17" />,
    description:
      "Still in progress. Creating a full-stack app that records money that is used daily. Records money in real time international currency.",
    skills: ["HTML", "TypeScript", "React", "Vite", "Kotlin", "Spring Boot"],
    link: "https://github.com/rinta-toyoda/MoneyRecorder",
  },
];
