import "./Header.scss";
import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [selectIndex, setSelectIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = (index) => {
    setSelectIndex(index);
    setMenuOpen(false); 
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <img src="/Images/shared/logo.svg" alt="logo" />
      <div className="line"></div>
      <button className={`hamburger ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <Link to="/" onClick={() => handleClick(0)} className={selectIndex === 0 ? "selected-link-line" : ""}>
            <p>00</p><p>HOME</p>
          </Link>
        </li>
        <li>
          <Link to="/destination" onClick={() => handleClick(1)} className={selectIndex === 1 ? "selected-link-line" : ""}>
            <p>01</p><p>DESTINATION</p>
          </Link>
        </li>
        <li>
          <Link to="/crew" onClick={() => handleClick(2)} className={selectIndex === 2 ? "selected-link-line" : ""}>
            <p>02</p><p>CREW</p>
          </Link>
        </li>
        <li>
          <Link to="/technology" onClick={() => handleClick(3)} className={selectIndex === 3 ? "selected-link-line" : ""}>
            <p>03</p><p>TECHNOLOGY</p>
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
