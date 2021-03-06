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
import CookieCheck from "./myComp/Cookie";

const styles = theme => ({
  center: {
    textAlign: "center"
  },
  avatar: {
    margin: 10,
    marginLeft: "auto",
    marginRight: "auto"
  },
  bigAvatar: {
    width: 40,
    height: 40
  },
  table: {
    width: "100%",
    textAlign: "center",
    marginTop: "-10px"
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

class Questions extends React.Component {
  state = {
    hideIntro: 1
  };

  render() {
    const { classes, theme } = this.props;

    return (
      <div>
        <CookieCheck />
        <Section>
          <Grid container className={classes.center} justify="center" xs={12}>
            <Grid xs={4}>
              <Avatar
                alt="Adelle Charles"
                src="https://pbs.twimg.com/profile_images/724965716932218880/wTyXplXm_400x400.jpg"
                className={classNames(classes.avatar, classes.bigAvatar)}
              />
              <p>
                MAK ATTACK<br />
                <span className={classes.team}>TEAM XYZ</span>
                <br />
                <br />
                <span>points: 30</span>
              </p>
            </Grid>
            <Grid xs={4}>
              <br />
              <br />
              <h2>
                30<br />
                <span className={classes.seconds}>seconds</span>
              </h2>
            </Grid>
            <Grid xs={4}>
              <Avatar
                alt="Adelle Charles"
                src="https://pbs.twimg.com/profile_images/724965716932218880/wTyXplXm_400x400.jpg"
                className={classNames(classes.avatar, classes.bigAvatar)}
              />
              <p>
                MAK ATTACK<br />
                <span className={classes.team}>TEAM XYZ</span>
                <br />
                <br />
                <span>points: 50</span>
              </p>
            </Grid>
          </Grid>
        </Section>
        <Section className={classes.backGreen}>
          <h3 className={classes.table}>
            Who won in the last World Cup when the final match was with Spain vs
            Ireland?
          </h3>
          <Button fullWidth>Brazil</Button>
          <Button fullWidth>Argentina</Button>
          <Button fullWidth>France</Button>
          <Button fullWidth>Austalia</Button>
        </Section>
      </div>
    );
  }
}

Questions.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Questions);
