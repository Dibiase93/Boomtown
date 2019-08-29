import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import ShareItemForm from "../../components/ShareItemForm";
import ShareItemPreview from "../../components/ShareItemPreview";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";

const Share = ({ classes, tags }) => {
  return (
    <div className={classes.SharePage}>
      <Grid
        className={classes.sharePreviewContainer}
        container
        justify="space-around"
      >
        <Grid item lg={4}>
          <ShareItemPreview className={classes.sharepreview} />
        </Grid>
        <Grid item lg={4}>
          <ShareItemForm tags={tags} />
        </Grid>
      </Grid>
    </div>
  );
};

Share.propTypes = {
  classes: PropTypes.object.isRequired,
  tags: PropTypes.array.isRequired
};
export default withStyles(styles)(Share);
