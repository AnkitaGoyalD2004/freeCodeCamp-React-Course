import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { books } from "./books";
import Book from "./Book";

// const names = ["john", "Dishu", "Tashu"];
// const newNames = names.map((name)=>{
//    return <h1>{name}</h1>
// });
// console.log(newNames);

const BookList = () => {
  // const getBook = (id) => {
  //   const book = books.find((book) => book.id === id);
  //   console.log(book);
  // };
  // getBook(2);
  return (
    <>
      <h1>Amazon Best Sellers </h1>
      <section className="BookList">
        {/* <EventExamples /> */}
        {books.map((book, index) => {
          return <Book {...book} key={book.id} number={index} />;
        })}
      </section>
    </>
  );
};

// const EventExamples = () => {
//   //   const handleFormInput = (e) => {
//   //   console.log(e.target);
//   //   console.log(e.target.name);
//   //   console.log(e.target.value);
//   //   // console.log("handle form input");
//   // };
//   // const handleButtonClick = () => {
//   //   alert("handle button click");
//   // };
//   // const handleFormSubmission = (e) => {
//   //   e.preventdefault();
//   //   console.log("form submitted");
//   // };
//   return (
//     <section>
//       <form>
//         <h2>Typical Form</h2>
//         <input
//           type="text"
//           name="product"
//           onChange={(e) => console.log(e.target.value)}
//           styles={{ margin: "1rem 0" }}
//         />

//         <button type="submit"> submit</button>
//         <div>
//           <button onClick={() => console.log("click me")} type="button">
//             Click me
//           </button>
//         </div>
//       </form>
//     </section>
//   );
// };

//  children Prop
//everything we want to render in between the component tag  we are using the special prop which is children

// {} --> this in jsx is value inside in this must be an expression (return some value)
// it cannot be a statement
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);

// {} --> this in jsx means going back to the js Land
//  value inside must be an expression
