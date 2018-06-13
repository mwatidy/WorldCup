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
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import Alarm from "@material-ui/icons/Alarm";
import Group from "@material-ui/icons/Group";
import Notifications from "@material-ui/icons/Notifications";
import Title from "./myComp/Title";
import Section from "./myComp/Section";
import CookieCheck from "./myComp/Cookie";
import { Link } from "react-router-dom";

const styles = theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 400
  },
  root2: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  avatar: {
    backgroundColor: "red"
  },
  introTitle: {
    padding: theme.spacing.unit + 10
  },
  button: {
    margin: theme.spacing.unit + 10,
    float: "right"
  },
  grid: {
    margin: theme.spacing.unit + 10
  },
  header: {
    display: "flex",
    alignItems: "center",
    height: 50,
    paddingLeft: theme.spacing.unit * 4,
    marginBottom: 20,
    backgroundColor: theme.palette.background.default
  },
  img: {
    height: 500,
    maxWidth: 400,
    overflow: "hidden",
    width: "100%"
  }
});

const tutorialSteps = [
  {
    label: "1. Start by selecting your team members.",
    imgPath: "img/steps1.png"
  },
  {
    label: "2. Wait for your team members to login",
    imgPath: "img/steps2.png"
  },
  {
    label: "3. Wait for your team members to login",
    imgPath: "img/steps2.png"
  },
  {
    label: "3. Start answering the questions",
    imgPath: "img/steps3.png"
  }
];

class Instructions extends React.Component {
  state = {
    hideIntro: 0,
    hideHow: 1,
    hideRules: 1,
    activeStep: 0
  };

  showSection = name => {
    this.setState({
      hideHow: 1,
      hideIntro: 1,
      hideRules: 1,
      showTips: 0
    });

    switch (name) {
      case "intro":
        this.setState({ hideIntro: 0 });
        break;
      case "how":
        this.setState({ hideHow: 0 });
        break;
      case "rules":
        this.setState({ hideRules: 0 });
        break;
    }
  };

  handleNext = () => {
    if (this.state.activeStep == tutorialSteps.length - 2)
      this.setState(prevState => ({ showTips: 1 }));

    this.setState(prevState => ({
      activeStep: prevState.activeStep + 1
    }));
  };

  handleBack = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep - 1
    }));
  };

  handleStepChange = activeStep => {
    this.setState({ activeStep });
  };

  render() {
    const { classes, theme } = this.props;
    const { activeStep } = this.state;
    const maxSteps = tutorialSteps.length;

    return (
      <div>
        <CookieCheck />
        <ul>
          <li onClick={() => this.showSection("intro")}>Introduction</li>
          <li onClick={() => this.showSection("how")}>How to play</li>
          <li onClick={() => this.showSection("rules")}>Rules</li>
        </ul>
        <hr />
        {!this.state.hideIntro && (
          <Section>
            <Title
              removeMargin
              title="Welcome to FC Challenge"
              description="You and every member of your team will have to answer ten questions about football. The faster you answer these questions correctly, the more points you get for yourself and your team. Your team will challenge other teams to get more points. There will be four rounds where each round takes one week to complete."
            />
            <Grid item>
              <Button
                onClick={() => this.showSection("how")}
                className={classes.button}
                color="primary"
              >
                {" "}
                how to play
              </Button>
            </Grid>
          </Section>
        )}
        {!this.state.hideHow && (
          <Section>
            <Title title="How to play" removeMargin />
            <div className={classes.root}>
              <Paper square elevation={0} className={classes.header}>
                <Typography paragraph>
                  {tutorialSteps[activeStep].label}
                </Typography>
              </Paper>
              <SwipeableViews
                axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                index={this.state.activeStep}
                onChangeIndex={this.handleStepChange}
                enableMouseEvents
              >
                {tutorialSteps.map(step => (
                  <img
                    key={step.label}
                    className={classes.img}
                    src={step.imgPath}
                    alt={step.label}
                  />
                ))}
              </SwipeableViews>
              <MobileStepper
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                className={classes.mobileStepper}
                nextButton={
                  <Button
                    size="small"
                    onClick={this.handleNext}
                    disabled={activeStep === maxSteps - 1}
                  >
                    Next
                    {theme.direction === "rtl" ? (
                      <KeyboardArrowLeft />
                    ) : (
                      <KeyboardArrowRight />
                    )}
                  </Button>
                }
                backButton={
                  <Button
                    size="small"
                    onClick={this.handleBack}
                    disabled={activeStep === 0}
                  >
                    {theme.direction === "rtl" ? (
                      <KeyboardArrowRight />
                    ) : (
                      <KeyboardArrowLeft />
                    )}
                    Back
                  </Button>
                }
              />
              {this.state.showTips ? (
                <Button onClick={() => this.showSection("rules")} fullWidth>
                  Show Rules
                </Button>
              ) : (
                ""
              )}
            </div>
          </Section>
        )}
        {!this.state.hideRules && (
          <Section>
            <Title title="Tips and Rules" removeMargin />
            <div className={classes.root2}>
              <List>
                <ListItem>
                  <Avatar>
                    <Alarm />
                  </Avatar>
                  <ListItemText
                    primary="Time matters"
                    secondary="Answer the questions as fast as you can to get more points."
                  />
                </ListItem>
                <ListItem>
                  <Avatar>
                    <Group />
                  </Avatar>
                  <ListItemText
                    primary="Choose the best"
                    secondary="Make sure your team mates are big fans of football"
                  />
                </ListItem>
                <ListItem>
                  <Avatar>
                    <Notifications />
                  </Avatar>
                  <ListItemText
                    primary="Notifications"
                    secondary="You will be notified on your messenger with the updates"
                  />
                </ListItem>
              </List>

              <Link to="/Team">
                <Button color="primary" className={classes.button}>
                  Create Team
                </Button>
              </Link>
            </div>
          </Section>
        )}
      </div>
    );
  }
}

Instructions.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Instructions);
