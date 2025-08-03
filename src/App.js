const Pizza = (props) => {
    return React.createElement(
        "div",
        {},
        [
            React.createElement("h2", {}, props.name),
            React.createElement("p", {}, props.description)
        ]
    )
}

// Define a functional component named 'App'
const App = () => {
    return React.createElement(
        "div",                  // The HTML element to create: a <div>
        {},                     // Props for the <div> (empty here)
        React.createElement(    // Child element: another React element
            "h1",               // The HTML element to create: <h1>
            {},                 // Props for the <h1> (none used)
            "Padre Gino's"      // Content/text inside <h1>
        ),
        React.createElement(Pizza, {
            name: "The Pepperoni Pizza",
            description: "Dope!!"
        }),
        React.createElement(Pizza, {
            name: "The Margheritta Pizza",
            description: "Kind of dope!!"
        }),
    )
}

// Get the HTML element with id="root" from the DOM
const container = document.getElementById("root")

// Create a root for React to render the app into (React 18+ syntax)
const root = ReactDOM.createRoot(container)

// Render the App component into the root container
root.render(React.createElement(App))