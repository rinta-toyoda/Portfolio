import { useMotionValue, Reorder } from "motion/react";
import { useRaisedShadow } from "./use-raised-shadow";

interface Props {
  index: number;
  datas: {
    id: number;
    name: string;
    description: string;
    url: string;
  }[];
}

export const LinkItem = ({ index, datas }: Props) => {
  console.log(datas);
  const y = useMotionValue(0);
  const boxShadow = useRaisedShadow(y);
  const data = datas[index];

  return (
    <Reorder.Item
      value={index}
      id={index}
      style={{ boxShadow, y }}
      className="xl:h-[4rem] xl:w-[50rem] lg:h-[5rem] lg:w-[40rem] md:h-[6rem] md:w-[35rem] sm:h-[7rem] sm:w-[30rem] h-[8rem] w-[23rem] bg-[#FFF8DB] rounded-xl pt-3 pl-2 font-bold text-[1.25rem] text-[#304463] mb-5"
    >
      <a href={data.url}>{`${data.name}: ${data.description}`}</a>
    </Reorder.Item>
  );
};
