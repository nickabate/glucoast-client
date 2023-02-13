import "./LandingInfo.scss";
import { NavLink } from "react-router-dom";

export default function LandingInfo() {
  return (
    <section className="landinginfo">
      <NavLink className="landinginfo__link" to={`/welcome/about`}>
        Button 1
      </NavLink>
      <NavLink className="landinginfo__link" to={`/welcome/howtouse`}>
        Button 2
      </NavLink>
      <NavLink className="landinginfo__link" to={`/welcome/diabetes`}>
        Button 3
      </NavLink>
    </section>
  );
}
