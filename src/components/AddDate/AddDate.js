import "./AddDate.scss";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export default function AddDate() {
  const [existingDays, setExistingDays] = useState([]);
  const params = useParams();
  let weekId = params.weekId;

  const navigate = useNavigate();

  useEffect(() => {
    async function getDays() {
      try {
        const { data } = await axios.get("http://localhost:8080/api");

        let dateArray = [];
        const allDates = data.filter((day) => day.week === +weekId);
        allDates.forEach((element) => dateArray.push(element.day));

        setExistingDays(dateArray);
      } catch (e) {
        console.log("Error:", e);
      }
    }
    getDays();
  }, [weekId]);

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

    if (existingDays.indexOf(dateNum(e.target.weekday.value)) !== -1) {
      alert(
        `This date has already been logged for Week ${weekId}! Please select a new date.`
      );
      return;
    }

    newDate();
    alert(`Data submitted! Returning to Week ${weekId} summary.`);
    navigate(`/${weekId}`);
  };

  const cancelNew = (e) => {
    e.preventDefault();
    alert(
      `Input cancelled - changes will not be saved! Returning to Week ${weekId} summary.`
    );
    navigate(`/${weekId}`);
  };

  return (
    <section className="addform">
      <div className="addform__main">
        <div className="addform__container">
          <h2 className="addform__header">{`Add a date for Week ${weekId}:`}</h2>
          <form onSubmit={newFormSubmit}>
            <div className="addform__grouping2">
              <label className="addform__label" htmlFor="weekday">
                Weekday:
              </label>
              <select className="addform__select" id="weekday" name="weekday">
                <option value="Sunday">Sunday</option>
                <option value="Monday">Monday</option>
                <option value="Tuesday">Tuesday</option>
                <option value="Wednesday">Wednesday</option>
                <option value="Thursday">Thursday</option>
                <option value="Friday">Friday</option>
                <option value="Saturday">Saturday</option>
              </select>
            </div>
            <div className="addform__grouping">
              <label className="addform__label" htmlFor="meal1">
                Meal 1:
              </label>
              <input
                id="meal1"
                className="addform__input"
                name="meal1"
                type="text"
                placeholder="Enter meal..."
              />
              <label className="addform__label" htmlFor="insulin1">
                Insulin taken:
              </label>
              <input
                id="insulin1"
                className="addform__input"
                name="insulin1"
                type="text"
                placeholder="Enter # of units..."
              />
              <label className="addform__label" htmlFor="preglucose1">
                Pre glucose level:
              </label>
              <input
                id="preglucose1"
                className="addform__input"
                name="preglucose1"
                type="text"
                placeholder="Before meal..."
              />
              <label className="addform__label" htmlFor="postglucose1">
                Post glucose level:
              </label>
              <input
                id="postglucose1"
                className="addform__input"
                name="postglucose1"
                type="text"
                placeholder="After meal..."
              />
            </div>
            <div className="addform__grouping">
              <label className="addform__label" htmlFor="meal2">
                Meal 2:
              </label>
              <input
                id="meal2"
                className="addform__input"
                name="meal2"
                type="text"
                placeholder="Enter meal..."
              />
              <label className="addform__label" htmlFor="insulin2">
                Insulin taken:
              </label>
              <input
                id="insulin2"
                className="addform__input"
                name="insulin2"
                type="text"
                placeholder="Enter # of units..."
              />
              <label className="addform__label" htmlFor="preglucose2">
                Pre glucose level:
              </label>
              <input
                id="preglucose2"
                className="addform__input"
                name="preglucose2"
                type="text"
                placeholder="Before meal..."
              />
              <label className="addform__label" htmlFor="postglucose2">
                Post glucose level:
              </label>
              <input
                id="postglucose2"
                className="addform__input"
                name="postglucose2"
                type="text"
                placeholder="After meal..."
              />
            </div>
            <div className="addform__grouping">
              <label className="addform__label" htmlFor="meal3">
                Meal 3:
              </label>
              <input
                id="meal3"
                className="addform__input"
                name="meal3"
                type="text"
                placeholder="Enter meal..."
              />
              <label className="addform__label" htmlFor="insulin3">
                Insulin taken:
              </label>
              <input
                id="insulin3"
                className="addform__input"
                name="insulin3"
                type="text"
                placeholder="Enter # of units..."
              />
              <label className="addform__label" htmlFor="preglucose3">
                Pre glucose level:
              </label>
              <input
                id="preglucose3"
                className="addform__input"
                name="preglucose3"
                type="text"
                placeholder="Before meal..."
              />
              <label className="addform__label" htmlFor="postglucose3">
                Post glucose level:
              </label>
              <input
                id="postglucose3"
                className="addform__input"
                name="postglucose3"
                type="text"
                placeholder="After meal..."
              />
            </div>
            <div className="addform__grouping2">
              <label className="addform__label" htmlFor="sleep">
                Hours of sleep:
              </label>
              <input
                id="sleep"
                className="addform__input"
                name="sleep"
                type="text"
                placeholder="# of hours..."
              />
              <label className="addform__label" htmlFor="exercise">
                Exercise today?
              </label>
              <select id="exercise" className="addform__select" name="exercise">
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
            <div className="addform__buttons">
              <button className="addform__submit">SUBMIT DATA</button>
              <button className="addform__cancel" onClick={cancelNew}>
                CANCEL ADD
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
