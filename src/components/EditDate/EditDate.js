import "./EditDate.scss";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export default function EditDate() {
  const [date, setDate] = useState({});
  const params = useParams();
  let dateId = params.dateId;

  const navigate = useNavigate();

  useEffect(() => {
    async function getDate() {
      try {
        const { data } = await axios.get(`http://localhost:8080/api/${dateId}`);
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
      await axios.put(`http://localhost:8080/api/${dateId}`, {
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
        sleep: e.target.sleep.value,
        exercise: e.target.exercise.value,
      });
    }

    if (
      !e.target.meal1.value ||
      !e.target.insulin1.value ||
      !e.target.meal2.value ||
      !e.target.insulin2.value ||
      !e.target.meal3.value ||
      !e.target.insulin3.value ||
      !e.target.sleep.value ||
      !e.target.exercise.value
    ) {
      alert("Please fill out all form fields before submission.");
      return;
    }

    editDate();
    alert("Data submitted! Returning to home page.");
    navigate("/");
  };

  const cancelEdit = (e) => {
    e.preventDefault();
    alert(
      "Edit cancelled - changes will not be saved! Returning to homepage..."
    );
    navigate("/");
  };

  if (!date) {
    <div>Date content is loading...</div>;
  }

  return (
    <section>
      <p>Test edit</p>
      <p>
        WEEK {date.week} and {date.weekday}
      </p>
      <form onSubmit={editFormSubmit}>
        <input
          name="meal1"
          type="text"
          placeholder="Meal 1"
          defaultValue={date.meal1}
        />
        <input
          name="insulin1"
          type="text"
          placeholder="Insulin 1"
          defaultValue={date.insulin1}
        />
        <input
          name="meal2"
          type="text"
          placeholder="Meal 2"
          defaultValue={date.meal2}
        />
        <input
          name="insulin2"
          type="text"
          placeholder="Insulin 2"
          defaultValue={date.insulin2}
        />
        <input
          name="meal3"
          type="text"
          placeholder="Meal 3"
          defaultValue={date.meal3}
        />
        <input
          name="insulin3"
          type="text"
          placeholder="Insulin 3"
          defaultValue={date.insulin3}
        />
        <input
          name="sleep"
          type="text"
          placeholder="Sleep"
          defaultValue={date.sleep}
        />
        <input
          name="exercise"
          type="text"
          placeholder="Exercise"
          defaultValue={date.exercise}
        />
        <button onClick={cancelEdit}>CANCEL EDIT</button>
        <button>SUBMIT DATA</button>
      </form>
    </section>
  );
}
