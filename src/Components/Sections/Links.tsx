import { LinkDatas } from "../Datas/LinkDatas.ts";
import { useState } from "react";
import { Reorder } from "motion/react";
import { LinkItem } from "../Utils/LinkItem.tsx";
import MainSectionWrapper from "../SectionsWrappers/MainSectionWrapper.tsx";

const ids = LinkDatas.map((item) => item.id);
export default function Links() {
  const [items, setItems] = useState(ids);

  return (
    <MainSectionWrapper title="Links">
      <Reorder.Group
        axis="y"
        onReorder={setItems}
        values={items}
        className="text-3xl mx-10"
      >
        {items.map((item) => (
          <LinkItem key={item} index={item} datas={LinkDatas} />
        ))}
      </Reorder.Group>
    </MainSectionWrapper>
  );
}
