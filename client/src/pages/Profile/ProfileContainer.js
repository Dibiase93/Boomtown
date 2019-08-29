import React, { Component } from "react";
import Profile from "./Profile";
import { ViewerContext } from "../../context/ViewerProvider";
import { ALL_USER_ITEMS_QUERY } from "../../apollo/queries";
import { Query } from "react-apollo";
import Loader from "../../components/FullScreenLoader";

class ProfileContainer extends Component {
  render() {
    return (
      <ViewerContext.Consumer>
        {({ viewer }) => (
          <Query
            query={ALL_USER_ITEMS_QUERY}
            variables={{ id: this.props.match.params.userid || viewer.id }}
          >
            {({ loading, error, data }) => {
              if (loading) return <Loader />;
              if (error) return `Error! ${error.message}`;
              return <Profile user={data.user} />;
            }}
          </Query>
        )}
      </ViewerContext.Consumer>
    );
  }
}

export default ProfileContainer;
