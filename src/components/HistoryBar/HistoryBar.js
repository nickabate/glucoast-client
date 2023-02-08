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
    <section>
      {allWeeks.map((week) => (
        <NavLink key={week[0].id} to={`/${week[0].week}`}>
          {`Week ${week[0].week}`}
        </NavLink>
      ))}
    </section>
  );
}
