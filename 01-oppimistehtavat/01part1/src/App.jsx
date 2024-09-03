
const Header = (props) => {
  return (
    <>
      <h2> {props.course}</h2>
    </>
  );
};
// ======= Part S =======
const Part = (propsP) => {
  return (
    <>
      <p>
        {propsP.part} {propsP.exercises}
      </p>
    </>
  );
};
// ======= Conetnt S =======
const Content = (props1) => {
  return (
    <>
      <Part part={props1.part1} exercises={props1.exercises1} />
      <Part part={props1.part2} exercises={props1.exercises2} />
      <Part part={props1.part3} exercises={props1.exercises3} />
    </>
  );
};
// ======= Total S =======
const Total = (props2) => {
  return (
    <>
      <p>
        Number of exercises{" "}
        {props2.exercises1 + props2.exercises2 + props2.exercises3}
      </p>
    </>
  );
};
// ======= App S =======
const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <div>
      <Header course={course} />
      <Content
        part1={part1}
        part2={part2}
        part3={part3}
        exercises1={exercises1}
        exercises2={exercises2}
        exercises3={exercises3}
      />
      <Total
        exercises1={exercises1}
        exercises2={exercises2}
        exercises3={exercises3}
      />
    </div>
  );

};

export default App;
