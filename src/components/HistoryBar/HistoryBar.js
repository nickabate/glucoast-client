import "./HistoryBar.scss";
// import axios from "axios";
// import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

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

  return (
    <>
      {/* <section>
        {allWeeks.map((week) => (
          <NavLink key={week[0].id} to={`/${week[0].week}`}>
            {`Week ${week[0].week}`}
          </NavLink>
        ))}
      </section> */}
      <section>
        <NavLink to="/1">Week 1</NavLink>
        <NavLink to="/2">Week 2</NavLink>
        <NavLink to="/3">Week 3</NavLink>
        <NavLink to="/4">Week 4</NavLink>
        <NavLink to="/5">Week 5</NavLink>
        <NavLink to="/6">Week 6</NavLink>
        <NavLink to="/7">Week 7</NavLink>
        <NavLink to="/8">Week 8</NavLink>
      </section>
    </>
  );
}
