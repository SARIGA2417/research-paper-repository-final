import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import App from "./App";
import "./index.css";
import "./styles/animations.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>

    <App />

    <ToastContainer
      position="top-right"
      autoClose={2500}
      theme="colored"
    />

  </BrowserRouter>
);