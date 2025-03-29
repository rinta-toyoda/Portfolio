import { ProjectData } from "../Datas/ProjectData.tsx";
import Cards from "../Utils/Cards.tsx";
import MainSectionWrapper from "../SectionsWrappers/MainSectionWrapper.tsx";

export default function MyProjects() {
  return (
    <MainSectionWrapper title="My Projects">
      <Cards items={ProjectData} />
    </MainSectionWrapper>
  );
}
