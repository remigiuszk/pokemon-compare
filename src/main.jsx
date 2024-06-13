import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import configure from "./redux/configureStore.js";
import { Provider as ReduxProvider } from "react-redux";

const store = configure();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <App />
    </ReduxProvider>
  </React.StrictMode>
);
