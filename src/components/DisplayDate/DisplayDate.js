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
  ResponsiveContainer,
} from "recharts";
import bed from "../../assets/icons/bed.svg";
import health from "../../assets/icons/gym.svg";
import back from "../../assets/icons/back.svg";

export default function DisplayDate({ dateId, weekId, allWeeks }) {
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

      setDisplayedDate(displayedWeek[currentDate]);
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

  // When no week is selected
  if (!weekId) {
    return (
      <section className="activeday">
        <p className="activeday__next">
          Once a week is selected, here you'll see a summary of your activity
          for that day.
        </p>
      </section>
    );
  }

  // Week with no content logged
  if (!displayedWeek.length) {
    return (
      <section className="activeday">
        <p className="activeday__next">{`There is no information to display yet for Week ${weekId}.`}</p>
        <Link className="activeday__add" to={`/newdate/${weekId}`}>
          Click here to add a date for this week.
        </Link>
      </section>
    );
  }

  // Option to add date if all seven weekdays haven't been logged
  const numberOfDays = () => {
    if (displayedWeek.length === 7) {
      return (
        <p className="activeday__none">
          All dates have been added for this week.
        </p>
      );
    } else {
      return (
        <Link className="activeday__add" to={`/newdate/${weekId}`}>
          Or, click here to add another date for this week.
        </Link>
      );
    }
  };

  // When no active weekday is selected in current week
  if (!dateId) {
    return (
      <section className="activeday">
        <p className="activeday__next">{`Select a date above to see your activity for Week ${weekId}!`}</p>
        {numberOfDays()}
      </section>
    );
  }

  if (!displayedDate) {
    return <div>No displayed date state!</div>;
  }

  // Set dynamic data to populate for data visualization
  const chartData = [
    {
      name: "Pre meal 1",
      "mmol/L": displayedDate.preglucose1,
    },
    {
      name: "Post meal 1",
      "mmol/L": displayedDate.postglucose1,
    },
    {
      name: "Pre meal 2",
      "mmol/L": displayedDate.preglucose2,
    },
    {
      name: "Post meal 2",
      "mmol/L": displayedDate.postglucose2,
    },
    {
      name: "Pre meal 3",
      "mmol/L": displayedDate.preglucose3,
    },
    {
      name: "Post meal 3",
      "mmol/L": displayedDate.postglucose3,
    },
  ];

  // Data visualization setup
  const renderLineChart = (
    <ResponsiveContainer>
      <LineChart
        data={chartData}
        margin={{
          top: 20,
          right: 30,
          bottom: 20,
          left: 0,
        }}
      >
        <Line type="monotone" dataKey="mmol/L" stroke="#094067" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="name" />
        <YAxis tickCount={6} domain={[0, 12]} />
        <Tooltip />
        <Legend />
      </LineChart>
    </ResponsiveContainer>
  );

  // User statistics calculated based on current date selected
  const calculateAverage = () => {
    let averageNum =
      (Number(displayedDate.preglucose1) +
        Number(displayedDate.preglucose2) +
        Number(displayedDate.preglucose3) +
        Number(displayedDate.postglucose1) +
        Number(displayedDate.postglucose2) +
        Number(displayedDate.postglucose3)) /
      6;
    return Math.round(averageNum);
  };

  const totalInsulin = () => {
    let total =
      Number(displayedDate.insulin1) +
      Number(displayedDate.insulin2) +
      Number(displayedDate.insulin3);
    return total;
  };

  return (
    <section className="activeday">
      <div className="activeday__display">
        <h2 className="activeday__header">
          Here is your activity logged for {displayedDate.weekday} of Week{" "}
          {displayedDate.week}:
        </h2>
        <div>
          <button className="activeday__editbtn" onClick={editDate}>
            EDIT DATE
          </button>
          <button className="activeday__deletebtn" onClick={deleteDate}>
            DELETE DATE
          </button>
        </div>
      </div>
      <div className="activeday__meals">
        <div className="activeday__meal">
          <p className="activeday__subheader">Meal 1:</p>
          <p>{displayedDate.meal1}</p>
          <p className="activeday__subheader">Insulin taken:</p>
          <p>{displayedDate.insulin1} units of insulin</p>
          <p className="activeday__subheader">Glucose levels:</p>
          <p>Before meal - {displayedDate.preglucose1} mmol/L</p>
          <p>After meal - {displayedDate.postglucose1} mmol/L</p>
        </div>
        <div className="activeday__meal">
          <p className="activeday__subheader">Meal 2:</p>
          <p>{displayedDate.meal2}</p>
          <p className="activeday__subheader">Insulin taken:</p>
          <p>{displayedDate.insulin2} units of insulin</p>
          <p className="activeday__subheader">Glucose levels:</p>
          <p>Before meal - {displayedDate.preglucose2} mmol/L</p>
          <p>After meal - {displayedDate.postglucose2} mmol/L</p>
        </div>
        <div className="activeday__meal">
          <p className="activeday__subheader">Meal 3:</p>
          <p>{displayedDate.meal3}</p>
          <p className="activeday__subheader">Insulin taken:</p>
          <p>{displayedDate.insulin3} units of insulin</p>
          <p className="activeday__subheader">Glucose levels:</p>
          <p>Before meal - {displayedDate.preglucose3} mmol/L</p>
          <p>After meal - {displayedDate.postglucose3} mmol/L</p>
        </div>
      </div>
      {/* <div className="activeday__container"> */}
      <div className="activeday__info">
        <div className="activeday__stats">
          <img className="activeday__icon" src={bed} alt="Bed" />
          <p>You got {displayedDate.sleep} hours of sleep today.</p>
        </div>
        <div className="activeday__stats">
          <img className="activeday__icon" src={health} alt="Health" />
          <p>
            {displayedDate.exercise === "Yes"
              ? "You exercised today - great job!"
              : "No exercise logged today."}
          </p>
        </div>
      </div>
      <h3 className="activeday__levels">
        Here is a visual summary of your glucose levels logged during the day:
      </h3>

      <div className="activeday__visualization">
        <div>
          <p className="activeday__glucose">
            Your average glucose level today was {calculateAverage()} mmol/L.
          </p>
          <p>
            You took a total of {totalInsulin()} units of insulin at meals
            today.
          </p>
        </div>
        {renderLineChart}
      </div>

      <div className="activeday__actions">
        <Link className="activeday__back" to={`/${weekId}`}>
          <img className="activeday__arrow" src={back} alt="Back arrow" /> Click
          here to go back to this week's summary...
        </Link>
      </div>
    </section>
  );
}
