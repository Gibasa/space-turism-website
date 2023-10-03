


function Moon() {
 const moon = {
    id: 3,
    destination: "Moon",
    about:
      "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384,400 km",
    travelTime: "3 days",
    img: "/Images/destination/image-moon.png"
  }

  return (
    <div className="destination-moon">
        <h2>{moon.destination}</h2>
    </div>
  );
}

export default Moon;