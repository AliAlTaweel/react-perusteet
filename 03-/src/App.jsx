import { useState } from "react";
import "./App.css";
import Display from "./Display";
import Button from "./Button";

const App = (props) => {
  const [counter, setCounter] = useState(0);

  const increaseByone = () => {
    setCounter(counter + 1);
  };
  const setTozero = () => {
    setCounter(0);
  };
  const decreseByone = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <Display counter={counter} />
      <Button onClick={increaseByone} text="Plus" />
      <Button onClick={setTozero} text="Reset" />
      <Button onClick={decreseByone} text="Minus" />
    </>
  );
};

export default App;
