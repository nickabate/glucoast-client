import "./HistoryBar.scss";
import axios from "axios";
import { useEffect, useState } from "react";
export default function HistoryBar() {
  const [allWeeks, setAllWeeks] = useState([]);

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
  }, []);

  return <></>;
}
