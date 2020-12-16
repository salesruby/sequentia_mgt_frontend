import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.scss";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import ForgotPassword from "./components/auth/ForgotPassword";
import ResetPassword from "./components/auth/ResetPassword";
import Appointments from "./components/pages/Appointments";
import RequestDemo from "./components/pages/RequestDemo";
import BugReport from "./components/pages/BugReport";

function App() {
  return (
    <div className="App">
      <Router>
        {/* Auth Routes */}
        <Route path="/signin" component={Login} />
        <Route path="/signup" component={Register} />
        <Route path="/forgotpassword" component={ForgotPassword} />
        <Route path="/resetpassword" component={ResetPassword} />

        {/* Pages Routes */}
        <Route path="/appointments" component={Appointments} />
        <Route path="/request-demo" component={RequestDemo} />
        <Route path="/bugs" component={BugReport} />
      </Router>
    </div>
  );
}

export default App;
