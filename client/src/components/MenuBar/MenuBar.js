import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../images/boomtown.svg";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

const ITEM_HEIGHT = 48;

const MenuBar = () => {
  return (
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
        <li>
          <Link to={"/profile"} className="nav-link">
            Profile
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default withStyles(styles)(MenuBar);
