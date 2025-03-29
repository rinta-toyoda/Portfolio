import SubSectionWrapper from "../SectionsWrappers/SubSectionWrapper.tsx";
import { ProjectData } from "../ProjectData.tsx";
import Cards from "../Utils/Cards.tsx";

export default function MyProjects() {
  return (
    <SubSectionWrapper title="My Projects">
      <Cards items={ProjectData} />
    </SubSectionWrapper>
  );
}
