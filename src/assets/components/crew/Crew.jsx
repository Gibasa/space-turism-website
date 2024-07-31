import "./Crew.scss";
import { useState } from "react";
import CrewMenu from "./CrewMenu";

function Crew() {
  const crew = [
    {
      id: 1,
      speciality: "COMMANDER",
      name: "DOUGLAS HURLEY",
      about:
        "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
      img: "/Images/crew/image-douglas-hurley.png",
    },
    {
      id: 2,
      speciality: "MISSION SPECIALIST",
      name: "MARK SHUTTLEWORTH",
      about:
        "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
      img: "/Images/crew/image-mark-shuttleworth.png",
    },
    {
      id: 3,
      speciality: "PILOT",
      name: "VICTOR GLOVER",
      about:
        "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ",
      img: "/Images/crew/image-victor-glover.png",
    },
    {
      id: 4,
      speciality: "FLIGHT ENGINEER",
      name: "ANOUSHEH ANSARI",
      about:
        "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ",
      img: "/Images/crew/image-anousheh-ansari.png",
    },
  ];

  const [activeCrew, setActiveCrew] = useState(1);

  const getCrewById = (id) => {
    return crew.find((crew) => crew.id === id);
  };
  return (
    <section className="crew">
      {activeCrew && getCrewById(activeCrew) && (
        <div className="crew-container">
          <div className="crew-left">
            <div className="crew-title">
              <h2>02</h2>
              <h2>MEET YOUR CREW</h2>
            </div>
            <div className="crew-text">
              <h2>{getCrewById(activeCrew).speciality}</h2>
              <h2>{getCrewById(activeCrew).name}</h2>
              <p>{getCrewById(activeCrew).about}</p>
            </div>
            <CrewMenu activeCrew={activeCrew} setActiveCrew={setActiveCrew} />
          </div>
          <div className="crew-image">
            <img
              src={getCrewById(activeCrew).img}
              alt={getCrewById(activeCrew).name}
            />
            <span ></span>
          </div>
        </div>
      )}
    </section>
  );
}

export default Crew;
