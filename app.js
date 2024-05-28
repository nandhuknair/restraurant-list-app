const parent = React.createElement("div",{id:'parent'},
    React.createElement("div",{id:'child'},
       [React.createElement("h1",{},"I'm h1 tag"),
        React.createElement("h2",{},"i'm h2 tag")
       ]
    )
);

const heading = React.createElement("h1",
{id : "heading" , className: "heading"},
"Hello World From React!");

console.log(heading)
console.log(parent)

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(parent);
