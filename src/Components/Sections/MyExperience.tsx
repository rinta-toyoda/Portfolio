import SubSectionWrapper from "../SectionsWrappers/SubSectionWrapper.tsx";
import SectionTimeline from "../Utils/SectionTimeline.tsx";
import { ExperienceDatas } from "../Datas/ExperienceDatas.tsx";

export default function MyExperience() {
  return (
    <SubSectionWrapper title="My Experience">
      <SectionTimeline items={ExperienceDatas} />
    </SubSectionWrapper>
  );
}
