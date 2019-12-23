import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import { 
  Landing,
  SignIn,
  SignUp,
  ForgotPassword
 } from './views'

function App() {
  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
        <Route exact path="/" component={Landing} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/forgotpassword" component={ForgotPassword} />
      </Router>
    </>
  );
}

export default App;
