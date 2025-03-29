import SubSectionWrapper from "../SectionsWrappers/SubSectionWrapper.tsx";
import SectionTimeline from "../Utils/SectionTimeline.tsx";
import Items from "../../assets/ItemsTest.json";

export default function MyEducation() {
  return (
    <SubSectionWrapper title="My Education">
      <SectionTimeline items={Items["items"]} />
    </SubSectionWrapper>
  );
}
