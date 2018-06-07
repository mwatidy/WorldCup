import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Icon from "@material-ui/core/Icon";
import Grid from "@material-ui/core/Grid";
import Section from "./myComp/Section";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    justify: "center",
    marginBottom: "100px;"
  },
  headline: {
    width: "100%",
    textAlign: "center"
  },
  leftIcon: {
    marginRight: theme.spacing.unit
  },
  root: {
    flexGrow: 1
  },
  main: {
    minHeight: "500px"
  }
});

class Login extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.container}>
        <Section>
          <h2 className={classes.headline}>World Cup Challenge</h2>
          <Grid
            container
            justify="center"
            alignItems="flex-end"
            className={classes.main}
          >
            <Button className={classes.button} color="primary">
              <AccountCircle className={classes.leftIcon} />
              Login with Facebook
            </Button>
          </Grid>
        </Section>
      </div>
    );
  }
}
Login.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Login);
