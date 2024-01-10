import React from "react";

export const ColorButton = ({ color, setColor }) => {
  return (
    <button
      className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
      style={{ backgroundColor: color }}
      onClick={() => setColor(color)}
    >
      {color}
    </button>
  );
};
