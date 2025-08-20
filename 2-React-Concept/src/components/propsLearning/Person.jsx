import React from "react";

const person = ({ name, age }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>{age}</p>
    </div>
  );
};

export default person;
