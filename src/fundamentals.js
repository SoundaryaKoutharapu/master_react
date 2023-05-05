import React from "react";
import ReactDOM  from "react";

/*
function testing() {
  return (
    <div>testing</div>
  )
}
export default testing
*/


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

/*
function Greeting()
{
    return (
    <div>
        <h1><b> <i>It's time to learn react</i></b></h1>
    </div>
    )    
}
*/

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

/*
function Greeting()
{
    return <React.Fragment>
    <div className="cls">
        <h1><b> <i>It's time to learn react</i></b></h1>
        <p>React JSX Components</p>
    </div>
    <p>hello world</p>
    <ul>
        <li><a href="http://google.com">react class</a></li>
    </ul>
   <input type="text" name="n" id="i" />
    </React.Fragment> 
}
*/

 /* Nested Components
function Introduction()
{
    return(
        <div>
            <Person/>
            <Message/>           
        </div>
    )      
}

const Person = ()=>  <h1>Hello, I'm Soundarya</h1>;
const Message = ()=> {
    return <p>I'm learing react.js</p>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Introduction/>);
*/