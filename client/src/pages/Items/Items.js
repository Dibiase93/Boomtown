import React from "react";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import ItemGrid from "../../components/ItemGrid";

const Items = ({ classes, items }) => {
  return (
    <div className="grid-container">
      <ItemGrid items={items} />
    </div>
  );
};

export default Items;
