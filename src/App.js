import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

/* 
header
-logo
-nav items
body
-Search
- reastaurentconatiner
  -reastaurentCard
footer 
-copyright
-link
-address
-conact us
*/

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
