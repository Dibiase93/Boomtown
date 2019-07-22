import React from "react";
import Grid from "@material-ui/core/Grid";
import ItemCard from "../ItemCard";

export default function ItemGrid({ items }) {
  return (
    <div>
      <Grid container justify="center" className="itemsPage" spacing={2}>
        {items.map(item => (
          <Grid key={item.id} item xs={4}>
            <ItemCard item={item} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
