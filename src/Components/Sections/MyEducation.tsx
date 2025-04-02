import SubSectionWrapper from "../SectionsWrappers/SubSectionWrapper.tsx";
import SectionTimeline from "../Utils/SectionTimeline.tsx";
import { EducationDatas } from "../Datas/EducationDatas.tsx";
import MainSectionWrapper from "../SectionsWrappers/MainSectionWrapper.tsx";

export default function MyEducation({ isMobile }: { isMobile: boolean }) {
  const SectionWrapper = isMobile ? MainSectionWrapper : SubSectionWrapper;
  return (
    <SectionWrapper title="Education">
      <SectionTimeline
        items={EducationDatas}
        skills_title="Accomplished"
        isMobile={isMobile}
      />
    </SectionWrapper>
  );
}
