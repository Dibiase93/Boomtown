import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import ItemGrid from "../../components/ItemGrid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Gravatar from "react-gravatar";

const Profile = ({ classes, user }) => {
  const { borrowed, email, fullname, items, bio } = user;
  return (
    <div className={classes.UserContainer}>
      <Paper className={classes.UserCard}>
        <div className={classes.UserNameContainer}>
          <Gravatar
            email={email}
            size={60}
            rating="pg"
            default="monsterid"
            className={classes.CustomAvatarImage}
          />
          <Typography className={classes.UserName} variant="h5" component="h3">
            {fullname}
          </Typography>
        </div>
        <Typography component="p" className={classes.itemCountFont}>
          <span className={classes.ItemCount}>{items.length}</span> Items shared
          and <span className={classes.ItemCount}>{borrowed.length}</span> Items
          borrowed
        </Typography>
        <Typography className={classes.UserBio} component="p">
          "{bio}"
        </Typography>
      </Paper>
      {items.length > 0 ? (
        <div className={classes.UserContent}>
          <Typography className={classes.sharedTitle}>Shared Items</Typography>
          <ItemGrid items={items} />
        </div>
      ) : (
        <div className={classes.noItemContainer}>
          <Typography className={classes.noItemCount}>
            {items.length} items to display
          </Typography>
        </div>
      )}
    </div>
  );
};

export default withStyles(styles)(Profile);
