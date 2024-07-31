import "./DestinationMenu.scss"
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function DestinationMenu({ activeDestination, setActiveDestination }) {
  return (
    <div className="destination-menu">
      <Link  className={activeDestination === 3 ? "active" : ""} onClick={() => setActiveDestination(3)}>MOON</Link>
      <Link  className={activeDestination === 2 ? "active" : ""} onClick={() => setActiveDestination(2)}>MARS</Link>
      <Link  className={activeDestination === 1 ? "active" : ""} onClick={() => setActiveDestination(1)}>EUROPA</Link>
      <Link  className={activeDestination === 4 ? "active" : ""} onClick={() => setActiveDestination(4)}>TITAN</Link>
    </div>
  );
}

DestinationMenu.propTypes = {
    activeDestination: PropTypes.string.isRequired,
    setActiveDestination: PropTypes.func.isRequired,
  };

export default DestinationMenu;