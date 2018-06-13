import React from "react";
import { PropTypes, instanceOf } from "prop-types";
import classNames from "classnames";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Icon from "@material-ui/core/Icon";
import Grid from "@material-ui/core/Grid";
import Section from "./myComp/Section";
import GoTo from "./myComp/GoTo";

import axios from "axios";

import { createStore } from "redux";
import game from "./Reducers";
import { getLeader, logIn } from "./Actions";

import { withCookies, Cookies } from "react-cookie";

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
  constructor(props) {
    super(props);
    const { cookies } = this.props;

    console.log(cookies.get("auth"));
    //cookies.remove("auth");

    this.state = {
      logged: false,
      message: "checking your status..",
      redirect: false
    };
    this.initializeCheckStatus();
  }

  getInfo = () => {
    const { cookies } = this.props;
    FB.api("me?fields=name,id,picture,friends", function(response) {
      console.log();
      console.log();
      console.log();
      //axios get auth or validate
      axios
        .post("https://game-demo.vpnmonster.co/api/v1/auth/login", {
          avatar: response.picture.data.url,
          name: response.name,
          uid: response.id,
          type: "user"
        })
        .then(
          res => {
            cookies.set("auth", res.data.token);
            this.setState({
              redirect: true
            });
          },
          err => {
            alert("An error occurred, please refresh the page and try again");
          }
        );
    });
  };

  checkStatus = callback => {
    const { cookies } = this.props;
    window.fbAsyncInit = () => {
      FB.init({
        appId: "362073350865440",
        cookie: true,
        xfbml: true,
        version: "v3.0"
      });

      FB.getLoginStatus(response => {
        if (response.status == "connected") {
          callback(true);
        } else {
          callback(false);
        }
      });
    };
  };

  login = () => {
    const { cookies } = this.props;

    //cookies.set("name", "test");
    FB.login(response => {
      if (response.status == connected) {
        this.getInfo();

        this.setState({
          loggedIn: true,
          showButton: false,
          message: "you are now logged in"
        });
      } else {
        cookies.set("auth", null);
      }
    });
  };

  initializeCheckStatus = () => {
    const { cookies } = this.props;

    if (cookies.get("auth")) {
      this.state = {
        ...this.state,
        message: "redirecting you now..",
        redirect: true
      };
      //Validate cookie and go to dashboard
    } else {
      (function(d, s, id) {
        var js,
          fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s);
        js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
      })(document, "script", "facebook-jssdk");

      this.checkStatus(loggedIn => {
        this.setState({
          logged: loggedIn,
          showButton: !loggedIn,
          message: "You are logged in"
        });
        loggedIn ? this.getInfo() : null;
      });
    }
  };

  render() {
    const { classes } = this.props;

    return (
      <Section>
        {this.state.redirect ? <GoTo to="Team" /> : null}
        <h2 className={classes.headline}>World Cup Challenge</h2>
        <Grid
          container
          justify="center"
          alignItems="flex-end"
          className={classes.main}
        >
          {!this.state.logged && this.state.showButton ? (
            <Button
              className={classes.button}
              color="primary"
              onClick={() => this.login()}
            >
              <AccountCircle className={classes.leftIcon} />
              Login With Facebook
            </Button>
          ) : (
            <p>{this.state.message}</p>
          )}
        </Grid>
      </Section>
    );
  }
}
Login.propTypes = {
  classes: PropTypes.object.isRequired,
  cookies: instanceOf(Cookies).isRequired
};

export default withCookies(withStyles(styles)(Login));

//                ? "You are logged in and will be redirected"
//                : "Login with Facebook"
