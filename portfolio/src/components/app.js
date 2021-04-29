import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Badges from "../pages/Badges";
import BadgeEdit from "../pages/BadgeEdit";
import HomePage from "../pages/homePage";
import MostWanted from "../pages/mostWanted";
import Headersito from "../components/header";
import Contact from "../components/contact";
import Footer from "../components/footer";
import NotFound from "../pages/notFound";
import BurguerIcon from "./burguerIcon";
import BadgeDetailsContainer from "../pages/BadgeDetailsContainer";

function App() {
  return (
    <BrowserRouter>
      <BurguerIcon />
      <Headersito />
      <Switch>
        <Route exact path="/Badges" component={MostWanted} />
        <Route exact path="/Badges/new" component={Badges} />
        <Route exact path="/Badges/:badgeId/edit" component={BadgeEdit} />
        <Route
          exact
          path="/Badges/:badgeId/"
          component={BadgeDetailsContainer}
        />
        <Route exact path="/" component={HomePage} />
        <Route component={NotFound} />
      </Switch>
      <Contact />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
