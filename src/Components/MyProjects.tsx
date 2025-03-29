import SectionWrapper from "./SectionWrapper.tsx";
import { ProjectData } from "./ProjectData.tsx";
import Cards from "./Cards.tsx";

export default function MyProjects() {
  return (
    <SectionWrapper title="My Projects">
      <Cards items={ProjectData} />
    </SectionWrapper>
  );
}
