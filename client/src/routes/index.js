import React, { Fragment } from "react";
import { Redirect, Route, Switch } from "react-router";

export default () => (
  <Fragment>
    <Rounter>
      {/* @TODO: Add your menu component here */}
      <NavLinks />
      <Switch>
        {/**
         * @TODO: Define routes here for: /items, /profile, /profile/:userid, and /share
         *
         * Provide a wildcard redirect to /items for any undefined route using <Redirect />.
         *
         * Later, we'll add logic to send users to one set of routes if they're logged in,
         * or only view the /welcome page if they are not.
         */}
        <Route path="/items" />
        <Redirect path="undefined" to="items" />
        <Route path="/profile" exact />
        <Route path="/profile/:userid" />
        <Route path="/share" />
      </Switch>
    </Rounter>
  </Fragment>
);
