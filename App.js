import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
  'div',
  { className: "p-8 m-9 text-3xl font-bold underline" },
  'This is something'
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);
