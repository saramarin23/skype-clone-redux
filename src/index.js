import React from 'react'
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
// import registerServiceWorker from "./serviceWorker";
import store from "./store";

const render = () => {
  fancyLog();
  // eslint-disable-next-line react/react-in-jsx-scope
  return ReactDOM.render(<App />, document.getElementById("root"));
};

render();
store.subscribe(render);
// registerServiceWorker();

function fancyLog() {
  console.log("%c Rendered with ? ??", "background: purple; color: #fff");
  console.log(store.getState());
}