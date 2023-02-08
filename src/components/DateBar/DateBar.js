import "./DateBar.scss";
// import axios from "axios";
// import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function DateBar({ allWeeks, weekId }) {
  const currentWeek = allWeeks[weekId - 1];
  console.log(currentWeek);

  if (!currentWeek) {
    return <div>Click on any week to see your activity log!</div>;
  }

  return (
    <section>
      {currentWeek.map((date) => (
        <NavLink key={date.id} to={`/${weekId}/${date.day}`}>
          {date.weekday}
        </NavLink>
      ))}
    </section>
  );
}
