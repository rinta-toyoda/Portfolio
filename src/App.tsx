import { useEffect } from "react";
import Title from "./Components/Sections/Title.tsx";
import AboutMe from "./Components/Sections/AboutMe.tsx";
import WorkExperience from "./Components/Sections/WorkExperience.tsx";
import MyEducation from "./Components/Sections/MyEducation.tsx";
import MyProjects from "./Components/Sections/MyProjects.tsx";
import Background from "./Components/Background.tsx";
import MainNavigation from "./Components/Sections/MainNavigation.tsx";
import Links from "./Components/Sections/Links.tsx";
import { useMediaQuery } from "@mui/material";
import { Analytics } from "@vercel/analytics/react";

export default function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const isMobile = useMediaQuery("(max-width:767px)");

  let SubContents = (
    <div className="sm:flex sm:flex-wrap sm:justify-around sm:items-start sm:content-center">
      <WorkExperience isMobile={isMobile} />
      <MyEducation isMobile={isMobile} />
    </div>
  );

  if (isMobile) {
    SubContents = (
      <>
        <WorkExperience isMobile={isMobile} />
        <MyEducation isMobile={isMobile} />
      </>
    );
  }

  return (
    <div className="z-10 relative w-full">
      <Background isMobile={isMobile} />
      <MainNavigation />
      <Title />
      <div className="flex flex-col items-center">
        <AboutMe />
        <MyProjects />
        {SubContents}
        <Links />
      </div>
      <div className="mb-[40rem]"></div>
      <Analytics />
    </div>
  );
}
