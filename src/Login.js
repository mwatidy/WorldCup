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
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };

  constructor(props) {
    super(props);
    //this.renderComponent = this.renderComponent.bind(this);
    //this.checkStatus = this.checkStatus.bind(this);
    //this.login = this.login.bind(this);
    const { cookies } = this.props;

    //cookies.set("name", "Change name");
    //cookies.set("name", "test");
    //console.log(cookies.get("name"));
    this.state = {
      logged: false,
      message: "checking your status..",
      redirect: false
    };

    this.initializeCheckStatus();
    // Load the SDK asynchronously
  }

  getInfo = () => {
    FB.api("me?fields=name,id,picture,friends", function(response) {
      console.log(response);
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
          this.getInfo();
          cookies.set("auth", "HEl00");
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
        cookies.set("auth", "HEl00");

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
      this.state = { redirect: true };
      //Validate cookie and go to dashboard
    } else {
    }

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
      //returns true if is logged in

      this.setState({
        logged: loggedIn,
        showButton: loggedIn,
        message: "You are logged in"
      });
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <Section>
        {this.state.redirect ? <GoTo to="Dashboard" /> : null}
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
              onClick={() => this.authorize(this.login())}
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
  classes: PropTypes.object.isRequired
};

export default withCookies(withStyles(styles)(Login));

//                ? "You are logged in and will be redirected"
//                : "Login with Facebook"
