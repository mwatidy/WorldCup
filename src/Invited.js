import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import classNames from "classnames";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Section from "./myComp/Section";
import Title from "./myComp/Title";

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
    marginTop: theme.spacing.unit
  }
});

function PaperSheet(props) {
  const { classes } = props;
  return (
    <div>
      <Section>
        <Title
          title="Welcome to WC APP"
          description="Your friend invited you to join his team for the world cup challenge. If S/he choose you then this means that S/he probably trusts in your football knowledge more than his other friends. You will be guided on how to take part of this international challenge after you login with your Facebook account."
        />
        <Paper className={classes.root} elevation={1}>
          <Grid container spacing={16}>
            <Grid item>
              <Avatar className={classNames(classes.avatar)}>A</Avatar>
            </Grid>
            <Grid item>
              <Typography variant="headline" component="h3">
                Mark Zuckerberg
              </Typography>
            </Grid>
          </Grid>
        </Paper>
        <Button fullWidth className={classes.button}>
          Login to join his team
        </Button>
      </Section>
    </div>
  );
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PaperSheet);
