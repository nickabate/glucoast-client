import "./LandingInfo.scss";
import { NavLink } from "react-router-dom";

export default function LandingInfo() {
  return (
    <section className="landinginfo">
      <NavLink className="landinginfo__link" to={`/welcome/about`}>
        About Us
      </NavLink>
      <NavLink className="landinginfo__link" to={`/welcome/howtouse`}>
        How to Use
      </NavLink>
      <NavLink className="landinginfo__link" to={`/welcome/diabetes`}>
        About Diabetes
      </NavLink>
    </section>
  );
}
