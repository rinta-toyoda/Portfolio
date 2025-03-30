import SubSectionWrapper from "../SectionsWrappers/SubSectionWrapper.tsx";
import SectionTimeline from "../Utils/SectionTimeline.tsx";
import { WorkDatas } from "../Datas/WorkDatas.tsx";

export default function WorkExperience() {
  return (
    <SubSectionWrapper title="Work">
      <SectionTimeline items={WorkDatas} />
    </SubSectionWrapper>
  );
}
