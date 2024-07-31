import "./TechnologyMenu.scss"
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function TechnologyMenu({ activeTechnology, setActiveTechnology }) {
  return (
    <div className="technology-menu">
      <Link  className={activeTechnology === 1 ? "tecnhology-active" : ""} onClick={() => setActiveTechnology(1)}>1</Link>
      <Link  className={activeTechnology === 2 ? "tecnhology-active" : ""} onClick={() => setActiveTechnology(2)}>2</Link>
      <Link  className={activeTechnology === 3 ? "tecnhology-active" : ""} onClick={() => setActiveTechnology(3)}>3</Link>
    </div>
  );
}

TechnologyMenu.propTypes = {
    activeTechnology: PropTypes.string.isRequired,
    setActiveTechnology: PropTypes.func.isRequired,
  };

export default TechnologyMenu;