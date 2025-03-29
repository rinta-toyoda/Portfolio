import SectionWrapper from "./SectionWrapper.tsx";
import PlaceHolderImage from "../assets/50x50.png";

export default function AboutMe() {
  return (
    <SectionWrapper title="About Me">
      <div className="flex flex-row mt-20">
        <div className="text-3xl text-white ml-20 mr-20 mt-[3rem]">
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
        <img className="h-[43rem] w-[25rem] mr-20" src={PlaceHolderImage} />
      </div>
    </SectionWrapper>
  );
}
