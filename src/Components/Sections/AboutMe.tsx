import MainSectionWrapper from "../SectionsWrappers/MainSectionWrapper.tsx";
import PlaceHolderImage from "../../assets/50x50.png";
import Bubbles from "../Utils/Bubbles.tsx";

export default function AboutMe() {
  return (
    <MainSectionWrapper title="About Me">
      <div className="flex lg:justify-between justify-center items-center lg:items-start flex-col-reverse lg:flex-row">
        <div className="flex flex-col basis-[50%] mx-10">
          <div className="mb-10 text-3xl text-[#FFF8DB]">
            <p className="mb-5">
              <u>About Me</u>
            </p>
            <p>
              Hi! My name is Rinta. I am a Master of Computer Scince Student in
              University of Sydney and also a full-stack engineer with nearly 2
              years of experience.
            </p>
          </div>

          <div className="mb-10 text-3xl text-[#FFF8DB]">
            <p className="mb-5">
              <u>My work experience</u>
            </p>
            <p>
              I have worked at companies like bluh bluh bluh and bluh bluh bluh.
              I have gained expeiences such as something
            </p>
          </div>

          <div className="mb-10 text-3xl text-[#FFF8DB]">
            <p className="mb-5">
              <u>My education</u>
            </p>
            <p>
              I have worked at companies like bluh bluh bluh and bluh bluh bluh.
              I have gained expeiences such as something
            </p>
          </div>

          <div className="mb-10">
            <p className="text-3xl text-[#FFF8DB] mb-5">
              <u>My skills</u>
            </p>
            <Bubbles
              items={[
                "PHP",
                "Laravel",
                "Python",
                "FastAPI",
                "Java",
                "Kotlin",
                "SpringBoot",
                "HTML",
                "CSS",
                "Tailwind",
                "JavaScript",
                "TypeScript",
                "React",
                "AWS",
              ]}
            />
          </div>
        </div>
        <img
          className="h-[30rem] w-[20rem] lg:mr-[4rem] xl:mr-[9rem] lg:ml-10 mb-10 rounded-2xl"
          src={PlaceHolderImage}
        />
      </div>
    </MainSectionWrapper>
  );
}
