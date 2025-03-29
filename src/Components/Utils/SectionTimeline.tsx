import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";
import Typography from "@mui/material/Typography";

export default function SectionTimeline({ items }: { items: object[] }) {
  return (
    <Timeline
      sx={{
        [`& .${timelineOppositeContentClasses.root}`]: {
          flex: 0.2,
        },
      }}
    >
      {items.map(
        (item: { date: string; name: string; descriptions: string[] }) => (
          <TimelineItem>
            <TimelineOppositeContent color="#FFFFFF">
              {item.date}
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="grey" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="h4" component="span" color="#FFF8DB">
                {item.name}
              </Typography>
              {item.descriptions.map((description) => (
                <Typography color="#FFFFFF" fontSize="1.3rem">
                  {description}
                </Typography>
              ))}
            </TimelineContent>
          </TimelineItem>
        ),
      )}
    </Timeline>
  );
}
