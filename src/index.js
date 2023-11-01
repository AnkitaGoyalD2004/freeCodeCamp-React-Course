import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const books = [
  {
    author: "Francesc Miralles",
    title: "Intersting facts about Ikigai",
    img: "./images/ikigai.jpg",
    id: 1,
  },
  {
    author: "James Clear",
    title: "Atomic Habits",
    img: "https://images-eu.ssl-images-amazon.com/images/I/91bYsX41DVL._AC_UL900_SR900,600_.jpg",
    id: 2,
  },
];

const thirdBook = {
  author: "Morgan Housel",
  title: "The Psychology Of Money",
  img: "https://images-eu.ssl-images-amazon.com/images/I/71g2ednj0JL._AC_UL900_SR900,600_.jpg",
};

// const names = ["john", "Dishu", "Tashu"];
// const newNames = names.map((name)=>{
//    return <h1>{name}</h1>
// });
// console.log(newNames);

const BookList = () => {
  const getBook = (id) => {
    const book = books.find((book) => book.id === id);
    console.log(book);
  };
  return (
    <section className="BookList">
      {/* <EventExamples /> */}
      {books.map((book) => {
        return <Book {...book} key={book.id} getBook={getBook} />;
      })}
    </section>
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

const Book = (props) => {
  const { img, title, author, getBook } = props;
  // console.log(props);

  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <button onClick={getBook}>click me</button>
      <h4>{author}</h4>
    </article>
  );
};

// {} --> this in jsx is value inside in this must be an expression (return some value)
// it cannot be a statement
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);

// {} --> this in jsx means going back to the js Land
//  value inside must be an expression
