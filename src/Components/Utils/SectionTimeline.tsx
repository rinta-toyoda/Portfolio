import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";
import Card from "./Card.tsx";
import { ReactNode } from "react";

export default function SectionTimeline({
  items,
}: {
  items: {
    date: string;
    name: string;
    description: string;
    icon: ReactNode;
    skills: string[];
  }[];
}) {
  return (
    <Timeline
      sx={{
        [`& .${timelineOppositeContentClasses.root}`]: {
          flex: 0.2,
        },
      }}
    >
      {items.map(
        (item: {
          date: string;
          name: string;
          description: string;
          icon: ReactNode;
          skills: string[];
        }) => (
          <TimelineItem>
            <TimelineOppositeContent color="#FFFFFF">
              {item.date}
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="grey" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Card
                name={item.name}
                description={item.description}
                icon={item.icon}
                skills={item.skills}
              />
              <div className="mb-6" />
            </TimelineContent>
          </TimelineItem>
        ),
      )}
    </Timeline>
  );
}
