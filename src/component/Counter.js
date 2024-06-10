import React from "react";

const Counter = ({ count, color }) => {
  console.log(`${color} is: ${count}`);
  return (
    <div>
      {color} : {count}
    </div>
  );
};

export default Counter;
