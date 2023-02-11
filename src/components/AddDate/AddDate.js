import "./AddDate.scss";
// import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export default function AddDate() {
  const params = useParams();
  let weekId = params.weekId;

  const navigate = useNavigate();

  const newFormSubmit = (e) => {
    e.preventDefault();

    const dateNum = (value) => {
      switch (value) {
        case "Sunday":
          return 1;
        case "Monday":
          return 2;
        case "Tuesday":
          return 3;
        case "Wednesday":
          return 4;
        case "Thursday":
          return 5;
        case "Friday":
          return 6;
        case "Saturday":
          return 7;
        default:
          console.log("Invalid date entered.");
      }
    };

    async function newDate() {
      await axios.post(`http://localhost:8080/api/`, {
        userid: "user1",
        week: +weekId,
        weekday: e.target.weekday.value,
        day: dateNum(e.target.weekday.value),
        meal1: e.target.meal1.value,
        meal2: e.target.meal2.value,
        meal3: e.target.meal3.value,
        insulin1: e.target.insulin1.value,
        insulin2: e.target.insulin2.value,
        insulin3: e.target.insulin3.value,
        preglucose1: e.target.preglucose1.value,
        postglucose1: e.target.postglucose1.value,
        preglucose2: e.target.preglucose2.value,
        postglucose2: e.target.postglucose2.value,
        preglucose3: e.target.preglucose3.value,
        postglucose3: e.target.postglucose3.value,
        sleep: e.target.sleep.value,
        exercise: e.target.exercise.value,
      });
    }

    if (
      !e.target.meal1.value ||
      !e.target.meal2.value ||
      !e.target.meal3.value ||
      !e.target.insulin1.value ||
      !e.target.insulin2.value ||
      !e.target.insulin3.value ||
      !e.target.preglucose1.value ||
      !e.target.postglucose1.value ||
      !e.target.preglucose2.value ||
      !e.target.postglucose2.value ||
      !e.target.preglucose3.value ||
      !e.target.postglucose3.value ||
      !e.target.sleep.value ||
      !e.target.exercise.value
    ) {
      alert("Please fill out all form fields before submission.");
      return;
    }

    newDate();
    alert(`Data submitted! Returning to Week ${weekId} summary.`);
    navigate(`/${weekId}`);
  };

  const cancelNew = (e) => {
    e.preventDefault();
    alert(
      `Input cancelled - changes will not be saved! Returning to Week ${weekId} summary...`
    );
    navigate(`/${weekId}`);
  };

  return (
    <section>
      <p>{`Add a date for Week ${weekId}!`}</p>
      <form onSubmit={newFormSubmit}>
        <select name="weekday">
          <option value="Sunday">Sunday</option>
          <option value="Monday">Monday</option>
          <option value="Tuesday">Tuesday</option>
          <option value="Wednesday">Wednesday</option>
          <option value="Thursday">Thursday</option>
          <option value="Friday">Friday</option>
          <option value="Saturday">Saturday</option>
        </select>
        <input name="meal1" type="text" placeholder="Meal 1" />
        <input name="insulin1" type="text" placeholder="Insulin 1" />
        <input name="preglucose1" type="text" placeholder="Pre glucose level" />
        <input
          name="postglucose1"
          type="text"
          placeholder="Post glucose level"
        />

        <input name="meal2" type="text" placeholder="Meal 2" />
        <input name="insulin2" type="text" placeholder="Insulin 2" />
        <input name="preglucose2" type="text" placeholder="Pre glucose level" />
        <input
          name="postglucose2"
          type="text"
          placeholder="Post glucose level"
        />

        <input name="meal3" type="text" placeholder="Meal 3" />
        <input name="insulin3" type="text" placeholder="Insulin 3" />
        <input name="preglucose3" type="text" placeholder="Pre glucose level" />
        <input
          name="postglucose3"
          type="text"
          placeholder="Post glucose level"
        />
        <input name="sleep" type="text" placeholder="Sleep" />
        <select name="exercise">
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
        <button onClick={cancelNew}>CANCEL ADD</button>
        <button>SUBMIT DATA</button>
      </form>
    </section>
  );
}
