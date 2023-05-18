// map function

const books = 
[
{
    author: 'Paulo Coelho',
    title: 'The Alchemist',
    img:'https://m.media-amazon.com/images/I/41e+TR4xPDL._SX328_BO1,204,203,200_.jpg',
    id:'1'
},

{
    author: ' Sudha Murty ',
    title: "Grandma's Bag of Stories",
    img:' https://m.media-amazon.com/images/I/61yB0UFlM3L._SY264_BO1,204,203,200_QL40_FMwebp_.jpg' ,
    id:'2'
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
    {books.map((book) =>{
        console.log(book);
        return <h1>{book.title}</h1>

    })}
</div>
}
export default Map