import React, { useState, useEffect } from "react";
import { Item } from "./Item";
import { MdExpandMore } from "react-icons/md";

export const Drivers: React.FC = () => {
  const [more, setmore] = useState<boolean>(false);
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
      <div className="list__title">Drivers standings</div>

      {[...drivers].slice(0, 3).map((e) => (
        <Item
          key={e.position}
          position={e.position}
          logo="https://www.formula1.com/content/dam/fom-website/teams/2021/red-bull-racing-logo.png.transform/2col/image.png"
          name={e.Driver.familyName}
          points={e.points}
        />
      ))}

      {more && (
        <div className="list__extended">
          {[...drivers].slice(3, drivers.length).map((e) => (
            <Item
              key={e.position}
              position={e.position}
              logo="https://www.formula1.com/content/dam/fom-website/teams/2021/red-bull-racing-logo.png.transform/2col/image.png"
              name={e.Driver.familyName}
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
