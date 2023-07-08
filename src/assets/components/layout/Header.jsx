import "./Header.scss"
import logo from "../../Images/shared/logo.svg"

function Header() {
  return <header>
    <img src={logo} alt="logo" />
    <div className="line"></div>
    <ul>
        <li><p>00</p><p>HOME</p></li>
        <li><p>01</p><p>DESTINATION</p></li>
        <li><p>02</p><p>CREW</p></li>
        <li><p>03</p><p>TECHNOLOGY</p></li>
    </ul>
  </header>;
}

export default Header;
