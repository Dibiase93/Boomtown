import React from "react";
import styles from "./styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const Loader = ({ classes }) => {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    function tick() {
      setProgress(oldProgress => (oldProgress >= 100 ? 0 : oldProgress + 1));
    }

    const timer = setInterval(tick, 20);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className={classes.loaderContainer}>
      <div>
        <CircularProgress
          className={classes.progress}
          variant="determinate"
          value={progress}
        />
      </div>
      <div>
        <p className={classes.loaderText}>"For it is giving we receive"</p>
      </div>
    </div>
  );
};

Loader.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Loader);
