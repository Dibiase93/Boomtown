import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import ItemStyles from "./styles";
import CardHeader from "@material-ui/core/CardHeader";
import CardActionArea from "@material-ui/core/CardActionArea";
import { withStyles } from "@material-ui/core/styles";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Gravatar from "react-gravatar";
import styles from "./styles";

function ItemCard({ item, classes }) {
  const { id, title, imageurl, description, itemowner, created } = item;
  console.log(description);
  console.log(item);
  console.log(title);
  console.log(imageurl);

  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="200"
          image={imageurl}
          title="{title}"
        />

        <Gravatar
          email={itemowner.email}
          size={75}
          rating="pg"
          default="monsterid"
          className={classes.CustomAvatarImage}
        />

        <CardHeader title={title} />
        <CardContent>
          <Typography component="p">{description}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default withStyles(styles)(ItemCard);
