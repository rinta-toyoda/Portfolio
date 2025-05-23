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
    link?: string;
  }[];
}) {
  return (
    <div className="flex flex-wrap sm:flex-row flex-col sm:justify-around justify-center gap-y-10">
      {items.map(
        (item: {
          name: string;
          icon: ReactNode;
          description: string;
          skills: string[];
          link?: string;
        }) => (
          <Card
            name={item.name}
            icon={item.icon}
            description={item.description}
            skills={item.skills}
            skills_title="Used Skills"
            link={item.link}
          />
        ),
      )}
    </div>
  );
}
