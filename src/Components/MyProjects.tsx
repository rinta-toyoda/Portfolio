import SectionWrapper from "./SectionWrapper.tsx";
import ProjectTest from "../assets/ProjectTest.json";
import Cards from "./Cards.tsx";

export default function MyProjects() {
  const projects = ProjectTest["items"];
  return (
    <SectionWrapper title="My Projects">
      <Cards items={projects} />
    </SectionWrapper>
  );
}
