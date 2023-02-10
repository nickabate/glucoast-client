import "./DateBar.scss";
// import axios from "axios";
// import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function DateBar({ allWeeks, weekId }) {
  // const params = useParams();
  // const weekId = params.weekId;

  // const currentWeek = allWeeks[weekId - 1];
  // console.log(currentWeek);
  const currentWeek = allWeeks
    .filter((current) => current.week === +weekId)
    .sort((a, b) => a.day - b.day);
  // console.log(currentWeek);

  if (!weekId) {
    return <div>Click on any week to see your activity log!</div>;
  }

  if (!currentWeek.length) {
    return <div>No dates available for this week!</div>;
  }

  return (
    <section className="datebar">
      {currentWeek.map((date) => (
        <NavLink
          className="datebar__date"
          key={date.id}
          to={`/${weekId}/${date.id}`}
        >
          {date.weekday}
        </NavLink>
      ))}
    </section>
  );
}
