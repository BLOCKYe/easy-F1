import React from "react";

interface Props {
  position?: string;
  name: string;
  points?: string;
}

export const Item: React.FC<Props> = (props) => {
  return (
    <div className="item">
      <div className="item__position">{props.position}</div>
      <div className="item__name">{props.name}</div>
      <div className="item__points">{props.points}</div>
    </div>
  );
};
