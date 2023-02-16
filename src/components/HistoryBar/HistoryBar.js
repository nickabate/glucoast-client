import "./HistoryBar.scss";
import { NavLink } from "react-router-dom";

export default function HistoryBar({ allWeeks }) {
  if (!allWeeks) {
    return <div>Loading content...</div>;
  }

  return (
    <section className="history">
      <h2 className="history__header">HISTORY</h2>
      <div className="history__weeks">
        <NavLink className="history__link" to="/1">
          Week 1
        </NavLink>
        <NavLink className="history__link" to="/2">
          Week 2
        </NavLink>
        <NavLink className="history__link" to="/3">
          Week 3
        </NavLink>
        <NavLink className="history__link" to="/4">
          Week 4
        </NavLink>
        <NavLink className="history__link" to="/5">
          Week 5
        </NavLink>
        <NavLink className="history__link" to="/6">
          Week 6
        </NavLink>
        <NavLink className="history__link" to="/7">
          Week 7
        </NavLink>
        <NavLink className="history__link" to="/8">
          Week 8
        </NavLink>
      </div>
    </section>
  );
}
