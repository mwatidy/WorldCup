import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import MobileStepper from "@material-ui/core/MobileStepper";
import Paper from "@material-ui/core/Paper";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import List from "@material-ui/core/List";
import classNames from "classnames";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import Alarm from "@material-ui/icons/Alarm";
import Group from "@material-ui/icons/Group";
import Notifications from "@material-ui/icons/Notifications";
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
        <Section>
          <Title title="Quiz Challenge" />
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
                <span className={classes.team}>TEAM XYZ</span>
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
          <h1 className={classes.table}>50</h1>
          <p className={classes.table}>
            The faster you answer, the more points you get for your team
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
