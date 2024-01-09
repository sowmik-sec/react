import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(5);
  const addValue = () => {
    if (counter === 20) {
      alert(`You can't add value more than 20`);
      return;
    }
    setCounter(counter + 1);
  };
  const removeValue = () => {
    if (counter === 0) {
      alert(`You can't decrease value less than 0`);
      return;
    }
    setCounter(counter - 1);
  };
  return (
    <>
      <h1>Hello world</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeValue}>Remove value</button>
    </>
  );
}

export default App;
