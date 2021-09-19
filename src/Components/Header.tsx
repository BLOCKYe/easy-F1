import React from "react";
import { GrWheelchairActive } from "react-icons/gr";

const Header: React.FC = () => {
  return (
    <div className="header">
      <div className="header__title">
        <div className="header__logo">
          <GrWheelchairActive />
        </div>
        easy-f1
      </div>
      <div className="header__subtitle">Current F1 summaries</div>
    </div>
  );
};

export default Header;
