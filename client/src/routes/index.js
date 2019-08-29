import React, { Fragment } from "react";
import { Redirect, Route, Switch } from "react-router";
import HomeContainer from "../pages/Home";
import ItemsContainer from "../pages/Items";
import ProfileContainer from "../pages/Profile";
import ShareContainer from "../pages/Share";
import { ViewerContext } from "../context/ViewerProvider";
import PRoute from "../components/PrivateRoute";
import Loader from "../components/FullScreenLoader";
import MenuBar from "../components/MenuBar";

export default () => (
  <ViewerContext.Consumer>
    {({ loading, viewer }) => {
      if (loading) return <Loader />;
      if (!viewer) {
        return (
          <Switch>
            <Route path="/welcome" component={HomeContainer} exact />
            <Redirect path="*" to="/welcome" />
          </Switch>
        );
      }
      return (
        <Fragment>
          <MenuBar />
          <Switch>
            <PRoute
              path="/items"
              name="items"
              component={ItemsContainer}
              exact
            />
            <PRoute
              path="/profile"
              name="profile"
              exact
              component={ProfileContainer}
            />
            <PRoute
              path="/profile/:userid"
              name="profile"
              component={ProfileContainer}
            />
            <PRoute path="/share" name="share" component={ShareContainer} />
            <Redirect path="*" to="/items" component={ItemsContainer} />
          </Switch>
        </Fragment>
      );
    }}
  </ViewerContext.Consumer>
);
