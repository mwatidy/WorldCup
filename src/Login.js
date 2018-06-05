import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Icon from "@material-ui/core/Icon";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    justify: "center"
  },
  leftIcon: {
    marginRight: theme.spacing.unit
  },
  root: {
    flexGrow: 1
  }
});

function IconLabelButtons(props) {
  const { classes } = props;
  return (
    <div className={classes.container}>
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <Grid container justify="center" direction="row" alignItems="center">
            <Button className={classes.button} variant="raised" color="primary">
              <AccountCircle className={classes.leftIcon} />
              Login with Facebook
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

IconLabelButtons.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(IconLabelButtons);
