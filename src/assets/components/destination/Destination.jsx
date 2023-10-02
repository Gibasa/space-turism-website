import "./Destination.scss";
import { Routes, Route } from "react-router-dom";
import Moon from "./Moon"
import Mars from "./Mars"
import Titan from "./Titan"
import Europa from "./Europa"

function Destination() {
  return (
    <div className="destination">
      <div className="destination-title">
        <h2>01</h2>
        <h2>PICK YOUR DESTINATION</h2>
      </div>
      <div className="destination-main">
          <Routes>
            <Route path="/destination/moon" element={<Moon />}></Route>
            <Route path="/destination/mars" element={<Mars />}></Route>
            <Route path="/destination/europa" element={<Europa />}></Route>
            <Route path="/destination/titan" element={<Titan />}></Route>
          </Routes>
      </div>
    </div>
  );
}

export default Destination;
