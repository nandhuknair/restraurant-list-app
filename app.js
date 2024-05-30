import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1",{className:"heading"},"Let's get started 🥤")

const headingJSX = <h1>Let's get started from JSX</h1> 

const HeadingComponent =()=> (
    <div className="container">
        <h1>Let's get started from component</h1>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<HeadingComponent/>)
