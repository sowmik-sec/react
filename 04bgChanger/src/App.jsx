import { useState } from "react";
import { ColorButton } from "./components/ColorButton";

function App() {
  const [color, setColor] = useState("black");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <ColorButton color={`red`} setColor={setColor} />
          <ColorButton color={`green`} setColor={setColor} />
          <ColorButton color={`blue`} setColor={setColor} />
          <ColorButton color={`olive`} setColor={setColor} />
          <ColorButton color={`yellow`} setColor={setColor} />
          <ColorButton color={`purple`} setColor={setColor} />
          <ColorButton color={`grey`} setColor={setColor} />
          <ColorButton color={`pink`} setColor={setColor} />
          <ColorButton color={`black`} setColor={setColor} />
        </div>
      </div>
    </div>
  );
}

export default App;
