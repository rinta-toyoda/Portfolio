import SectionWrapper from "./SectionWrapper.tsx";
import ProjectTest from "../assets/ProjectTest.json";
import Cards from "./Cards.tsx";

export default function Others() {
  const projects = ProjectTest["items"];
  return (
    <SectionWrapper title="Others">
      <Cards items={projects} />
    </SectionWrapper>
  );
}
