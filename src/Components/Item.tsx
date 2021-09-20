import React from "react";

interface Props {
  position?: string;
  logo?: string;
  name: string;
  points?: string;
}

export const Item: React.FC<Props> = (props) => {
  return (
    <div className="item">
      <div className="item__position">{props.position}</div>
      <img src={props.logo} alt="" className="item__logo" />
      <div className="item__name">{props.name}</div>
      <div className="item__points">{props.points}</div>
    </div>
  );
};