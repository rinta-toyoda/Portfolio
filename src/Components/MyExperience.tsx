import SectionWrapper from "./SectionWrapper.tsx";
import Items from "../assets/ItemsTest.json";
import SectionTimeline from "./SectionTimeline.tsx";

export default function MyExperience() {
  return (
    <SectionWrapper title="My Experience">
      <SectionTimeline items={Items["items"]} />
    </SectionWrapper>
  );
}
