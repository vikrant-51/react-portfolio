import React from "react";
import data from "../assets/data.json";
const Timeline = () => {
  return (
    <div id="timeline">
      <div className="timelineBox">
        {data.experience.map((i, index) => (
          <TimelineItem
            heading={i.jobTitle}
            text={i.jobDescription}
            index={index}
            key={i.jobTitle}
          />
        ))}
      </div>
    </div>
  );
};

const TimelineItem = ({ heading, text, index }) => (
  <div
    className={`timelineItem ${
      index % 2 === 0 ? "leftTimeline" : "rightTimeline"
    }`}
  >
    <div>
      <h2>{heading}</h2>
      <p style={{ textAlign: "justify" }}>{text}</p>
    </div>
  </div>
);

export default Timeline;
