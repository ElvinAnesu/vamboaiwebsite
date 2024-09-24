import React from "react";
import ReactDOM from "react-dom/client";
import { register } from "swiper/element/bundle";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/scss/fonts/ff-1.scss";
import "./assets/scss/fonts/ff-3.scss";
import "./assets/scss/fonts/bootstrap-icons.scss";
import "./assets/scss/style.scss";
import App from "./App";
register();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
