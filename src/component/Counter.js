import React from "react";

const Counter = ({ count, color }) => {
  return (
    <div style={{ backgroundColor: color }} className="counter">
      {count}
    </div>
  );
};

export default Counter;
