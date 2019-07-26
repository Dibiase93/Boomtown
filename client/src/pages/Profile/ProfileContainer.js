import React, { Component } from "react";
import Profile from "./Profile";
import { ViewerContext } from "../../context/ViewerProvider";
import { ALL_USER_ITEMS_QUERY } from "../../apollo/queries";
import { Query } from "react-apollo";
// import FullScreenLoader from '../../components/FullScreenLoader';

class ProfileContainer extends Component {
  render() {
    return (
      <ViewerContext.Consumer>
        {({ viewer }) => (
          <Query query={ALL_USER_ITEMS_QUERY} variables={{ id: viewer.id }}>
            {({ loading, error, data }) => {
              if (loading) return "Loading...";
              if (error) return `Error! ${error.message}`;
              console.log(data);
              return <Profile user={data} />;
            }}
          </Query>
        )}
      </ViewerContext.Consumer>
    );
  }
}

export default ProfileContainer;
