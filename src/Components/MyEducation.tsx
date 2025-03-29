import SectionWrapper from "./SectionWrapper.tsx";
import SectionTimeline from "./SectionTimeline.tsx";
import Items from "../assets/ItemsTest.json";

export default function MyEducation() {
  return (
    <SectionWrapper title="My Education">
      <SectionTimeline items={Items["items"]} />
    </SectionWrapper>
  );
}
