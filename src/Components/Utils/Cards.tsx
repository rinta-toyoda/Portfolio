import Card from "./Card.tsx";
import { ReactNode } from "react";

export default function Cards({
  items,
}: {
  items: {
    name: string;
    icon: ReactNode;
    description: string;
    skills: string[];
  }[];
}) {
  return (
    <div className="flex flex-wrap lg:flex-row md:flex-col justify-around gap-y-10">
      {items.map(
        (item: {
          name: string;
          icon: ReactNode;
          description: string;
          skills: string[];
        }) => (
          <Card
            name={item.name}
            icon={item.icon}
            description={item.description}
            skills={item.skills}
          />
        ),
      )}
    </div>
  );
}
