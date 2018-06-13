import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import classNames from "classnames";
import Avatar from "@material-ui/core/Avatar";
import Section from "./myComp/Section";

import Title from "./myComp/Title";
import CookieCheck from "./myComp/Cookie";

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
    width: 60,
    height: 60
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
  }
});

class QuestionsPre extends React.Component {
  state = {
    hideIntro: 1
  };

  render() {
    const { classes, theme } = this.props;

    return (
      <div>
        <CookieCheck />
        <Section>
          <h1 className={classes.table}>Quiz Challenge</h1>
        </Section>
        <Section>
          <Grid container className={classes.center} justify="center" xs={12}>
            <Grid xs={5}>
              <Avatar
                alt="Adelle Charles"
                src="https://pbs.twimg.com/profile_images/724965716932218880/wTyXplXm_400x400.jpg"
                className={classNames(classes.avatar, classes.bigAvatar)}
              />
              <p>
                MAK ATTACK<br />
                <span className={classes.team}>TEAM FLA</span>
              </p>
            </Grid>
            <Grid xs={2}>
              <h2>VS</h2>
            </Grid>
            <Grid xs={5}>
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
        </Section>
        <Section>
          <h1 className={classes.table}>
            10<br />
            <span className={classes.seconds}>seconds to start</span>
          </h1>
          <p className={classes.table}>
            Answer the following questions as fast as you can to get more points
            for your team
          </p>
        </Section>
      </div>
    );
  }
}

QuestionsPre.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(QuestionsPre);
