// JSX Rules --> return a single element
// Fragment --> let's group elements without adding extra node
import React from "react";
import ReactDOM from "react-dom/client";

function Greeting() {
  return (
    <div>
      <Person />
      <Message />
    </div>
  );
}

const Person = () => <h2>Ankita Dutt</h2>;
const Message = () => <p> this is my message </p>;

// function Greeting() {
//   return React.createElement(
//     "div",
//     {},
//     React.createElement("h2", {}, "Hello World")
//   );
// }

// function Greeting() {
//   return React.createElement("h2", {}, " Hello World");
// }

// function Greeting() {
//   return (
//     // Instead of React.fragment we can use <Section> </Section>
//     // and also <> </>
//     <React.Fragment>
//       <div className="someValue">
//         <h3>Hello People</h3>
//         <ul>
//           <li>
//             <a href="#"> Hello World </a>
//           </li>
//         </ul>
//       </div>
//       <h2>Hello World</h2>
//       <input type="text" name="" id=""></input>
//     </React.Fragment>
//   );
// }
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Greeting />);

// every time we tink of component we think for function
