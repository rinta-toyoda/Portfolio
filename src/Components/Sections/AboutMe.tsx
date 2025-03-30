import MainSectionWrapper from "../SectionsWrappers/MainSectionWrapper.tsx";
import MyPhoto from "../../assets/MyPhoto.jpg";
import Bubbles from "../Utils/Bubbles.tsx";
import { motion } from "motion/react";
import Content from "../Utils/Content.tsx";

export default function AboutMe() {
  return (
    <MainSectionWrapper title="About Me">
      <div className="flex lg:justify-between justify-center items-center lg:items-start flex-col-reverse lg:flex-row">
        <div className="flex flex-col basis-[50%] mx-10">
          <Content title="About Me">
            <p className="content-text">
              Full-stack Engineer from Japan with around 2 years of experience.
              Able to speak Japanese, English and a little Chinese.
            </p>
          </Content>

          <Content title="My work experience">
            <p className="content-text">
              I have worked as both a back-end and full-stack engineer. Through
              the experience, I have acquired not only the web application
              development skills but also the skills to work as a team and
              defining software requirements by discussing with tech-leads,
              managers and CEOs.
            </p>
          </Content>

          <Content title="My education">
            <p className="content-text">
              In my undergraduate course, I have mainly studied and researched
              about machine learning and neuroscience. Through the research, my
              interest tilted towards artificial intelligence and IT, and
              enrolled in Master of Computer Science at University of Sydney to
              further deepen my knowledge.
            </p>
          </Content>

          <Content title="My IT skills">
            <Bubbles
              items={[
                "PHP",
                "Laravel",
                "Python",
                "FastAPI",
                "Kotlin",
                "Spring Boot",
                "PostgreSQL",
                "Tailwind",
                "JavaScript",
                "TypeScript",
                "React",
                "Vite",
                "Docker",
                "AWS",
              ]}
            />
          </Content>

          <Content title="Languages">
            <Bubbles items={["Japanese", "English", "Chinese"]} />
          </Content>
        </div>
        <motion.img
          whileHover={{ scale: 1.1 }}
          className="lg:w-[40%] w-[22rem] lg:mt-[15rem] lg:mr-[3%] lg:ml-10 mb-10 rounded-2xl"
          src={MyPhoto}
        ></motion.img>
      </div>
    </MainSectionWrapper>
  );
}
