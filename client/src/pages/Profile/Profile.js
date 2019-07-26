import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import ItemGrid from "../../components/ItemGrid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const Profile = ({ classes, user }) => {
  return (
    <Paper className={classes.root}>
      <ItemGrid>
        <Typography variant="h5" component="h3">
          This is a sheet of paper.
        </Typography>
        <Typography component="p">
          Paper can be used to build surface or other elements for your
          application.
        </Typography>
      </ItemGrid>
    </Paper>
  );
};

export default withStyles(styles)(Profile);
