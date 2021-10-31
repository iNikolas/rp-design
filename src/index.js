import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
const App = React.lazy(() => import("./App"));
import { store } from "./app/store";
import { Provider } from "react-redux";
import LanguageProvider from "./common/languageContext";
import { BrowserRouter } from "react-router-dom";
import Loader from "./common/Loaders/Loader";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <LanguageProvider>
          <React.Suspense fallback={<Loader />}>
            <App />
          </React.Suspense>
        </LanguageProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
