import SubSectionWrapper from "../SectionsWrappers/SubSectionWrapper.tsx";
import PlaceHolderImage from "../../assets/50x50.png";

export default function AboutMe() {
  return (
    <SubSectionWrapper title="About Me">
      <div className="">
        <img
          className="float-right h-[20rem] w-auto mr-10 ml-10 mb-3"
          src={PlaceHolderImage}
        />
        <div className="text-3xl text-[#FFF8DB] ml-10 mr-10">
          <p>Hi! My name is Rinta. Here is a quick introduction about me:</p>
          <ul>
            <li>Full-stack Engineer with nearly 2 years of experience. </li>
            <li>Master of Computer Science Student in University of Sydney.</li>
            <li>
              Founder of Japanese Student Association in University of Sydney.
            </li>
            <li>
              Researched and analyzed brain signals in the bachelor's of
              engineering in Waseda University, Japan.
            </li>
            <li>Studies Chinese</li>
          </ul>
          <p>
            I am proficient in languages and frameworks such as Python
            (FastAPI), PHP (Laravel), Kotlin (Spring Boot) and TypeScript with
            React.
          </p>
        </div>
      </div>
    </SubSectionWrapper>
  );
}
