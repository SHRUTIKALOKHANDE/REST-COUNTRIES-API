import { Route, Switch, useLocation } from "react-router-dom";
import React, { useLayoutEffect } from "react";
import Home from "./components/Home"
import CountryDetails from "./components/CountryDetails";

export default function App(props) {
  const location = useLocation();
  // Scroll to top if path changes
  useLayoutEffect(() => {
    window && window.scrollTo(0, 0);
  }, [location.pathname,location.state]);
  //console.log(props,location.pathname,location.state);
  return (
      <div className="App">
        <Switch>
          <Route path="/country">
            <CountryDetails {...location.state} />
          </Route> 
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
  );
  
}