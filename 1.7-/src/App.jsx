import { useState } from "react";
import Button from "./Button";
import Display from "./Display";
import Statistic from "./Statistic";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  /* Handles functions S*/
  const handleGood = () => {
    const g = good + 1;
    setGood(g);
  };
  const handleNutral = () => {
    const n = neutral + 1;
    setNeutral(n);
  };
  const handleBad = () => {
    const b = bad + 1;
    setBad(b);
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
      <Statistic good={good} bad={bad} neutral={neutral} />
    </div>
  );
};

export default App;