import SubSectionWrapper from "../SectionsWrappers/SubSectionWrapper.tsx";
import SectionTimeline from "../Utils/SectionTimeline.tsx";
import { ExperienceDatas } from "../Datas/ExperienceDatas.tsx";

export default function WorkExperience() {
  return (
    <SubSectionWrapper title="Work">
      <SectionTimeline items={ExperienceDatas} />
    </SubSectionWrapper>
  );
}
