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

const author = 'Paulo Coelho';

const Book = ()=> 
{
  /* return <article className="book"> 
    <Image/>
    <Title/>   
    <Author/>
  </article>
  */ 

 // JSX - JS

 const title = 'The Alchemist';

return <article className="book">
<img src="https://m.media-amazon.com/images/I/41e+TR4xPDL._SX328_BO1,204,203,200_.jpg" alt="Alchemist" />
<h1>{title}</h1>
<h4>{author}</h4>
<h3>{400+50}</h3>
  </article>
} 


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