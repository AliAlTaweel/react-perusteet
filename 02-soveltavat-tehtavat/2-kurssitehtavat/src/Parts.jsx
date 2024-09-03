import React from "react";

function Parts(props) {
  return (
    <>
      {props.parts.map((part, index) => (
        <p key={index}>
          {part.name} {part.exercises}
        </p>
      ))}
    </>
  );
}

export default Parts;
