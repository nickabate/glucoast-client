import "./HistoryBar.scss";
// import axios from "axios";
// import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
// import { useParams } from "react-router-dom";

export default function HistoryBar({ allWeeks }) {
  // const [allWeeks, setAllWeeks] = useState([]);

  // useEffect(() => {
  //   async function getWeeks() {
  //     try {
  //       const { data } = await axios.get("http://localhost:8080/api");
  //       setAllWeeks(data);
  //       // console.log(data);
  //     } catch (e) {
  //       console.log("Error:", e);
  //     }
  //   }
  //   getWeeks();
  // }, []);

  if (!allWeeks) {
    return <div>Loading content...</div>;
  }

  // if (!weekId) {
  //   return <div>Week has not been selected...</div>;
  // }

  return (
    <>
      {/* <section>
        {allWeeks.map((week) => (
          <NavLink key={week[0].id} to={`/${week[0].week}`}>
            {`Week ${week[0].week}`}
          </NavLink>
        ))}
      </section> */}
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
    </>
  );
}
