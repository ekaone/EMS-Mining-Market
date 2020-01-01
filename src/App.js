import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import { 
  Landing,
  SignIn,
  SignUp,
  ForgotPassword,
  Dashboard,
 } from './views'

function App() {
  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
        <Route exact path="/" component={Landing} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/forgotpassword" component={ForgotPassword} />
        <Route path="/dashboard" component={Dashboard} />
      </Router>
    </>
  );
}

export default App;
