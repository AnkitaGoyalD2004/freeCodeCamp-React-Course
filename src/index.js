import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const BookList = () => {
  return (
    <section className="BookList">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
};
const Book = () => {
  return (
    <article className="Book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    // This image is hosted on another server
    src="./images/ikigai.jpg"
    alt="Ikigai "
  />
);
const Title = () => <h2>Book Title</h2>;
const Author = () => {
  const inlineHeadingStyles = {
    color: "#617d98",
    fontSize: "0.75 rem",
    marginTop: "0.5rem",
  };
  return <h4 style={inlineHeadingStyles}>Francesc Miralles</h4>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
