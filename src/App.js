import React from "react";
import "./App.css";
import { Route, Switch } from "react-router";
import ScrollToTop from "./components/ScrollToTop";
import SignIn from "./components/SignIn";
import ProjectPage from "./components/project/ProjectPage";
import AdminPage from "./components/AdminPage";
import HomePage from "./components/home/HomePage";
import ContactPage from "./components/ContactPage";
import PutModal from "./components/home/PutModal";
import AddProject from "./components/home/AddProject";

function App() {
  return (
    <div className="App">
      <ScrollToTop />

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/projects/:id" component={ProjectPage} />
        <Route path="/signin" component={SignIn} />
        <Route path="/admin" component={AdminPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/putproject/:id" component={PutModal} />
        <Route path="/addproject" component={AddProject} />
      </Switch>
    </div>
  );
}

export default App;
