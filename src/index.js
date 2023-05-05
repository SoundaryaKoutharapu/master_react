import React from "react";
import  ReactDOM  from "react-dom/client";

import './index.css';

const BookList = () =>
{
    return <section className="booklist">
        <Book/>
        <Book/>
        <Book/>
    </section>
}

const Book = ()=> 
{
  return <article className="book"> 
    <Image/>
    <Title/>   
    <Author/>
  </article>
} 

const Author = () => <h2>Paulo Coelho</h2> ;

const Title = () => <h2>The Alchemist</h2>;

const Image = () => <img src="https://m.media-amazon.com/images/I/41e+TR4xPDL._SX328_BO1,204,203,200_.jpg" alt="Alchemist" />


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList/>);