import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Routes from './components/config/routes'
import Layouts from './components/Antd/Layout'

function App() {

  const routeComponents = Routes.map(({ path, component }, index) => {
    return <Route exact path={path} key={index} component={component} />
  })
  console.log("routeComponents :", routeComponents)
  return (
    <Router basename="/">
      <Layouts>
        {routeComponents}
      </Layouts>
    </Router>
  )
}
export default App;
