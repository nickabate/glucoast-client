import "./PageHeader.scss";
import { Link } from "react-router-dom";
import blood from "../../assets/icons/blood-drop.png";
import { useNavigate } from "react-router-dom";
import avatar from "../../assets/icons/user.svg";

export default function PageHeader() {
  const navigate = useNavigate();

  const toLanding = () => {
    navigate("/welcome/about");
  };

  return (
    <header className="header">
      <section className="header__container">
        <Link className="header__link" to={"/"}>
          <img className="header__image" src={blood} alt="Blood drop" />
          <h3 className="header__title">GLUCOAST</h3>
        </Link>
        <div className="header__navitems">
          <button onClick={toLanding} className="header__button">
            LEARN MORE
          </button>
          <div className="header__container2">
            <Link className="header__user" to="/">
              <img className="header__avatar" src={avatar} alt="User avatar" />
              <h3 className="header__name">User</h3>
            </Link>
          </div>
        </div>
      </section>
    </header>
  );
}
