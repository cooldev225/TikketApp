import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import routes, { renderRoutes } from "./routers";
import { dom } from "@fortawesome/fontawesome-svg-core";
import "./App.scss";
dom.watch();
const App = () => {
  return <Router>{renderRoutes(routes)}</Router>;
};

export default App;
