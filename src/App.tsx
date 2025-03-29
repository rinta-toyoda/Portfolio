import Title from "./Components/Title.tsx";
import AboutMe from "./Components/AboutMe.tsx";
import MyExperience from "./Components/MyExperience.tsx";
import MyEducation from "./Components/MyEducation.tsx";
import MyProjects from "./Components/MyProjects.tsx";
import Others from "./Components/Others.tsx";
import Background from "./Components/Background.tsx";
import MySkills from "./Components/MySkills.tsx";

export default function App() {
  return (
    <div className="z-10 relative">
      <Background />
      <Title />
      <div className="flex flex-wrap justify-around items-start content-center">
        <AboutMe />
        <MyExperience />
        <MyEducation />
        <MyProjects />
        <MySkills />
        <Others />
      </div>
    </div>
  );
}
