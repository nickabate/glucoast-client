import "./Landing.scss";
import { useParams } from "react-router-dom";
import LandingInfo from "../../components/LandingInfo/LandingInfo";
import LandingDetails from "../../components/LandingDetails/LandingDetails";

export default function Landing() {
  const params = useParams();
  const learnId = params.learnId;

  return (
    <section className="landing">
      <div className="landing__main">
        <div className="landing__container">
          <h2 className="landing__header">Welcome to GLUCOAST!</h2>
          <p className="landing__text">
            Click on a button below to learn more about our app.
          </p>
          <div className="landing__layout">
            <LandingInfo />
            <LandingDetails learnId={learnId} />
          </div>
        </div>
      </div>
    </section>
  );
}
