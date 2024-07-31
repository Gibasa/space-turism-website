import "./Technology.scss";
import { useState, useEffect } from "react";
import TechnologyMenu from "./TechnologyMenu";

function Technology() {
  const Technology = [
    {
      id: 1,
      technology: "LAUNCH VEHICLE",
      about:
        "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
      img: "/Images/technology/image-launch-vehicle-portrait.jpg",
      imgTablet: "/Images/technology/image-launch-vehicle-landscape.jpg",
    },
    {
      id: 2,
      technology: "SPACEPORT",
      about:
        "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
      img: "/Images/technology/image-spaceport-portrait.jpg",
      imgTablet: "/Images/technology/image-spaceport-landscape.jpg",
    },
    {
      id: 3,
      technology: "SPACE CAPSULE",
      about:
        "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
      img: "/Images/technology/image-space-capsule-portrait.jpg",
      imgTablet: "/Images/technology/image-space-capsule-landscape.jpg",
    },
  ];
  const [activeTechnology, setActiveTechnology] = useState(1);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 760);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 760);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getTechnologyById = (id) => {
    return Technology.find((Technology) => Technology.id === id);
  };

  return (
    <section className="technology">
      {activeTechnology && getTechnologyById(activeTechnology) && (
        <div className="technology-container">
          <div className="technology-left">
            <div className="technology-title">
              <h2>03</h2>
              <h2>SPACE LAUNCH 101</h2>
            </div>
            <div className="technology-content">
              <TechnologyMenu
                activeTechnology={activeTechnology}
                setActiveTechnology={setActiveTechnology}
              />
              <div className="technology-text">
                <h3>THE TERMINOLOGY...</h3>
                <h2>{getTechnologyById(activeTechnology).technology}</h2>
                <p>{getTechnologyById(activeTechnology).about}</p>
              </div>
            </div>
          </div>
          <div className="technology-image">
            <img
              src={
                isMobile
                  ? getTechnologyById(activeTechnology).imgTablet
                  : getTechnologyById(activeTechnology).img
              }
              alt={getTechnologyById(activeTechnology).name}
            />
          </div>
        </div>
      )}
    </section>
  );
}

export default Technology;
