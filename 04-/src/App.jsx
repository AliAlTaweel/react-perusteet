import Display from "./Display";
import Button from "./Button";
import History from "./History";
import { useState } from "react";
/*
function App() {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAll] = useState([]);
  const [total, setTotal] = useState(0);
  const handleLeftClick = () => {
    const nLeft = left + 1;
    setLeft(nLeft);
    setAll(allClicks.concat("L"));
    setTotal(nLeft + right);
  };
  const handleRightClick = () => {
    const nRight = right + 1;
    setRight(nRight);
    setAll(allClicks.concat("R"));
    setTotal(left + nRight);
  };

  return (
    <div>
      {left}
      <Button handle={handleLeftClick} text="left"/>
     
      <Button handle={handleRightClick} text="right"/>
      {right}
      
      <History total={allClicks}/>
    </div>
  );
}*/
//Hooks handling revisiting

const App = () => {
  const [value, setValue] = useState(0);
  const setToValue = (x) => () => {
    console.log("x is :", x);
    setValue(x + 2);
    console.log(value);
  };
  return (
    <div>
      {value}
      <button>reset to zero</button>
      <button onClick={setToValue(2)}>button</button>
    </div>
  );
};
export default App;
