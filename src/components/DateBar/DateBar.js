import "./DateBar.scss";
import { NavLink } from "react-router-dom";

export default function DateBar({ allWeeks, weekId }) {
  const currentWeek = allWeeks
    .filter((current) => current.week === +weekId)
    .sort((a, b) => a.day - b.day);

  // Default date bar content
  if (!weekId) {
    return (
      <section className="datebar">
        <p className="datebar__text">
          Click on any week to see your dates logged here!
        </p>
      </section>
    );
  }

  // If no data exists for current week

  if (!currentWeek.length) {
    return (
      <section className="datebar">
        <p className="datebar__text">No dates available for this week!</p>
      </section>
    );
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
