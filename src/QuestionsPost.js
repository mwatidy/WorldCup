import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import classNames from "classnames";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Section from "./myComp/Section";
import Title from "./myComp/Title";

const styles = theme => ({
  img: {
    height: 500,
    maxWidth: 400,
    overflow: "hidden",
    width: "100%"
  },
  center: {
    textAlign: "center"
  },
  avatar: {
    margin: 10,
    marginLeft: "auto",
    marginRight: "auto"
  },
  bigAvatar: {
    width: 100,
    height: 100
  },
  table: {
    width: "100%",
    textAlign: "center"
  },
  team: {
    fontWeight: "bold",
    fontSize: "0.8em",
    color: "#999"
  },
  seconds: {
    fontWeight: "normal",
    fontSize: "0.5em",
    display: "block"
  },
  removeMargin: {
    marginTop: "-20px"
  },
  addMargin: {
    marginTop: "20px"
  }
});

class QuestionsPost extends React.Component {
  state = {
    hideIntro: 1
  };

  render() {
    const { classes, theme } = this.props;

    return (
      <Section>
        <Grid xs={12}>
          <h1 className={classes.table}>WINNER!</h1>
          <p className={classNames(classes.table, classes.removeMargin)}>
            Congratulations!
          </p>
        </Grid>
        <Grid
          container
          className={classNames(classes.center, classes.addMargin)}
          justify="center"
        >
          <Grid xs={12}>
            <Avatar
              alt="Adelle Charles"
              src="https://pbs.twimg.com/profile_images/724965716932218880/wTyXplXm_400x400.jpg"
              className={classNames(classes.avatar, classes.bigAvatar)}
            />
            <p>
              MAK ATTACK<br />
              <span className={classes.team}>TEAM XYZ</span>
            </p>
          </Grid>
        </Grid>
        <Grid
          item
          className={classNames(classes.center, classes.addMargin)}
          xs={12}
        >
          <h1>
            +200<br />
            <span className={classes.seconds}>points</span>
          </h1>
          <p>
            Your did better than<br />59% of players
          </p>
          <Button variant="contained" className={classes.addMargin}>
            Continue
          </Button>
        </Grid>
      </Section>
    );
  }
}

QuestionsPost.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(QuestionsPost);
