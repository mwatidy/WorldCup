import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import classNames from "classnames";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3
  }),
  bigAvatar: {
    width: 60,
    height: 60
  },
  button: {
    margin: theme.spacing.unit + 10
  }
});

function PaperSheet(props) {
  const { classes } = props;
  return (
    <div>
      <Typography variant="headline" component="h1">
        Welcome to the WC APP
      </Typography>
      <Paper className={classes.root} elevation={4}>
        <Grid container wrap="nowrap" spacing={16}>
          <Grid item>
            <Avatar className={classNames(classes.avatar, classes.bigAvatar)}>
              A
            </Avatar>
          </Grid>
          <Grid item xs zeroMinWidth>
            <Typography variant="headline" component="h3">
              Mak invited you to join BOMBASTIC
            </Typography>
            <Typography component="p">
              You will be asked to answer a series of questions and will
            </Typography>
          </Grid>
        </Grid>
      </Paper>
      <Button className={classes.button}>Login to Start</Button>
    </div>
  );
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PaperSheet);
