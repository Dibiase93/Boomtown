import React, { Component } from "react";
import Share from "./Share";
import { Query } from "react-apollo";
import { ALL_TAGS_QUERY } from "../../apollo/queries";
import Loader from "../../components/FullScreenLoader";

class ShareContainer extends Component {
  render() {
    return (
      <Query query={ALL_TAGS_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <Loader />;
          if (error) return `Error! ${error.message}`;
          return <Share tags={data.tags} />;
        }}
      </Query>
    );
  }
}

export default ShareContainer;
