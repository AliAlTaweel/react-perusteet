import ReactDOM from "react-dom/client";

const Button = ({ onClick, text }) => (
  <button onClick={onClick}> {text}</button>
);
export default Button;
