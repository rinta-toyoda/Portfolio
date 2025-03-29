import { ProjectDatas } from "../Datas/ProjectDatas.tsx";
import Cards from "../Utils/Cards.tsx";
import MainSectionWrapper from "../SectionsWrappers/MainSectionWrapper.tsx";

export default function MyProjects() {
  return (
    <MainSectionWrapper title="My Projects">
      <Cards items={ProjectDatas} />
    </MainSectionWrapper>
  );
}
