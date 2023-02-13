import "./PageHeader.scss";
import { Link } from "react-router-dom";
import blood from "../../assets/icons/blood-drop.png";
import { useNavigate } from "react-router-dom";

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
        <button onClick={toLanding} className="header__button">
          LEARN MORE
        </button>
      </section>
    </header>
  );
}
