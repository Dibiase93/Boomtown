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
import Button from "@material-ui/core/ButtonGroup";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import IconButton from "@material-ui/core/IconButton";

const ITEM_HEIGHT = 48;

const MenuBar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <Mutation
      mutation={LOGOUT_MUTATION}
      onCompleted={() => client.resetStore()}
    >
      {logout => (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li>
              <Link to={"/welcome"} className="nav-link">
                <Logo />
              </Link>
            </li>
            <li>
              <Link to={"/items"} className="nav-link">
                Items
              </Link>
            </li>
            <li>
              <Link to={"/share"} className="nav-link">
                Share
              </Link>
            </li>
          </ul>
          <IconButton
            aria-label="more"
            aria-controls="long-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            <MoreVertIcon />
          </IconButton>
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
              <Link to={"/profile"} className="nav-link">
                Profile
              </Link>
            </MenuItem>
            <MenuItem onClick={logout}>Logout</MenuItem>
            ))}
          </Menu>
        </nav>
        //{" "}
      )}
    </Mutation>
  );
};

export default withStyles(styles)(MenuBar);
