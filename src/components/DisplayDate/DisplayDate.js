import "./DisplayDate.scss";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";
import bed from "../../assets/icons/bed.svg";
import health from "../../assets/icons/gym.svg";

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

  const editDate = () => {
    navigate(`/editdate/${displayedDate.id}`);
  };

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

  const chartData = [
    {
      name: "Reading 1",
      Level: displayedDate.preglucose1,
    },
    {
      name: "Reading 2",
      Level: displayedDate.postglucose1,
    },
    {
      name: "Reading 3",
      Level: displayedDate.preglucose2,
    },
    {
      name: "Reading 4",
      Level: displayedDate.postglucose2,
    },
    {
      name: "Reading 5",
      Level: displayedDate.preglucose3,
    },
    {
      name: "Reading 6",
      Level: displayedDate.postglucose3,
    },
  ];

  const renderLineChart = (
    <LineChart
      width={600}
      height={300}
      data={chartData}
      margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 0,
      }}
    >
      <Line type="monotone" dataKey="Level" stroke="#094067" />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey="name" />
      <YAxis tickCount={6} domain={[0, 12]} />
      <Tooltip />
      <Legend />
    </LineChart>
  );

  return (
    <section className="activeday">
      <h2 className="activeday__header">
        Here is your activity logged for {displayedDate.weekday} of Week{" "}
        {displayedDate.week}.
      </h2>
      <div className="activeday__meals">
        <div className="activeday__meal">
          <p className="activeday__subheader">Meal 1:</p>
          <p>{displayedDate.meal1}</p>
          <p className="activeday__subheader">Insulin:</p>
          <p>{displayedDate.insulin1} units of insulin</p>
          <p className="activeday__subheader">Glucose levels:</p>
          <p>Before meal - {displayedDate.preglucose1}</p>
          <p>After meal - {displayedDate.postglucose1}</p>
        </div>
        <div className="activeday__meal">
          <p className="activeday__subheader">Meal 2:</p>
          <p>{displayedDate.meal2}</p>
          <p className="activeday__subheader">Insulin:</p>
          <p>{displayedDate.insulin2} units of insulin</p>
          <p className="activeday__subheader">Glucose levels:</p>
          <p>Before meal - {displayedDate.preglucose2}</p>
          <p>After meal - {displayedDate.postglucose2}</p>
        </div>
        <div className="activeday__meal">
          <p className="activeday__subheader">Meal 3:</p>
          <p>{displayedDate.meal3}</p>
          <p className="activeday__subheader">Insulin:</p>
          <p>{displayedDate.insulin3} units of insulin</p>
          <p className="activeday__subheader">Glucose levels:</p>
          <p>Before meal - {displayedDate.preglucose3}</p>
          <p>After meal - {displayedDate.postglucose3}</p>
        </div>
      </div>
      <div className="activeday__info">
        <div className="activeday__stats">
          <img className="activeday__icon" src={bed} alt="Bed" />
          <p>You got {displayedDate.sleep} hours of sleep today.</p>
        </div>
        <div className="activeday__stats">
          <img className="activeday__icon" src={health} alt="Health" />
          <p>
            {displayedDate.exercise
              ? "You exercised today - great job!"
              : "No exercise logged today."}
          </p>
        </div>
      </div>
      {/* <Link to={`/editdate/${displayedDate.id}`}>EDIT DATE</Link> */}
      <div>
        <h3>Here is a summary of your glucose levels logged during the day.</h3>
        <div className="activeday__visualization">{renderLineChart}</div>
      </div>
      <div>
        <button onClick={editDate}>EDIT DATE</button>
        <button onClick={deleteDate}>DELETE DATE</button>
      </div>
      <Link to={`/${weekId}`}>
        Click here to go back this week's summary...
      </Link>
    </section>
  );
}
