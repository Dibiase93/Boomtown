import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../images/boomtown.svg";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import { LOGOUT_MUTATION } from "../../apollo/queries";
import { Mutation } from "react-apollo";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import client from "../../apollo";
import IconButton from "@material-ui/core/IconButton";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import FingerprintIcon from "@material-ui/icons/Fingerprint";
import PowerSettingsNew from "@material-ui/icons/PowerSettingsNew";
import { Typography } from "@material-ui/core";
import { ViewerContext } from "../../context/ViewerProvider";

const ITEM_HEIGHT = 48;

const MenuBar = ({ classes }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <div className={classes.headerContainer}>
      <Mutation
        mutation={LOGOUT_MUTATION}
        onCompleted={() => client.resetStore()}
      >
        {logout => (
          <nav className={classes.NavBar}>
            <Link to={"/items"} className="nav-link">
              <Logo height="50" className={classes.LogoLink} />
            </Link>

            <ul className={classes.NavBarList}>
              <li>
                <Link to={"/share"} className="nav-link">
                  <Fab
                    size="large"
                    variant="extended"
                    aria-label="delete"
                    className={classes.fab}
                  >
                    <AddIcon className={classes.AddIcon} />
                    Share Something
                  </Fab>
                </Link>
              </li>
              <li>
                <IconButton
                  aria-label="more"
                  aria-controls="long-menu"
                  aria-haspopup="true"
                  onClick={handleClick}
                >
                  <MoreVertIcon />
                </IconButton>
              </li>
            </ul>

            <ViewerContext.Consumer>
              {({ viewer }) => (
                <Menu
                  id="long-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={open}
                  onClose={handleClose}
                  PaperProps={{
                    style: {
                      maxHeight: ITEM_HEIGHT * 4.5,
                      width: 200
                    }
                  }}
                >
                  <MenuItem onClick={handleClose}>
                    <Link
                      to={`/profile/${viewer.id}`}
                      style={{ linkStyle: "none" }}
                    >
                      <FingerprintIcon className={classes.headerIcon} />
                      Profile
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={logout}>
                    <PowerSettingsNew className={classes.headerIcon} />
                    <Typography>Logout</Typography>
                  </MenuItem>
                  ))}
                </Menu>
              )}
            </ViewerContext.Consumer>
          </nav>
        )}
      </Mutation>
    </div>
  );
};

export default withStyles(styles)(MenuBar);
