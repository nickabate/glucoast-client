import "./Footer.scss";
import blood from "../../assets/icons/blood-drop.png";
import { Link } from "react-router-dom";
import facebook from "../../assets/icons/facebook.svg";
import instagram from "../../assets/icons/instagram.svg";
import twitter from "../../assets/icons/twitter.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__main">
        <Link className="footer__link" to={"/"}>
          <img className="footer__image" src={blood} alt="Blood drop" />
          <h3 className="footer__title">GLUCOAST</h3>
        </Link>
        <p className="footer__text">Copyright &copy; 2023 | Nick Abate</p>
        <div className="footer__socials">
          <div className="footer__container">
            <Link target="_blank" to="https://www.facebook.com">
              <img
                className="footer__icon"
                src={facebook}
                alt="Facebook logo"
              />
            </Link>
          </div>
          <div className="footer__container">
            <Link target="_blank" to="https://www.instagram.com">
              <img
                className="footer__icon"
                src={instagram}
                alt="Instagram logo"
              />
            </Link>
          </div>

          <div className="footer__container">
            <Link target="_blank" to="https://www.twitter.com">
              <img className="footer__icon" src={twitter} alt="Twitter logo" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
