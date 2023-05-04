import React from "react";
import  ReactDOM  from "react-dom/client";

/*
function Greeting()
{
    return <p>It's my first component </p>  
}
*/


/* --- creating element using react.create element(a,b,c) ---
function Greeting()
{
    return React.createElement('h2' , {}, 'Welcome');
}
*/


function Greeting()
{
    return (
    <div>
        <h3>It's is react learning</h3>
    </div>
    )    
}


/* -- div created using react.createElement() ---
function Greeting()
{
    return React.createElement(
        'div',
        {},
        React.createElement('h1',{}, 'welcome to learing of react')
    );
 };
*/


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Greeting></Greeting>);