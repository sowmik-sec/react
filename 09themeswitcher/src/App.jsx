import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="p-4 bg-pink-400 text-3xl text-white">hello world</h1>
    </>
  );
}

export default App;
