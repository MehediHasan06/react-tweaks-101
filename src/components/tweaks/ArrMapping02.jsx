const ArrMapping = () => {
  const planets = [
    { name: "Mars", isGasPlanet: false },
    { name: "Earth", isGasPlanet: false },
    { name: "Jupiter", isGasPlanet: true },
    { name: "Venus", isGasPlanet: false },
    { name: "Neptune", isGasPlanet: true },
    { name: "Uranus", isGasPlanet: true },
  ];

  return (
    <div>
      {
        planets.map((planet, key) => {
          return <p key={key}>{ planet.isGasPlanet && planet.name }</p>
        })
      }
    </div>
  );
};

export default ArrMapping;