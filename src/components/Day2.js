import React, { useState } from "react";
import "./Day2.css";

function Day2() {
    const [isActive, setIsActive] = useState(false);
    const [wasActive, setWasActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive);
        setWasActive(true);
    }

  return (
    <div className="frame__day2">
      <div className="center__day2">
        <div className={`menu-icon__day2 ${isActive && "active"}`} onClick={handleClick}>
          <div className={`line-1__day2 ${!wasActive && "no-animation__day2"}`}></div>
          <div className={`line-2__day2 ${!wasActive && "no-animation__day2"}`}></div>
          <div className={`line-3__day2 ${!wasActive && "no-animation__day2"}`}></div>
        </div>
      </div>
    </div>
  );
}

export default Day2;
