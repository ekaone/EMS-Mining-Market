import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { 
  Paperbase,
  Landing 
} from './components'

export default function Dashboard() {
  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/dashboard" component={Landing} />
          <Route exact path="/dashboard/mm" component={Paperbase} />
        </Switch>
      </Router>
    </>
  )
}
