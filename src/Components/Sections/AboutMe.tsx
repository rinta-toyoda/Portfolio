import MainSectionWrapper from "../SectionsWrappers/MainSectionWrapper.tsx";
import PlaceHolderImage from "../../assets/50x50.png";

export default function AboutMe() {
  return (
    <MainSectionWrapper title="About Me">
      <div className="flex">
        <div className="flex flex-col basis-[50%] text-3xl text-[#FFF8DB] ml-10 mr-10">
          <div className="mb-10">
            <p>
              <u>About Me</u>
            </p>
            <p>
              Hi! My name is Rinta. I am a Master of Computer Scince Student in
              University of Sydney and also a full-stack engineer with nearly 2
              years of experience.
            </p>
          </div>

          <div className="mb-10">
            <p>
              <u>My work experience</u>
            </p>
            <p>
              I have worked at companies like bluh bluh bluh and bluh bluh bluh.
              I have gained expeiences such as something
            </p>
          </div>

          <div className="mb-10">
            <p>
              <u>My education</u>
            </p>
            <p>
              I have worked at companies like bluh bluh bluh and bluh bluh bluh.
              I have gained expeiences such as something
            </p>
          </div>

          <div className="mb-10">
            <p>
              <u>My skills</u>
            </p>
            <p>
              I am proficient in languages and frameworks such as Python
              (FastAPI), PHP (Laravel), Kotlin (Spring Boot) and TypeScript with
              React.
            </p>
          </div>
        </div>
        <img
          className="lg:h-[30rem] lg:w-[20rem] md:h-[24rem] md:w-[16rem] sm:h-[18rem] sm:w-[12rem] mr-[2rem] mt-[8rem] ml-10 mb-3 rounded-2xl"
          src={PlaceHolderImage}
        />
      </div>
    </MainSectionWrapper>
  );
}
