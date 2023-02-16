import "./UserContent.scss";
import HistoryBar from "../HistoryBar/HistoryBar";
import { useParams } from "react-router-dom";
import DateBar from "../DateBar/DateBar";
import axios from "axios";
import { useEffect, useState } from "react";
import DisplayDate from "../DisplayDate/DisplayDate";

export default function UserContent() {
  const [allWeeks, setAllWeeks] = useState([]);

  const params = useParams();
  let weekId = params.weekId;

  let dateId = params.dateId;

  useEffect(() => {
    async function getWeeks() {
      try {
        const { data } = await axios.get("http://localhost:8080/api");
        setAllWeeks(data);
      } catch (e) {
        console.log("Error:", e);
      }
    }
    getWeeks();
  }, [weekId]);

  return (
    <main className="main">
      <section className="main__container1">
        <HistoryBar allWeeks={allWeeks} />
        <div className="main__container2">
          <DateBar weekId={weekId} allWeeks={allWeeks} />
          <DisplayDate dateId={dateId} weekId={weekId} allWeeks={allWeeks} />
        </div>
      </section>
    </main>
  );
}
