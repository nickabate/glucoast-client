import "./UserContent.scss";
import HistoryBar from "../HistoryBar/HistoryBar";
import { useParams } from "react-router-dom";
import DateBar from "../DateBar/DateBar";
import axios from "axios";
import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import DisplayDate from "../DisplayDate/DisplayDate";

export default function UserContent() {
  const [allWeeks, setAllWeeks] = useState([]);

  const params = useParams();
  let weekId = params.weekId;
  // console.log(weekId);

  // if (!weekId) {
  //   weekId = allWeeks[0];
  // }

  let dateId = params.dateId;
  // if (!dateId) {
  //   dateId = allWeeks[0][0];
  // }

  useEffect(() => {
    async function getWeeks() {
      try {
        const { data } = await axios.get("http://localhost:8080/api");
        setAllWeeks(data);
        // console.log(data);
      } catch (e) {
        console.log("Error:", e);
      }
    }
    getWeeks();
  }, [weekId]);

  return (
    <>
      <HistoryBar allWeeks={allWeeks} />
      <DateBar weekId={weekId} allWeeks={allWeeks} />
      <DisplayDate dateId={dateId} weekId={weekId} allWeeks={allWeeks} />
    </>
  );
}
