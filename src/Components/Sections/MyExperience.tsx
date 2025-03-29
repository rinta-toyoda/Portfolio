import SubSectionWrapper from "../SectionsWrappers/SubSectionWrapper.tsx";
import Items from "../../assets/ItemsTest.json";
import SectionTimeline from "../Utils/SectionTimeline.tsx";

export default function MyExperience() {
  return (
    <SubSectionWrapper title="My Experience">
      <SectionTimeline items={Items["items"]} />
    </SubSectionWrapper>
  );
}
