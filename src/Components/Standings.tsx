import React, { useState } from "react";
import { GiFullMotorcycleHelmet } from "react-icons/gi";
import { IoMdHammer } from "react-icons/io";
import { Drivers } from "./Drivers";
import { Teams } from "./Teams";

export const Standings: React.FC = () => {
  const [drivers, setdrivers] = useState(true);
  const [teams, setteams] = useState(false);

  return (
    <div className="standings">
      <div className="standings__title">Standings</div>
      <div className="standings__menu">
        <div
          onClick={() => {
            setteams(false);
            setdrivers(true);
          }}
          className={`standings__type ${
            drivers ? "standings__type--active" : ""
          }`}
        >
          <div className="standings__icon">
            <GiFullMotorcycleHelmet />
          </div>
          Drivers
        </div>

        <div
          onClick={() => {
            setdrivers(false);
            setteams(true);
          }}
          className={`standings__type ${
            teams ? "standings__type--active" : ""
          }`}
        >
          <div className="standings__icon">
            <IoMdHammer />
          </div>
          Constructors
        </div>
      </div>

      {drivers && (
        <div className="standings__list">
          <Drivers />
        </div>
      )}

      {teams && (
        <div className="standings__list">
          <Teams />
        </div>
      )}
    </div>
  );
};
