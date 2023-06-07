import { useMemo, useState } from "react";
export function CalculateFactorial() {
  const [number, setNumber] = useState(1);
  const [inc, setInc] = useState(0);
  //without useMemo hook
  //const factorial = factorialOf(number);
  //with the help of useMemo hook
  const factorial = useMemo(() => factorialOf(number), [number]);
  const onChange = (event) => {
    setNumber(Number(event.target.value));
  };
  const onClick = () => setInc((i) => i + 1);

  return (
    <div>
      Factorial of
      <input
        type="number"
        style={{ marginBottom: "10px" }}
        value={number}
        onChange={onChange}
      />
      <div style={{ marginBottom: "10px" }}>is {factorial}</div>
      <button onClick={onClick}>Re-render</button>
    </div>
  );
}
function factorialOf(n) {
  console.log("factorialOf(n) called!");
  return n <= 0 ? 1 : n * factorialOf(n - 1);
}
