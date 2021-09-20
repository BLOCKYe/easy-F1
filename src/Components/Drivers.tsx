import React, { useState, useEffect } from "react";
import { Item } from "./Item";

export const Drivers: React.FC = () => {
  const [drivers, setdrivers] = useState([
    { position: "", points: "", Driver: { familyName: "" } },
  ]);

  useEffect(() => {
    fetch("http://ergast.com/api/f1/current/driverStandings.json")
      .then((response) => response.json())
      .then((result) => {
        setdrivers(
          result.MRData.StandingsTable.StandingsLists[0].DriverStandings
        );
      })
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <div className="list">
      {[...drivers].map((e) => (
        <Item
          key={e.position}
          position={e.position}
          name={e.Driver.familyName}
          points={e.points}
        />
      ))}
    </div>
  );
};
