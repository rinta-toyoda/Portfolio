import SubSectionWrapper from "../SectionsWrappers/SubSectionWrapper.tsx";
import SectionTimeline from "../Utils/SectionTimeline.tsx";
import { WorkDatas } from "../Datas/WorkDatas.tsx";
import MainSectionWrapper from "../SectionsWrappers/MainSectionWrapper.tsx";

export default function WorkExperience({ isMobile }: { isMobile: boolean }) {
  const SectionWrapper = isMobile ? MainSectionWrapper : SubSectionWrapper;
  return (
    <SectionWrapper title="Work">
      <SectionTimeline
        items={WorkDatas}
        skills_title="Used Skills"
        isMobile={isMobile}
      />
    </SectionWrapper>
  );
}
