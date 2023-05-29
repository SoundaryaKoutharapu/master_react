// map function
import { Book } from '.'

import img1 from './images/book_1.jpg'
import img2 from './images/book_2.jpg'
import img3 from './images/book_3.jpg'


const books = 
[
{
    author: 'Sudha Murty ',
    title: "Grandma's Bag of Stories",
    img: img1,
    id:'1'
},

{
    author: ' ',
    title: "",
    img:img2 ,
    id:'2'
},

{
    author: ' George Orwell',
    title: "1984",
    img:img3 ,
    id:'3'
}

]

//const names = ['john','hima', 'susan'];

/*  const newNames = names.map((name) => 
{
   return <h1>{name}</h1>
}); */


 const Map = () => {
// return <div>{newNames}</div>
return <div>
    {books.map((book, index) => {
       // console.log(book);
        // return <h1>{book.title}</h1>
       return <Book {...book} key={book.id} number={index} />
    })}
</div>
}

export default Map
