import React, { useState, useEffect } from "react";
import { Item } from "./Item";

export const Teams: React.FC = () => {
  const [teams, setteams] = useState([
    { position: "", points: "", Constructor: { name: "" } },
  ]);

  useEffect(() => {
    fetch("http://ergast.com/api/f1/current/constructorStandings.json")
      .then((response) => response.json())
      .then((result) => {
        setteams(
          result.MRData.StandingsTable.StandingsLists[0].ConstructorStandings
        );
      })
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <div className="list">
      {[...teams].map((e) => (
        <Item
          key={e.position}
          position={e.position}
          name={e.Constructor.name}
          points={e.points}
        />
      ))}
    </div>
  );
};
