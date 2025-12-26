import { useState } from "react";

function ArrayAddReset() {
  const [numbers, setNumbers] = useState([]);

  const addNumber = () => {
    setNumbers(prev => [...prev, prev.length + 1]);
  };

  const resetArray = () => {
    setNumbers([]);
  };

  return (
    <div>
      <h3>Numbers: {numbers.join(", ")}</h3>

      <button onClick={addNumber}>AddNumber</button><br></br>
      <button onClick={resetArray}>Reset</button>
    </div>
  );
}

export default ArrayAddReset;
