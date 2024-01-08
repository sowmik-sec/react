import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";
import { jsx as _jsx } from "react/jsx-runtime";

function MyApp() {
  return (
    <div>
      <h1>Custom App!!!!!!!!</h1>
    </div>
  );
}

// const reactElement = {
//   type: "a",
//   props: {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   children: "Click me to visit google",
// };

const anotherUser = "habibi";

const anotherElement = (
  <a href="https://google.com" target="_blank">
    Visit google
  </a>
);

const reactElement = React.createElement(
  "a",
  { href: "https://google.com", target: "_blank" },
  "click me to visit googleeee",
  anotherUser
);

ReactDOM.createRoot(document.getElementById("root")).render(reactElement);
