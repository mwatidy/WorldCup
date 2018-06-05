import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 400
  },
  grid: {
    margin: theme.spacing.unit + 10
  }
});

class Section extends React.Component {
  render() {
    const { classes, theme } = this.props;

    return (
      <div className={classes.root}>
        <Grid container xs={12}>
          <Grid container className={classes.grid}>
            {this.props.children}
          </Grid>
        </Grid>
      </div>
    );
  }
}

Section.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Section);
