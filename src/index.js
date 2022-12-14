import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {HashRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home";
import Details from "./pages/details/Details";
import {FavouriteProvider} from "./contexts/FavouriteContext/FavouriteContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<React.StrictMode>
  <HashRouter>
    <Routes>
      <Route path="/" element={<App/>}>
        <Route path="" element={<FavouriteProvider><Home/></FavouriteProvider>}/>
        <Route path="country/:countryCode" element={<Details/>}/>
      </Route>
    </Routes>
  </HashRouter>
</React.StrictMode>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
