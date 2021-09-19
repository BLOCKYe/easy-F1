import React from "react";

const Next: React.FC = () => {
  return (
    <div className="next">
      <div className="next__date">2021-09-26</div>
      <div className="next__name">Russian Grand Prix</div>
      <div className="next__country">Russia</div>
      <img
        src="https://i.pinimg.com/originals/d1/b3/74/d1b37494944996683f9677682942ac81.png"
        alt=""
        className="next__map"
      />
    </div>
  );
};

export default Next;
