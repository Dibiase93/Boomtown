import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import ShareItemForm from "../../components/ShareItemForm";
import ShareItemPreview from "../../components/ShareItemPreview";
import Grid from "@material-ui/core/Grid";

const Share = ({ classes, tags }) => {
  return (
    <div className={classes.SharePage}>
      <Grid container justify="space-around">
        <Grid item xl={6}>
          <ShareItemPreview className={classes.sharepreview} />
        </Grid>
        <Grid item xl={6}>
          <ShareItemForm
            tags={tags}
            classes={classes}
            className={classes.shareform}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default withStyles(styles)(Share);
