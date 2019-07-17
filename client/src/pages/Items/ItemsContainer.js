import React, { Component } from "react";
import Items from "./Items";
// import FullScreenLoader from "../../components/FullScreenLoader";
import { Query } from "react-apollo";
import gql from "graphql-tag";
// import { } from '../../apollo/queries';

const GET_TAGS = gql`
  {
    tags {
      title
    }
  }
`;

// const GET_ITEMS = (ItemFields.fragment = {
//   entry: gql`
//     fragment ItemFields on Entry {
//       items
//     }
//   `
// });

class ItemsContainer extends Component {
  render() {
    return (
      <Query query={GET_TAGS}>
        {({ loading, error, data }) => {
          if (loading) return "Loading...";
          if (error) return `Error! ${error.message}`;
          console.log(data);
          return <Items tags={data.tags} />;
        }}
      </Query>
    );
  }
}

export default ItemsContainer;
