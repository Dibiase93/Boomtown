import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardActionArea from "@material-ui/core/CardActionArea";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Gravatar from "react-gravatar";
import styles from "./styles";
import Moment from "react-moment";
import { ViewerContext } from "../../context/ViewerProvider";
import { Link } from "react-router-dom";

function ItemCard({ item, classes }) {
  const { title, imageurl, description, itemowner, created, tags } = item;
  console.log(itemowner);
  return (
    <ViewerContext.Consumer>
      {({ viewer }) => (
        <Card width={1}>
          <Link to={`/profile/${item.itemowner.id}`}>
            <CardMedia
              component="img"
              alt={title}
              height="300"
              image={imageurl}
              title="{title}"
            />
            <div className={classes.UserContainer}>
              <Gravatar
                email={(itemowner && itemowner.email) || viewer.email}
                size={60}
                rating="pg"
                default="monsterid"
                className={classes.CustomAvatarImage}
              />
              <div className={classes.UserInfo}>
                <p className={classes.UserName}>
                  {(itemowner && itemowner.fullname) || viewer.fullname}
                </p>

                <Moment className={classes.TimePosted} toNow={created} />
              </div>
            </div>
          </Link>
          <CardContent className={classes.CardContent}>
            <CardHeader className={classes.CardTitle} title={title} />

            {item.tags.map(tags => {
              return (
                <span key={tags.id} className={classes.Tags}>
                  {tags.title}
                </span>
              );
            })}
            <Typography className={classes.Description} component="p">
              {description}
            </Typography>
            <Button variant="outlined" size="medium">
              Borrow
            </Button>
          </CardContent>
        </Card>
      )}
    </ViewerContext.Consumer>
  );
}

export default withStyles(styles)(ItemCard);
