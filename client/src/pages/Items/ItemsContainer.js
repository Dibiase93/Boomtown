import React, { Component } from "react";
import Items from "./Items";
import { Query } from "react-apollo";
import { ALL_ITEMS_QUERY } from "../../apollo/queries";
import { ViewerContext } from "../../context/ViewerProvider";
import Loader from "../../components/FullScreenLoader";

class ItemsContainer extends Component {
  render() {
    return (
      <ViewerContext.Consumer>
        {({ viewer }) => (
          <Query query={ALL_ITEMS_QUERY} variables={{ filter: viewer.id }}>
            {({ loading, error, data }) => {
              if (loading) return <Loader />;
              if (error) return `Error! ${error.message}`;
              return <Items items={data.items} />;
            }}
          </Query>
        )}
      </ViewerContext.Consumer>
    );
  }
}

export default ItemsContainer;
