import React from "react";
import "./App.css";
import { Route, Switch } from "react-router";
import ScrollToTop from "./components/ScrollToTop";
import SignIn from "./components/SignIn";
import ProjectPage from "./components/project/ProjectPage";
import AdminPage from "./components/admin/AdminPage";
import HomePage from "./components/home/HomePage";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <ScrollToTop />

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/project/:id" component={ProjectPage} />
        <Route path="/signin" component={SignIn} />
        <Route path="/admin" component={AdminPage} />
      </Switch>
    </div>
  );
}

export default App;
