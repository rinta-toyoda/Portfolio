import Card from "./Card.tsx";

export default function Cards({ items }) {
  return (
    <div className="flex flex-wrap lg:flex-row md:flex-col justify-around gap-y-10">
      {items.map((item) => (
        <Card name={item.name} description={item.description} />
      ))}
    </div>
  );
}
