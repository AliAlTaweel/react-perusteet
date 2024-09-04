import { useState } from "react";
import Button from "./Button";
import Display from "./Displayc";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const handleGood = () => {
    setGood(good + 1);
  };
  const handleNutral = () => {
    setNeutral(neutral + 1);
  };
  const handleBad = () => {
    setBad(bad + 1);
  };
  return (
    <div>
      <p>
        give feedback
        <br />
      </p>
      <Button onHandle={handleGood} text="good" />
      <Button onHandle={handleNutral} text="nutral" />
      <Button onHandle={handleBad} text="bad" />
      <p>Statistics</p>
      <Display text="good" num={good} />
      <Display text="neutral" num={neutral} />
      <Display text="bad" num={bad} />
    </div>
  );
};

export default App;
