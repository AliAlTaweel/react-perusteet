import Display from "./Display";

const Statistic = (props) => {
  const g = props.good;
  const b = props.bad;
  const n = props.neutral;
  const total = g + n + b;
  const v = g - b;
  let avar = v / total;
  let pavra = (g / total) * 100;
  if (total == 0) {
    avar = 0;
    pavra = 0;
  }

  return (
    <>
      <Display text="Total" num={total} />
      <Display text="Avarage" num={avar} />
      <Display text="Positive" num={pavra} text1=" %" />
    </>
  );
};
export default Statistic;
