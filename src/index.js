import React from "react";
import ReactDOM from "react-dom/client";

// function Greeting() {
//   return (
//     <div>
//       <h2> My First Component</h2>;
//     </div>
//   );
// }

function Greeting() {
  return React.createElement(
    "div",
    {},
    React.createElement("h2", {}, "Hello World")
  );
}

// function Greeting() {
//   return React.createElement("h2", {}, " Hello World");
// }
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Greeting />);

// every time we tink of component we think for function
