import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";


const author = "Francesc Miralles";
const title = "Intersting facts about Ikigai";
const img ="./images/ikigai.jpg" ; 




const BookList = () => {
  return (
    <section className="BookList">
      <Book job = 'developer' />
      <Book title= 'random title' number = {222}/>
    
    </section>
  );
};

const Book = (props) => {
    console.log(props);
  return (
    <article className="Book">
      <img src={img}
      alt={title} />
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
