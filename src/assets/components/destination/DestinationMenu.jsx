import "./DestinationMenu.scss"
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function DestinationMenu({ activeDestination, setActiveDestination }) {
  return (
    <div className="destination-menu">
      <Link  className={activeDestination === "moon" ? "active" : ""} onClick={() => setActiveDestination("moon")}>MOON</Link>
      <Link  className={activeDestination === "mars" ? "active" : ""} onClick={() => setActiveDestination("mars")}>MARS</Link>
      <Link  className={activeDestination === "europa" ? "active" : ""} onClick={() => setActiveDestination("europa")}>EUROPA</Link>
      <Link  className={activeDestination === "titan" ? "active" : ""} onClick={() => setActiveDestination("titan")}>TITAN</Link>
    </div>
  );
}

DestinationMenu.propTypes = {
    activeDestination: PropTypes.string.isRequired,
    setActiveDestination: PropTypes.func.isRequired,
  };

export default DestinationMenu;