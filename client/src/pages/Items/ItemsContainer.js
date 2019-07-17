import React, { Component } from "react";
import Items from "./Items";
// import FullScreenLoader from "../../components/FullScreenLoader";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { ALL_ITEMS_QUERY } from "../../apollo/queries";

const GET_TAGS = gql`
  {
    tags {
      title
    }
  }
`;

class ItemsContainer extends Component {
  render() {
    return (
      <div>
        <Query query={ALL_ITEMS_QUERY} variables={{ filter: 1 }}>
          {({ loading, error, data }) => {
            if (loading) return "Loading...";
            if (error) return `Error! ${error.message}`;
            return <Items items={data.items.title} />;
          }}
        </Query>
        <Query query={GET_TAGS}>
          {({ loading, error, data }) => {
            if (loading) return "Loading...";
            if (error) return `Error! ${error.message}`;
            return <Items tags={data.tags} />;
          }}
        </Query>
      </div>
    );
  }
}

export default ItemsContainer;
