import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import {
  CabinetPage,
  ContactPage,
  Floral,
  Fresh,
  HomePage,
  Oriental,
  PlantsPage,
  Woody,
} from "./pages";
import Lost from "./components/Lost";
import StoreContent from "./store";
import PlantDisplay1 from "./pages/PlantsPage/PlantDisplay1";
import PlantDisplay2 from "./pages/PlantsPage/PlantDisplay2";
import PlantDisplay3 from "./pages/PlantsPage/PlantDisplay3";
function App() {
  return (
    <>
      <Switch>
        <Route path="/fresh" exact component={Fresh} />
        <Route path="/floral" exact component={Floral} />
        <Route path="/oriental" exact component={Oriental} />
        <Route path="/woody" exact component={Woody} />
        <Route path="/" exact component={HomePage} />
        <Route path="/store" component={StoreContent} />
        <Route path="/plants" exact component={PlantsPage} />
        <Route path="/plantdisplay1" exact component={PlantDisplay1} />
        <Route path="/plantdisplay2" exact component={PlantDisplay2} />
        <Route path="/plantdisplay3" exact component={PlantDisplay3} />
        <Route path="/cabinet" exact component={CabinetPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="*" render={() => <Lost />} />
      </Switch>
    </>
  );
}

export default App;
