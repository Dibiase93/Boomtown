import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import { ViewerContext } from "../../context/ViewerProvider";
import UserCard from "../../components/UserCard";

const Profile = ({ classes }) => {
  return (
    <ViewerContext.Consumer>
      {({ viewer }) => (
        <div>
          <p>
            {console.log(viewer)}
            <UserCard />; This is the profile page located at{" "}
            <code>/profile/:userId</code>.
          </p>
        </div>
      )}
    </ViewerContext.Consumer>
  );
};

export default withStyles(styles)(Profile);
