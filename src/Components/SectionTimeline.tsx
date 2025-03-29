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

export default function SectionTimeline({ items }) {
  console.log(items);
  return (
    <Timeline
      sx={{
        [`& .${timelineOppositeContentClasses.root}`]: {
          flex: 0.2,
        },
      }}
    >
      {items.map((item) => (
        <TimelineItem>
          <TimelineOppositeContent color="#FFFFFF">
            {item.date}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h5" component="span" color="#FFFFFF">
              {item.name}
            </Typography>
            {item.descriptions.map((description) => (
              <Typography color="#FFFFFF">{description}</Typography>
            ))}
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}
