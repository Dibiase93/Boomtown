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
import Moment from "react-moment";
import { typography } from "@material-ui/system";

function ItemCard({ item, classes }) {
  const { title, imageurl, description, itemowner, created } = item;
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
        <div className={classes.UserContainer}>
          <Gravatar
            email={itemowner && itemowner.email}
            size={75}
            rating="pg"
            default="monsterid"
            className={classes.CustomAvatarImage}
          />
          <p>{itemowner && itemowner.fullname}</p>

          <Moment toNow={created} />
          {console.log(created)}
        </div>

        <CardHeader title={title} />
        <CardContent>
          <Typography component="p">{description}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default withStyles(styles)(ItemCard);
