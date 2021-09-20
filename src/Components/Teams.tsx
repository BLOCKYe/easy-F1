import React, { useState, useEffect } from "react";
import { Item } from "./Item";
import { MdExpandMore } from "react-icons/md";

export const Teams: React.FC = () => {
  const [more, setmore] = useState<boolean>(false);
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
      <div className="list__title">Constructors standings</div>

      {[...teams].slice(0, 3).map((e) => (
        <Item
          key={e.position}
          position={e.position}
          logo="https://www.formula1.com/content/dam/fom-website/teams/2021/red-bull-racing-logo.png.transform/2col/image.png"
          name={e.Constructor.name}
          points={e.points}
        />
      ))}

      {more && (
        <div className="list__extended">
          {[...teams].slice(3, teams.length).map((e) => (
            <Item
              key={e.position}
              position={e.position}
              logo="https://www.formula1.com/content/dam/fom-website/teams/2021/red-bull-racing-logo.png.transform/2col/image.png"
              name={e.Constructor.name}
              points={e.points}
            />
          ))}
        </div>
      )}

      <div onClick={() => setmore(!more)} className="list__more">
        Show more
        <div className={more ? "list__icon--active" : "list__icon"}>
          <MdExpandMore />
        </div>
      </div>
    </div>
  );
};
