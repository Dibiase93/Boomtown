import React from "react";
import Grid from "@material-ui/core/Grid";
import ItemCard from "../ItemCard";
import { withStyles } from "@material-ui/core/styles";

export default function ItemGrid({ items, classes }) {
  return (
    <div>
      <Grid container justify="center" className="itemsPage" spacing={2}>
        {items.map(item => (
          <Grid
            key={item.id}
            justify="center"
            item
            xs={12}
            md={6}
            lg={4}
            spacing={2}
          >
            <ItemCard item={item} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
