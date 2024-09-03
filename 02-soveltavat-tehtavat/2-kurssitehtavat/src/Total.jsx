import React from "react";

/* this for 1.5 from react  */
const Total = (props) => {
  let x = 0;
  props.course.parts.map((ele) => (x += ele.exercises));
  return (
    <>
      <p>Number of exercises {x}</p>
    </>
  );
};

/* this for 1.4 react 
const Total = (props) => {
  let x = 0;
  props.parts.map((ele) => (x += ele.exercises));
  return (
    <>
      <p>Number of exercises {x}</p>
    </>
  );
};
*/
export default Total;
