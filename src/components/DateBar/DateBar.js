import "./DateBar.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function DateBar({ allWeeks, weekId }) {
  const currentWeek = allWeeks[weekId - 1];
  //   console.log(currentWeek);

  return (
    <section>
      {currentWeek.map((date) => (
        <Link key={date.id} to={`/${weekId}/${date.day}`}>
          <p>{date.weekday}</p>
        </Link>
      ))}
    </section>
  );
}
