import "./LandingDetails.scss";

export default function LandingDetails({ learnId }) {
  // Content rendered based on URL param prop
  if (learnId === "about") {
    return (
      <section className="landingdetails">
        <h3 className="landingdetails__header">What is GLUCOAST?</h3>
        <p className="landingdetails__text">
          We are an all-in-one dashboard aiming to assist individuals suffering
          from diabetes. We help users to track their blood sugar (glucose)
          levels throughout the day, by keeping a log of different variables and
          how they affected their blood sugar levels.
        </p>
        <h3 className="landingdetails__header">Our mission!</h3>
        <p className="landingdetails__text">
          GLUCOAST's goal is to help your glucose levels coast throughout the
          day by making informed decisions on how to manage them without
          unintentionally causing glucose levels to rise or crash during your
          day, which is a diabetic’s biggest daily challenge.
        </p>
      </section>
    );
  }

  // Content rendered based on URL param prop

  if (learnId === "howtouse") {
    return (
      <section className="landingdetails">
        <h3 className="landingdetails__header">What does GLUCOAST do?</h3>
        <p className="landingdetails__text">
          GLUCOAST is a means to log the daily meals you consume, the amount of
          insulin injected to cover those meals, track your glucose levels
          before and after eating, in addition to other daily variables like the
          amount of sleep you had or exercise performed. We provide you a visual
          dashboard to make understanding your day much easier!
        </p>
        <h3 className="landingdetails__header">What do I need to do?</h3>
        <p className="landingdetails__text">
          At the end of each day, a user is recommended to log their information
          in order for GLUCOAST to provide them an accurate summary of the
          factors which affected their glucose levels during the day. By keeping
          a consistent log, users may be able to spot trends which lead them to
          experiencing a great feeling day versus a not so great day!
        </p>
      </section>
    );
  }

  // Content rendered based on URL param prop

  if (learnId === "diabetes") {
    return (
      <section className="landingdetails">
        <h3 className="landingdetails__header">What is diabetes?</h3>
        <p className="landingdetails__text">
          Diabetes is a chronic (long-lasting) health condition that affects how
          your body turns food into energy.{" "}
        </p>
        <p className="landingdetails__text">
          Your body breaks down most of the food you eat into sugar (glucose)
          and releases it into your bloodstream. When your blood sugar goes up,
          it signals your pancreas to release insulin. Insulin acts like a key
          to let the blood sugar into your body’s cells for use as energy.
        </p>{" "}
        <p className="landingdetails__text">
          {" "}
          With diabetes, your body doesn’t make enough insulin or can’t use it
          as well as it should. When there isn’t enough insulin or cells stop
          responding to insulin, too much blood sugar stays in your bloodstream.
          Over time, that can cause serious health problems, such as heart
          disease, vision loss, and kidney disease.
        </p>
        <p className="landingdetails__text">
          {" "}
          There isn’t a cure yet for diabetes, but losing weight, eating healthy
          food, and being active can really help.
        </p>
        <p className="landingdetails__text">
          Source: Centers for Disease Control and Prevention (2022)
        </p>
      </section>
    );
  }

  return (
    <section className="landingdetails">
      <h3 className="landingdetails__header">Hmm...</h3>
      <p className="landingdetails__text">
        It seems like there is nothing to display here. Try clicking one of the
        buttons to learn more about GLUCOAST!
      </p>
    </section>
  );
}
