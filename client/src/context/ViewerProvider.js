import { Query } from "react-apollo";
import React from "react";
import { VIEWER_QUERY } from "../apollo/queries";

export const ViewerContext = React.createContext();

export const ViewerProvider = ({ children }) => {
  return (
    <Query query={VIEWER_QUERY}>
      {({ data, loading, error }) => {
        const viewer = data && data.viewer ? data.viewer : null;
        if (loading) return "Loading...";
        if (error) return `Error! ${error.message}`;
        return (
          <ViewerContext.Provider value={{ viewer, loading }}>
            {children}
          </ViewerContext.Provider>
        );
      }}
    </Query>
  );
};
