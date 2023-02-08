import "./DisplayDate.scss";
import { useEffect, useState } from "react";

export default function DisplayDate({ dateId, weekId, allWeeks }) {
  const displayedWeek = allWeeks[weekId - 1];
  const [displayedDate, setDisplayedDate] = useState({});

  useEffect(() => {
    if (!dateId) {
      return;
    } else {
      setDisplayedDate(displayedWeek[dateId - 1]);
    }
  }, [dateId, displayedWeek]);

  console.log(displayedWeek);
  console.log(dateId);
  console.log(displayedDate);

  if (!weekId) {
    return <div>Pick a week first to view your activity!</div>;
  }

  if (!dateId) {
    return <div>Select a date above to see your activity!</div>;
  }

  if (!displayedDate) {
    return <div>No displayed date state!</div>;
  }

  if (!displayedWeek) {
    return <div>No week selected!</div>;
  }

  return (
    <>
      {/* <p>{dateId}</p> */}
      {/* <p>{displayedDate.id}</p> */}
      <p>{displayedDate.weekday}</p>
      <p>{displayedDate.meal1}</p>
      <p>{displayedDate.insulin1}</p>
      <p>{displayedDate.meal2}</p>
      <p>{displayedDate.insulin2}</p>
      <p>{displayedDate.meal3}</p>
      <p>{displayedDate.insulin3}</p>
      <p>{displayedDate.sleep} hours of sleep</p>
      <p>{displayedDate.exercise ? "yes" : "no"}</p>
    </>
  );
}
