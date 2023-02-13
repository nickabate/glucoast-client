export default function LandingDetails({ learnId }) {
  if (learnId === "about") {
    return (
      <section>
        <div>
          <p>Details 1</p>
        </div>
      </section>
    );
  }

  if (learnId === "howtouse") {
    return (
      <section>
        <div>
          <p>Details 2</p>
        </div>
      </section>
    );
  }

  if (learnId === "diabetes") {
    return (
      <section>
        <div>
          <p>Details 3</p>
        </div>
      </section>
    );
  }

  return (
    <section>
      <div>
        <p>Details not linking</p>
      </div>
    </section>
  );
}
