import React, { Fragment } from "react";
import "./App.css";
import Header from "./partials/header";
import Search from "./partials/search";

import "bootstrap/dist/css/bootstrap.min.css";
import "../src/assets/css/weather-icons.css";
import "../src/assets/font-awesome/css/font-awesome.css";
import "../src/assets/css/test.css";

function App() {
  return (
    <Fragment>
      <Header />
      <div className="container">
        <Search />
       
      </div>
    </Fragment>
  );
}

export default App;
