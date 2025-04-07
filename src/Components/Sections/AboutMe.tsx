import MainSectionWrapper from "../SectionsWrappers/MainSectionWrapper.tsx";
import MyPhoto from "../../assets/MyPhoto.jpg";
import Bubbles from "../Utils/Bubbles.tsx";
import { motion } from "motion/react";
import Content from "../Utils/Content.tsx";

export default function AboutMe() {
  return (
    <MainSectionWrapper title="About Me">
      <div className="flex lg:justify-between justify-center items-center lg:items-start flex-col-reverse lg:flex-row">
        <div className="flex flex-col basis-[60%] sm:mx-10 mx-2">
          <Content title="About Me">
            <p className="content-text">
              Full-stack Engineer from Japan with 2 years of experience. Able to
              speak Japanese, English and Chinese.
            </p>
          </Content>

          <Content title="My work experience">
            <p className="sm:text-3xl text-xl mb-2 text-[#FF6F61] font-bold">
              1. Full-stack Engineer
            </p>
            <p className="content-text">
              <span className="font-semibold text-[#FFB74D]">
                Company Project:{" "}
              </span>
              Fast growing AI SaaS platform Taskhub (https://taskhub.jp/).
            </p>
            <p className="content-text">
              <span className="font-semibold text-[#FFB74D]">Role: </span>{" "}
              Defining software requirements, APIs, tests implementations and
              debugging.
            </p>
            <p className="mb-10">
              {" "}
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
                  "TypeScript",
                  "React",
                  "Docker",
                  "AWS",
                ]}
              />
            </p>

            <p className="sm:text-3xl text-xl mb-2 text-[#FF6F61] font-bold">
              {/*I have worked as both a back-end and full-stack engineer. Jobs */}
              {/*  Through*/}
              {/*the experience, I acquired the web application*/}
              {/*development skills, experience to work as a team and*/}
              {/*defining software requirements by discussing with tech-leads,*/}
              {/*managers and CEOs.*/}
              2. Backend Engineer
            </p>
            <p className="content-text">
              <span className="font-semibold text-[#FFB74D]">
                Company Project:{" "}
              </span>
              : TV program management software.
            </p>
            <p className="content-text">
              <span className="font-semibold text-[#FFB74D]">Role: </span> APIs,
              tests implementations and debugging.
            </p>
            <p>
              {" "}
              <Bubbles items={["Python", "FastAPI", "Docker", "AWS"]} />
            </p>
          </Content>

          <Content title="My education">
            <p className="content-text">
              In my undergraduate course, I mainly studied and researched about
              machine learning and neuroscience. Through the research, my
              interest tilted towards artificial intelligence and IT, and
              enrolled in Master of Computer Science at University of Sydney to
              further deepen my knowledge.
            </p>
          </Content>

          <Content title="Languages">
            <Bubbles items={["Japanese", "English", "Chinese"]} />
          </Content>
        </div>
        <motion.img
          whileHover={{ scale: 1.1 }}
          className="lg:w-[38%] sm:w-[22rem] w-[15rem] lg:mt-[15rem] lg:mr-[3%] lg:ml-10 mb-10 rounded-2xl"
          src={MyPhoto}
        ></motion.img>
      </div>
      <motion.div
        whileHover={{ scale: 1.1 }}
        className="text-center text-[#FFB74D] font-bold sm:text-4xl text-xl"
      >
        Scroll down for more information!!
      </motion.div>
    </MainSectionWrapper>
  );
}
