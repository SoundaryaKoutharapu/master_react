import React from "react";
import  ReactDOM  from "react-dom/client";

function Greeting()
{
    return <p>It's my first component </p>
    
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Greeting></Greeting>);