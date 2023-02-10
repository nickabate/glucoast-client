import "./DisplayDate.scss";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function DisplayDate({ dateId, weekId, allWeeks }) {
  // const displayedWeek = allWeeks[weekId - 1];
  const displayedWeek = allWeeks
    .filter((current) => current.week === +weekId)
    .sort((a, b) => a.day - b.day);
  const [displayedDate, setDisplayedDate] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    if (!dateId) {
      return;
    } else {
      const currentDate = displayedWeek.findIndex((item) => {
        return item.id === dateId;
      });
      // console.log(currentDate);

      setDisplayedDate(displayedWeek[currentDate]);
      // setDisplayedDate(displayedWeek[dateId - 1]);
    }
  }, [dateId, displayedWeek]);

  const deleteDate = () => {
    async function deleteItem() {
      await axios.delete(`http://localhost:8080/api/${dateId}`);
    }

    alert("Date has been deleted!");
    deleteItem();
    navigate(`/`);
  };
  // console.log(displayedWeek);
  // console.log(dateId);
  // console.log(displayedDate);

  if (!weekId) {
    return <div>Pick a week to view your activity!</div>;
  }

  if (!displayedWeek.length) {
    return (
      <section>
        <div>{`No data has been input for Week ${weekId}!`}</div>
        <Link to={`/newdate/${weekId}`}>
          Click here to add a date for this week.
        </Link>
      </section>
    );
  }

  if (!dateId) {
    return (
      <section>
        <div>{`Select a date above to see your activity for Week ${weekId}!`}</div>
        <Link to={`/newdate/${weekId}`}>
          Click here to add another date for this week.
        </Link>
        <p>Additional information for the week summary to go here...</p>
        <p>DATA VISUALIZATION TO GO HERE?</p>
      </section>
    );
  }

  if (!displayedDate) {
    return <div>No displayed date state!</div>;
  }

  return (
    <section className="activeday">
      <h3>
        Here is your activity logged for {displayedDate.weekday} of Week{" "}
        {displayedDate.week}
      </h3>
      <p>{displayedDate.meal1}</p>
      <p>{displayedDate.insulin1} units of insulin</p>
      <p>Glucose level before: {displayedDate.preglucose1}</p>
      <p>Glucose level after: {displayedDate.postglucose1}</p>
      <p>{displayedDate.meal2}</p>
      <p>{displayedDate.insulin2} units of insulin</p>
      <p>Glucose level before: {displayedDate.preglucose2}</p>
      <p>Glucose level after: {displayedDate.postglucose2}</p>
      <p>{displayedDate.meal3}</p>
      <p>{displayedDate.insulin3} units of insulin</p>
      <p>Glucose level before: {displayedDate.preglucose3}</p>
      <p>Glucose level after: {displayedDate.postglucose3}</p>
      <p>{displayedDate.sleep} hours of sleep</p>
      <p>{displayedDate.exercise ? "yes" : "no"}</p>
      <Link to={`/editdate/${displayedDate.id}`}>EDIT DATE</Link>
      <p onClick={deleteDate}>DELETE DATE</p>
      <Link to={`/${weekId}`}>
        Click here to go back this week's summary...
      </Link>
    </section>
  );
}
