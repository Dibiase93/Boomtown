import React from "react";
import Grid from "@material-ui/core/Grid";
import ItemCard from "../ItemCard";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import { ViewerContext } from "../../context/ViewerProvider";

const ItemGrid = ({ items, classes }) => {
  return (
    <ViewerContext.Consumer>
      {({ viewer }) => (
        <div className={classes.GridContainer}>
          <Grid
            container
            direction="row"
            justify="center"
            className={classes.ItemGrid}
            margin={0}
            spacing={3}
          >
            {items.map(item => (
              <Grid
                key={item.id}
                justify="center"
                item
                xs={12}
                sm={12}
                md={6}
                lg={4}
                spacing={2}
              >
                <ItemCard item={item} />
              </Grid>
            ))}
          </Grid>
        </div>
      )}
    </ViewerContext.Consumer>
  );
};

export default withStyles(styles)(ItemGrid);
