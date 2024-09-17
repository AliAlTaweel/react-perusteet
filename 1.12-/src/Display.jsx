const Display = (props) => {


console.log(props.maxn)
    if(props.maxn != 0)
  return (
    <>

      {props.anecdotes[props.max]}
      {<p>has {Math.max(...points)} votes</p>}
    </>
  );
};

export default Display;

