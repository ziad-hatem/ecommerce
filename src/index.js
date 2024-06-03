import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { FilterProvider } from "./context/filter_Context";
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <FilterProvider>
        <App />
      </FilterProvider>
    </Provider>
    <ToastContainer />
  </React.StrictMode>,
  document.getElementById("root")
);
