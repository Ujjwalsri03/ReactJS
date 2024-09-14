const rootDiv = document.getElementById("root");

//   const h1 = document.createElement("h1");
//   h1.classList.add("h1-heading");
//   h1.innerText = "welcome";

//   div.appendChild(h1);

  const reactH1 = React.createElement(
    "h1",
    { className: "h1-heading" },
    "Welcome to reactJS"
  );
  // ReactDOM.render(reactH1, div); // this will raise a warning. because this method is not supported in react version 18. instead of this we use createRoot method.

  const div = React.createElement("div", null , "div from react");

  const root = ReactDOM.createRoot(rootDiv);
  root.render(reactH1);