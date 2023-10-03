import "./Destination.scss";
import { useState, useEffect } from "react";

import DestinationMenu from "./DestinationMenu";

function Destination() {
  const destination = [
    {
      id: 1,
      destination: "Europa",
      about:
        "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug  wintery cabin.",
      distance: "628 mil. km",
      travelTime: "3 years",
      img: "/Images/destination/image-europa.png",
    },
    {
      id: 2,
      destination: "Mars",
      about:
        "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
      distance: "225 mil. km",
      travelTime: "9 months",
      img: "/Images/destination/image-mars.png",
    },
    {
      id: 3,
      destination: "Moon",
      about:
        "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
      distance: "384,400 km",
      travelTime: "3 days",
      img: "/Images/destination/image-moon.png",
    },
    {
      id: 4,
      destination: "Titan",
      about:
        "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
      distance: "1.6 bil. km",
      travelTime: "7 years",
      img: "/Images/destination/image-titan.png",
    },
  ];
  const [activeDestination, setActiveDestination] = useState("moon");

  const getDestinationById = (id) => {
    return destination.find((destination) => destination.id === id);
  };

  useEffect(() => {
    setActiveDestination("moon");
  }, []);

  return (
    <div className="destination">
      <div className="destination-container">
        <div className="destination-title">
          <h2>01</h2>
          <h2>PICK YOUR DESTINATION</h2>
        </div>
        <div className="destination-main">
          <DestinationMenu activeDestination={activeDestination} setActiveDestination={setActiveDestination} />
          {activeDestination && getDestinationById(activeDestination) && (
            <div className="destination-content">
              <h2>{getDestinationById(activeDestination).destination}</h2>
              <p>{getDestinationById(activeDestination).about}</p>
              <img
                src={getDestinationById(activeDestination).img}
                alt={getDestinationById(activeDestination).destination}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Destination;
