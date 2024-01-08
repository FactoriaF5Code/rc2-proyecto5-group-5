import "./Header.css";
import logo from "../../assets/img/logoAsturFlix.png";
import userImg from "../../assets/img/userImg.png";
import btnMore from "../../assets/img/btn-mas.png";

export function Header() {
  return (
    <header>
      <img src={logo} alt="" className="logo left" />
      <nav className="left">
        <ul>
          <a href="#">
            <li>Series</li>
          </a>
          <a href="#">
            <li>Películas</li>
          </a>
        </ul>
      </nav>
      <ul className="header__userLogo right">
        <a href="">
          <li>
            <img src={userImg} alt="" />
          </li>
        </a>
        <li id="header__userLogo-more">
          <img src={btnMore} alt="" />
        </li>
      </ul>
    </header>
  );
}
