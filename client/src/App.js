import React from "react";
import {
  Switch,
  Route
} from "react-router-dom";

import NavbarHome from './Components/NavbarHome'
import NavbarForm from './Components/NavbarForm'
import Home from "./Pages/Home.jsx";
import DetailMovie from "./Pages/DetailMovie";
import FormCreate from "./Pages/FormCreate";
import FormUpdate from "./Pages/FormUpdate";

function App() {
  return (
    <>
      <Switch>
        <Route path="/movies/:id">
          <NavbarForm></NavbarForm>
          <DetailMovie></DetailMovie>
        </Route>
        <Route path="/form-create">
          <NavbarForm></NavbarForm>
          <FormCreate></FormCreate>
        </Route>
        <Route path="/form-update/:id">
          <NavbarForm></NavbarForm>
          <FormUpdate></FormUpdate>
        </Route>
        <Route path="/">
          <NavbarHome></NavbarHome>
          <Home></Home>
        </Route>
      </Switch>
    </>
  );
}

export default App;
