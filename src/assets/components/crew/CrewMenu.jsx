import "./CrewMenu.scss"
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function CrewMenu({ activeCrew, setActiveCrew }) {
  return (
    <div className="crew-menu">
      <Link  className={activeCrew === 1 ? "crew-active" : ""} onClick={() => setActiveCrew(1)}>•</Link>
      <Link  className={activeCrew === 2 ? "crew-active" : ""} onClick={() => setActiveCrew(2)}>•</Link>
      <Link  className={activeCrew === 3 ? "crew-active" : ""} onClick={() => setActiveCrew(3)}>•</Link>
      <Link  className={activeCrew === 4 ? "crew-active" : ""} onClick={() => setActiveCrew(4)}>•</Link>     
    </div>
  );
}

CrewMenu.propTypes = {
    activeCrew: PropTypes.string.isRequired,
    setActiveCrew: PropTypes.func.isRequired,
  };

export default CrewMenu;