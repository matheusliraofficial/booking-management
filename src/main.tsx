import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import { Toaster } from "@/ui/toaster";

import { store } from "./store";
import App from "./App";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Toaster />
      <App />
    </Provider>
  </React.StrictMode>
);
