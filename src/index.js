import React from "react";
import  ReactDOM  from "react-dom/client";
import './index.css';
import Map from "./map";


// Objects creation 
const firstBook = {
  author: 'Paulo Coelho',
  title: 'The Alchemist',
  img:'https://m.media-amazon.com/images/I/41e+TR4xPDL._SX328_BO1,204,203,200_.jpg'
};

const secondBook = {
  author: ' Sudha Murty ',
  title: "Grandma's Bag of Stories",
  img:' https://m.media-amazon.com/images/I/61yB0UFlM3L._SY264_BO1,204,203,200_QL40_FMwebp_.jpg' 
};



/* 
const author = 'Paulo Coelho';
const title = 'The Alchemist';
const img = 'https://m.media-amazon.com/images/I/41e+TR4xPDL._SX328_BO1,204,203,200_.jpg'; 
*/

const BookList = () =>
{
    return <section className="booklist">
       
        {/* <Book job = 'developer'/> 
        <Book title = 'random title' number = {123}/>  */}
        <Book author={firstBook.author} img={firstBook.img} title={firstBook.title}> 
        {/* Children Prop */}
        <p> #trending </p>
        </Book>
        <Book author={secondBook.author} img={secondBook.img} title={secondBook.title}/>
        {/* <Book author={author} img={img} title={title} /> */} 
        <Map/>
    </section>
}


const Book = (props) => 
{
  const {img, author, title, children} = props;
  console.log(props);
  /* return <article className="book"> 
    <Image/>
    <Title/>   
    <Author/>
  </article>
  */ 

 // JSX - JS
return <article className="book">
<img src= {img} alt={title}/>
<h1>{title}</h1>
<h4>{author}</h4>
{children}
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
