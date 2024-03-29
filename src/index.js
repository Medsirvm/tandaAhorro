import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import ValidationProvider from "./contexts/validationContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
let persistantStore = persistStore(store);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistantStore}>
        <ValidationProvider>
          <App />
        </ValidationProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
