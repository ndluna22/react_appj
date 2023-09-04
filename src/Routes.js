import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Homepage from "../homepage/Homepage";
import CompanyList from "../companies/CompanyList";
import JobList from "../jobs/JobList";
import CompanyDetail from "../company/CompanyDetail";
import LoginForm from "../user/LoginForm";
import ProfileForm from "../user/ProfileForm";
import SignupForm from "../user/SignupForm";

function Routes({ login, signup }) {
  console.debug(
    "Routes",
    `login=${typeof login}`,
    `register=${typeof register}`
  );

  return (
    <Switch>
      <Route exact path="/">
        <Homepage />
      </Route>

      <Route exact path="/login">
        <LoginForm login={login} />
      </Route>

      <Route exact path="/signup">
        <SignupForm signup={signup} />
      </Route>

      <Route exact path="/companies">
        <CompanyList />
      </Route>

      <Route exact path="/jobs">
        <JobList />
      </Route>

      <Route exact path="/companies/:handle">
        <CompanyDetail />
      </Route>

      <Route path="/profile">
        <ProfileForm />
      </Route>

      <Redirect to="/" />
    </Switch>
  );
}

export default Routes;
