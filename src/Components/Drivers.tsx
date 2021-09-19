import React, { useState } from "react";
import { Item } from "./Item";
import { MdExpandMore } from "react-icons/md";

export const Drivers: React.FC = () => {
  const [more, setmore] = useState<boolean>(false);

  return (
    <div className="list">
      <div className="list__title">Drivers standings</div>
      <Item
        position={1}
        logo="https://www.formula1.com/content/dam/fom-website/teams/2021/red-bull-racing-logo.png.transform/2col/image.png"
        name="Verstappen"
        points={226.5}
      />
      <Item
        position={2}
        logo="https://www.formula1.com/content/dam/fom-website/teams/2021/mercedes-logo.png.transform/2col/image.png"
        name="Hamilton"
        points={221.5}
      />
      <Item
        position={3}
        logo="https://www.formula1.com/content/dam/fom-website/teams/2021/mercedes-logo.png.transform/2col/image.png"
        name="Bottas"
        points={141}
      />

      {more && (
        <div className="list__extended">
          <Item
            position={4}
            logo="https://www.formula1.com/content/dam/fom-website/teams/2021/red-bull-racing-logo.png.transform/2col/image.png"
            name="Verstappen"
            points={226.5}
          />
          <Item
            position={5}
            logo="https://www.formula1.com/content/dam/fom-website/teams/2021/mercedes-logo.png.transform/2col/image.png"
            name="Hamilton"
            points={221.5}
          />
          <Item
            position={6}
            logo="https://www.formula1.com/content/dam/fom-website/teams/2021/mercedes-logo.png.transform/2col/image.png"
            name="Bottas"
            points={141}
          />
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
