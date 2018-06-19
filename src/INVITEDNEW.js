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
import GoTo from "./myComp/GoTo";
import api from "./api";

import { withCookies, Cookies } from "react-cookie";

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

class INVITEDNEW extends React.Component {
  constructor(props) {
    super(props);

    console.log("reading...");
    console.log("called");

    this.state = {
      redirect: false,
      name: "Getting Name...",
      avatar: "A"
    };

    //getLeader(props.match.params.referrer);
  }

  //componentDidMount() {
  /*    window.referrer = this.props.match.params.referrer
      ? this.props.match.params.referrer
      : this.setState({ redirect: true });

    console.log(window.referrer);

    let data = {
      token: window.auth,
      data: this.props.match.params.referrer
    };

    api("TEAM", data, res => {
      if (res == "err") {
        this.setState({ redirect: true });
      }
      console.log(res);
    });
    */
  // }

  //  componentMounted() {
  //console.log("component mounted");
  //this.myGetLeader(this.props.match.params.referrer);
  /*    props.match.params.referrer
    ? props.getLeader(props.match.params.referrer)
    : (this.state = { redirect: true }); &*/
  //  }
  //SAMPLE URL /Invited/80d5d
  render() {
    const { classes, cookies } = this.props;

    return (
      <div>
        {this.state.redirect ? <GoTo to="Team" /> : null}
        <Section>
          <Title
            title="Welcome to WC APP"
            description="Your friend invited you to join his team for the world cup challenge. If S/he choose you then this means that S/he probably trusts in your football knowledge more than his other friends. You will be guided on how to take part of this international challenge after you login with your Facebook account."
          />
          <Paper className={classes.root} elevation={1}>
            <Grid container spacing={16}>
              <Grid item>
                <Avatar
                  src={this.state.avatar}
                  className={classNames(classes.avatar)}
                />
              </Grid>
              <Grid item>
                <Typography variant="headline" component="h3">
                  {this.state.name}
                </Typography>
              </Grid>
            </Grid>
          </Paper>
          <Button fullWidth className={classes.button} onClick={() => {}}>
            Login to join his team
          </Button>
        </Section>
      </div>
    );
  }
}

INVITEDNEW.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withCookies(withStyles(styles)(INVITEDNEW));
