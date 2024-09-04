const History = (props) => {
  if (props.total.length === 0) {
    return (
      <div>
        <p> the app is used by pressing the buttons</p>
      </div>
    );
  }
  return <div>button press history: {props.total.join(" ,")}</div>;
};

export default History;
