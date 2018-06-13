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

import { connect } from "react-redux";
import { createStore } from "redux";
import game from "./Reducers";
import { getLeader } from "./Actions";

import axios from "axios";
import { withCookies, Cookies } from "react-cookie";

const store = createStore(game);

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

class Invited extends React.Component {
  state = {
    redirect: false,
    name: "Getting Name...",
    avatar: "A"
  };

  constructor(props) {
    super(props);
    //getLeader(props.match.params.referrer);
    const { cookies } = this.props;
    this.myGetLeader(this.props.match.params.referrer);

    console.log(cookies.get("auth") || null);
  }

  myGetLeader = referrer => {
    axios
      .get("https://game-demo.vpnmonster.co/api/v1/referrals/" + referrer)
      .then(
        res => {
          res.status == 200
            ? this.props.getLeader(
                res.data.creator.name,
                res.data.creator.avatar
              )
            : console.log("error with connection");
          //        return store.dispatch(
          //         getLeader(res.data.creator.name, res.data.creator.avatar)
          //     );
        },
        err => {
          this.setState({ redirect: true });
          console.log("wrong reffer and redirecting back");
        }
      );
  };

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
        {this.state.redirect ? <GoTo to="/" /> : null}
        <Section>
          <Title
            title="Welcome to WC APP"
            description="Your friend invited you to join his team for the world cup challenge. If S/he choose you then this means that S/he probably trusts in your football knowledge more than his other friends. You will be guided on how to take part of this international challenge after you login with your Facebook account."
          />
          <Paper className={classes.root} elevation={1}>
            <Grid container spacing={16}>
              <Grid item>
                <Avatar
                  src={this.props.avatar}
                  className={classNames(classes.avatar)}
                />
              </Grid>
              <Grid item>
                <Typography variant="headline" component="h3">
                  {this.props.name}
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

Invited.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    // You can now say this.props.books
    name: state.referrerName,
    avatar: state.referrerAvatar
  };
};

// Maps actions to props
const mapDispatchToProps = dispatch => {
  return {
    // You can now say this.props.createBook
    getLeader: (referrerName, referrerAvatar) =>
      dispatch(getLeader(referrerName, referrerAvatar))
  };
};

//export default withStyles(styles)(
//  connect(mapStateToProps, mapDispatchToProps)(Invited)
//);

export default withCookies(
  connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Invited))
);
