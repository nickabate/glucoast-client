import "./EditDate.scss";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export default function EditDate() {
  const [date, setDate] = useState({});
  const params = useParams();
  let dateId = params.dateId;

  const navigate = useNavigate();

  useEffect(() => {
    async function getDate() {
      try {
        const { data } = await axios.get(`${API_URL}/${dateId}`);
        setDate(data);
        // console.log(data);
      } catch (e) {
        console.log("Error:", e);
      }
    }
    getDate();
  }, [dateId]);

  const editFormSubmit = (e) => {
    e.preventDefault();

    async function editDate() {
      await axios.put(`${API_URL}/${dateId}`, {
        id: date.id,
        userid: date.userid,
        week: date.week,
        weekday: date.weekday,
        day: date.day,
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

    // Form data validation
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

    editDate();
    alert(
      `Data submitted! Returning to summary page for ${date.weekday} of Week ${date.week}.`
    );
    navigate(`/${date.week}/${date.id}`);
  };

  const cancelEdit = (e) => {
    e.preventDefault();
    alert(
      `Edit cancelled - changes will not be saved! Returning to Week ${date.week} summary for ${date.weekday}.`
    );
    navigate(`/${date.week}/${date.id}`);
  };

  if (!date) {
    <div>Date content is loading...</div>;
  }

  return (
    <section className="editform">
      <div className="editform__main">
        <div className="editform__container">
          <h2 className="editform__header">
            Edit your data logged for {date.weekday} on Week {date.week}:
          </h2>
          <form onSubmit={editFormSubmit}>
            <div className="editform__grouping">
              <div>
                <label className="editform__label" htmlFor="meal1">
                  Meal 1:
                </label>
                <input
                  className="editform__input"
                  id="meal1"
                  name="meal1"
                  type="text"
                  placeholder="Enter meal..."
                  defaultValue={date.meal1}
                />
              </div>
              <div>
                <label className="editform__label" htmlFor="insulin1">
                  Insulin taken:
                </label>
                <input
                  className="editform__input"
                  id="insulin1"
                  name="insulin1"
                  type="text"
                  placeholder="Enter # of units..."
                  defaultValue={date.insulin1}
                />
              </div>
              <div>
                <label className="editform__label" htmlFor="preglucose1">
                  Pre glucose level:
                </label>
                <input
                  className="editform__input"
                  id="preglucose1"
                  name="preglucose1"
                  type="text"
                  placeholder="Before meal..."
                  defaultValue={date.preglucose1}
                />
              </div>
              <div>
                <label className="editform__label" htmlFor="postglucose1">
                  Post glucose level:
                </label>
                <input
                  className="editform__input"
                  id="postglucose1"
                  name="postglucose1"
                  type="text"
                  placeholder="After meal..."
                  defaultValue={date.postglucose1}
                />
              </div>
            </div>
            <div className="editform__grouping">
              <div>
                <label className="editform__label" htmlFor="meal2">
                  Meal 2:
                </label>
                <input
                  className="editform__input"
                  id="meal2"
                  name="meal2"
                  type="text"
                  placeholder="Enter meal..."
                  defaultValue={date.meal2}
                />
              </div>
              <div>
                <label className="editform__label" htmlFor="insulin2">
                  Insulin taken:
                </label>
                <input
                  className="editform__input"
                  id="insulin2"
                  name="insulin2"
                  type="text"
                  placeholder="Enter # of units..."
                  defaultValue={date.insulin2}
                />
              </div>
              <div>
                <label className="editform__label" htmlFor="preglucose2">
                  Pre glucose level:
                </label>
                <input
                  className="editform__input"
                  id="preglucose2"
                  name="preglucose2"
                  type="text"
                  placeholder="Before meal..."
                  defaultValue={date.preglucose2}
                />
              </div>
              <div>
                <label className="editform__label" htmlFor="postglucose2">
                  Post glucose level:
                </label>
                <input
                  className="editform__input"
                  id="postglucose2"
                  name="postglucose2"
                  type="text"
                  placeholder="After meal..."
                  defaultValue={date.postglucose2}
                />
              </div>
            </div>
            <div className="editform__grouping">
              <div>
                <label className="editform__label" htmlFor="meal3">
                  Meal 3:
                </label>
                <input
                  className="editform__input"
                  id="meal3"
                  name="meal3"
                  type="text"
                  placeholder="Enter meal..."
                  defaultValue={date.meal3}
                />
              </div>
              <div>
                <label className="editform__label" htmlFor="insulin3">
                  Insulin taken:
                </label>
                <input
                  className="editform__input"
                  id="insulin3"
                  name="insulin3"
                  type="text"
                  placeholder="Enter # of units..."
                  defaultValue={date.insulin3}
                />
              </div>
              <div>
                <label className="editform__label" htmlFor="preglucose3">
                  Pre glucose level:
                </label>
                <input
                  className="editform__input"
                  id="preglucose3"
                  name="preglucose3"
                  type="text"
                  placeholder="Before meal..."
                  defaultValue={date.preglucose3}
                />
              </div>
              <div>
                <label className="editform__label" htmlFor="postglucose3">
                  Post glucose level:
                </label>
                <input
                  className="editform__input"
                  id="postglucose3"
                  name="postglucose3"
                  type="text"
                  placeholder="After meal..."
                  defaultValue={date.postglucose3}
                />
              </div>
            </div>
            <div className="editform__grouping2">
              <div>
                <label className="editform__label" htmlFor="sleep">
                  Hours of sleep:
                </label>
                <input
                  className="editform__input"
                  id="sleep"
                  name="sleep"
                  type="text"
                  placeholder="# of hours..."
                  defaultValue={date.sleep}
                />
              </div>
              <div>
                <label className="editform__label" htmlFor="exercise">
                  Exercise today?
                </label>
                <select
                  className="editform__select"
                  id="exercise"
                  name="exercise"
                  defaultValue={date.exercise}
                >
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
            </div>
            <div className="editform__buttons">
              <button className="editform__submit">SUBMIT EDIT</button>
              <button className="editform__cancel" onClick={cancelEdit}>
                CANCEL
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
