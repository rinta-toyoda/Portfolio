import SubSectionWrapper from "../SectionsWrappers/SubSectionWrapper.tsx";
import SectionTimeline from "../Utils/SectionTimeline.tsx";
import { EducationDatas } from "../Datas/EducationDatas.tsx";

export default function MyEducation() {
  return (
    <SubSectionWrapper title="Education">
      <SectionTimeline items={EducationDatas} />
    </SubSectionWrapper>
  );
}
