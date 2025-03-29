import Bubble from "./Bubble.tsx";

export default function Bubbles({ items }: { items: string[] }) {
  return (
    <div className="flex flex-row flex-wrap justify-start gap-4 mt-2">
      {items.map((item) => (
        <Bubble item={item} />
      ))}
    </div>
  );
}
