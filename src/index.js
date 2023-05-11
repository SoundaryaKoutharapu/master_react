import React from "react";
import  ReactDOM  from "react-dom/client";

import './index.css';


// Objects creation 

const firstBook = {
  author: 'Paulo Coelho',
  title: 'The Alchemist',
  img:'https://m.media-amazon.com/images/I/41e+TR4xPDL._SX328_BO1,204,203,200_.jpg'
};

const secondBook = {
  author: ' Robin Sharma',
  title: 'The Monk Who Sold His Ferrari',
  img:' https://m.media-amazon.com/images/I/410BqHSamiL._SX322_BO1,204,203,200_.jpg' 
};


/* const author = 'Paulo Coelho';
const title = 'The Alchemist';
const img = 'https://m.media-amazon.com/images/I/41e+TR4xPDL._SX328_BO1,204,203,200_.jpg'; */

const BookList = () =>
{
    return <section className="booklist">
        {/* <Book job = 'developer'/> 
        <Book title = 'random title' number = {123}/>  */}
        <Book author={firstBook.author} img={firstBook.img} title={firstBook.title}/>
        <Book author={secondBook.author} img={secondBook.img} title={secondBook.title}/>
        {/* <Book author={author} img={img} title={title} /> */}
    </section>
}


const Book = (props) => 
{
  console.log(props);
  /* return <article className="book"> 
    <Image/>
    <Title/>   
    <Author/>
  </article>
  */ 

 // JSX - JS
 
return <article className="book">
<img src= {props.img} alt={props.title}/>
<h1>{props.title}</h1>
<h4>{props.author}</h4>
{/* <p>{props.job}</p> 
<p>{props.number}</p>
<p>{props.title}</p>  */}
 </article>
} ;


/* 

const Author = () => <h2 style={{color: '#217b00', fontSize:'1rem' }}>Paulo Coelho</h2>;

const Author = () => {
  // JSX - CSS
    const inlineHeadingStyle = {
    color: '#617d89',
    fontSize: '1rem'
}
return <h4 style={inlineHeadingStyle}>Paulo Coelho</h4>
};

const Title = () =>  <h1>The Alchemist</h1>;
                     
const Image = () => <img src="https://m.media-amazon.com/images/I/41e+TR4xPDL._SX328_BO1,204,203,200_.jpg" alt="Alchemist" />

*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList/>);