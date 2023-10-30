import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const firstBook = {
  author: "Francesc Miralles",
  title: "Intersting facts about Ikigai",
  img: "./images/ikigai.jpg",
};

const secondBook = {
  author: "James Clear",
  title: "Atomic Habits",
  img: "https://images-eu.ssl-images-amazon.com/images/I/91bYsX41DVL._AC_UL900_SR900,600_.jpg",
};

const thirdBook = {
  author: "Morgan Housel",
  title: "The Psychology Of Money",
  img: "https://images-eu.ssl-images-amazon.com/images/I/71g2ednj0JL._AC_UL900_SR900,600_.jpg",
};

const BookList = () => {
  return (
    <section className="BookList">
      <Book
        author={firstBook.author}
        title={firstBook.title}
        img={firstBook.img}
      />
      <Book
        author={secondBook.author}
        title={secondBook.title}
        img={secondBook.img}
      />
      <Book
        author={thirdBook.author}
        title={thirdBook.title}
        img={thirdBook.img}
      />
    </section>
  );
};

const Book = (props) => {
  console.log(props);
  const { img, title, author } = props;
  return (
    <article className="Book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};

// {} --> this in jsx is value inside in this must be an expression (return some value)
// it cannot be a statement
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);

// {} --> this in jsx means going back to the js Land
// value inside must be an expression
