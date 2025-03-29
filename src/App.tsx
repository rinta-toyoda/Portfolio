import { useEffect } from "react";
import Title from "./Components/Title.tsx";
import AboutMe from "./Components/AboutMe.tsx";
import MyExperience from "./Components/MyExperience.tsx";
import MyEducation from "./Components/MyEducation.tsx";
import MyProjects from "./Components/MyProjects.tsx";
import Background from "./Components/Background.tsx";
import MainNavigation from "./Components/MainNavigation.tsx";

export default function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="z-10 relative">
      <Background />
      <MainNavigation />
      <Title />
      <div className="flex flex-wrap justify-around items-start content-center">
        <AboutMe />
        <MyProjects />
        <MyExperience />
        <MyEducation />
      </div>
      <div className="mb-[40rem]"></div>
    </div>
  );
}
