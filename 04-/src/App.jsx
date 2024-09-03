import Display from "./Display";
import Button from "./Button";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(90);
  const plusOne = () => setCounter(counter + 1);
  const setTozero = () => setCounter(0);
  const minusOne = () => setCounter(counter - 1);

  return (
    <>
      <Display counter={counter} />
      <Button onClick={plusOne} text="Plus" />
      <Button onClick={setTozero} text="Reset" />
      <Button onClick={minusOne} text="Minus" />
    </>
  );
}

export default App;
