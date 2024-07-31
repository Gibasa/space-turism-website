import "./Destination.scss";
import { useState } from "react";

import DestinationMenu from "./DestinationMenu";

function Destination() {
  const destination = [
    {
      id: 1,
      destination: "EUROPA",
      about:
        "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug  wintery cabin.",
      distance: "628 MIL. KM",
      travelTime: "3 YEARS",
      img: "/Images/destination/image-europa.png",
    },
    {
      id: 2,
      destination: "MARS",
      about:
        "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
      distance: "225 MIL. KM",
      travelTime: "9 MONTHS",
      img: "/Images/destination/image-mars.png",
    },
    {
      id: 3,
      destination: "MOON",
      about:
        "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
      distance: "384,400 KM",
      travelTime: "3 DAYS",
      img: "/Images/destination/image-moon.png",
    },
    {
      id: 4,
      destination: "TITAN",
      about:
        "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
      distance: "1.6 BIL. KM",
      travelTime: "7 YEARS",
      img: "/Images/destination/image-titan.png",
    },
  ];
  const [activeDestination, setActiveDestination] = useState(3);

  const getDestinationById = (id) => {
    return destination.find((destination) => destination.id === id);
  };

  return (
    <section className="destination">
      <div className="destination-container">
        <div className="destination-title">
          <h2>01</h2>
          <h2>PICK YOUR DESTINATION</h2>
        </div>
        {activeDestination && getDestinationById(activeDestination) && (
          <div className="destination-main">
            <DestinationMenu
              activeDestination={activeDestination}
              setActiveDestination={setActiveDestination}
            />
            <div className="destination-content">
              <img
                src={getDestinationById(activeDestination).img}
                alt={getDestinationById(activeDestination).destination}
              />
              <div className="destination-content-text">
                <div className="destination-top-text">
                  <h2>{getDestinationById(activeDestination).destination}</h2>
                  <p>{getDestinationById(activeDestination).about}</p>
                </div>
                <div className="destination-text-line"></div>
                <div className="destination-bottom-text">
                  <div className="destination-distance">
                    <p>AVG. DISTANCE</p>
                    <h2>{getDestinationById(activeDestination).distance}</h2>
                  </div>
                  <div className="destination-time">
                    <p>EST. TRAVEL.TIME</p>
                    <h2>{getDestinationById(activeDestination).travelTime}</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Destination;
