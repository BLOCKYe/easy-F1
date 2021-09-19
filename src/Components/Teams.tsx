import React, { useState } from "react";
import { Item } from "./Item";
import { MdExpandMore } from "react-icons/md";

export const Teams: React.FC = () => {
  const [more, setmore] = useState<boolean>(false);

  return (
    <div className="list">
      <div className="list__title">Constructors standings</div>
      <Item
        position={1}
        logo="https://www.formula1.com/content/dam/fom-website/teams/2021/mercedes-logo.png.transform/2col/image.png"
        name="Mercedes"
        points={362.5}
      />
      <Item
        position={2}
        logo="https://www.formula1.com/content/dam/fom-website/teams/2021/red-bull-racing-logo.png.transform/2col/image.png"
        name="Red Bull"
        points={344.5}
      />
      <Item
        position={3}
        logo="https://www.formula1.com/content/dam/fom-website/teams/2021/mclaren-logo.png.transform/2col/image.png"
        name="McLaren"
        points={215}
      />

      <div onClick={() => setmore(!more)} className="list__more">
        Show more
        <div className={more ? "list__icon--active" : "list__icon"}>
          <MdExpandMore />
        </div>
      </div>
    </div>
  );
};
