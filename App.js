// const heading = React.createElement("h1", {}, "Hello world form react");

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Hi, I am H1 element"),
    React.createElement("h2", {}, "Hi, I am H2 element"),
  ])
);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
