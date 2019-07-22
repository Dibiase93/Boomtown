import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ItemCard from "../ItemCard";

export default function ItemGrid({ items }) {
  return (
    <Grid container className="itemsPage" spacing={2}>
      {items.map(item => (
        <Grid key={item.id} justify="center" item xs={4}>
          <ItemCard Item={item} />
          {/* <p>{item.title}</p> */}
        </Grid>
      ))}
    </Grid>
  );
}
