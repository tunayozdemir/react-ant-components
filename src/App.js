import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Routes from './components/config/routes'
import Ast from './components/Layout'


function App() {

  const routeComponents = Routes.map(({ path, component }, index) => {
    return <Route exact path={path} key={index} component={component} />
  })
  console.log("routeComponents :", routeComponents)
  return (
    <Router basename="/">
      <Ast>
        {routeComponents}
      </Ast>

    </Router>
  )
}

export default App;
