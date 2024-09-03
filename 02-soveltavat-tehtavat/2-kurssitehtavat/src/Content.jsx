import React from "react";
import Parts from "./Parts";
const Content = (props) => {
 
  return (
    <>
      <Parts parts={props.course.parts} />
    </>
  );
};

export default Content;
