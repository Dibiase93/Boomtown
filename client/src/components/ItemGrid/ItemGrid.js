import React from "react";
import Grid from "@material-ui/core/Grid";
import ItemCard from "../ItemCard";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import { ViewerContext } from "../../context/ViewerProvider";
import PropTypes from "prop-types";

const ItemGrid = ({ items, classes }) => {
  return (
    <ViewerContext.Consumer>
      {({ viewer }) => (
        <div className={classes.GridContainer}>
          <Grid
            container
            direction="row"
            justify="flex-start"
            className={classes.ItemGrid}
            margin={0}
            spacing={3}
          >
            {items.map(item => (
              <Grid key={item.id} item lg={4}>
                <ItemCard item={item} />
              </Grid>
            ))}
          </Grid>
        </div>
      )}
    </ViewerContext.Consumer>
  );
};

ItemGrid.propTypes = {
  classes: PropTypes.object.isRequired,
  items: PropTypes.array.isRequired
};
export default withStyles(styles)(ItemGrid);
