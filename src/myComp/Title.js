import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  introTitle: {
    padding: theme.spacing.unit,
    paddingBottom: "0px"
  }
});

class Title extends React.Component {
  render() {
    const { classes, theme } = this.props;

    return (
      <div>
        <Grid item xs={12}>
          <Typography
            variant="headline"
            component="h3"
            className={classes.introTitle}
          >
            {this.props.title}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            className={classes.introTitle}
            variant="paragraph"
            component="p"
          >
            {this.props.description}
          </Typography>
        </Grid>
      </div>
    );
  }
}

Title.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Title);
