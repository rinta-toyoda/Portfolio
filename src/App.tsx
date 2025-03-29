import { useEffect } from "react";
import Title from "./Components/Utils/Title.tsx";
import AboutMe from "./Components/Sections/AboutMe.tsx";
import MyExperience from "./Components/Sections/MyExperience.tsx";
import MyEducation from "./Components/Sections/MyEducation.tsx";
import MyProjects from "./Components/Sections/MyProjects.tsx";
import Background from "./Components/Background.tsx";
import MainNavigation from "./Components/Sections/MainNavigation.tsx";

export default function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="z-10 relative">
      <Background />
      <MainNavigation />
      <Title />
      <AboutMe />
      <MyProjects />
      <div className="flex flex-wrap justify-around items-start content-center">
        <MyExperience />
        <MyEducation />
      </div>
      <div className="mb-[40rem]"></div>
    </div>
  );
}
