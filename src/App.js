import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Routes from './Route';


function App() {

  const routeComponents = Routes.map(({ path, component }, index) => {
    return <Route exact path={path} key={index} component={component} />
  })
  return (
    // /dbs-portal/build
    <Router basename="/">
      {routeComponents}
    </Router>
  )
}

export default App;
