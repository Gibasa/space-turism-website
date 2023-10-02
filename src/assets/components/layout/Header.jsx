import "./Header.scss"
import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [selectIndex, setSelectIndex] = useState(0)

  const handleClick = (index) =>{
    setSelectIndex(index)
  }
  return <header>
    <img src="/Images/shared/logo.svg" alt="logo" />
    <div className="line"></div>
    <ul>
        <Link to="/" onClick={() => handleClick(0)} className={selectIndex === 0? "selected-link-line": ""}><p>00</p><p>HOME</p></Link>
        <Link to="/destination" onClick={() => handleClick(1)} className={selectIndex === 1? "selected-link-line": ""}><p>01</p><p>DESTINATION</p></Link>
        <Link to="/crew" onClick={() => handleClick(2)} className={selectIndex === 2? "selected-link-line": ""}><p>02</p><p>CREW</p></Link>
        <Link to="/technology" onClick={() => handleClick(3)} className={selectIndex === 3? "selected-link-line": ""}><p>03</p><p>TECHNOLOGY</p></Link>
    </ul>
  </header>;
}

export default Header;
