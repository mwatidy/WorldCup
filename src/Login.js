import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Icon from "@material-ui/core/Icon";
import Grid from "@material-ui/core/Grid";
import Section from "./myComp/Section";

import { createStore } from "redux";
import game from "./Reducers";
import { getLeader, logIn } from "./Actions";

const store = createStore(game);

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
    //this.renderComponent = this.renderComponent.bind(this);
    //this.checkStatus = this.checkStatus.bind(this);
    //this.login = this.login.bind(this);

    this.state = {
      logged: false,
      myButton: false
    };

    this.initializeCheckStatus();
    // Load the SDK asynchronously
  }

  renderComponent = () => {
    /*
;
 */
    this.setState({ myButton: true }, function() {
      console.log("state changed");
    });
  };

  checkStatus = callback => {
    window.fbAsyncInit = function() {
      FB.init({
        appId: "362073350865440",
        cookie: true,
        xfbml: true,
        version: "v3.0"
      });

      FB.getLoginStatus(function(response) {
        if (response.status == "connected") {
          callback(true);
        } else {
          callback(false);
        }
      });
    }.bind(this);
  };

  login = () => {
    FB.login(function(response) {
      console.log(response);
    });
  };

  initializeCheckStatus = () => {
    (function(d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");

    this.checkStatus(status => {
      console.log(status);
      this.setState(() => {
        logged: status;
      });
      this.renderComponent();
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.container}>
        <Section>
          <h2 className={classes.headline}>World Cup Challenge</h2>
          <Grid
            container
            justify="center"
            alignItems="flex-end"
            className={classes.main}
          >
            {this.state.myButton ? (
              <Button
                className={classes.button}
                color="primary"
                onClick={() => this.login()}
              >
                <AccountCircle className={classes.leftIcon} />
                Login With Facebook
              </Button>
            ) : (
              "checking current status..."
            )}
          </Grid>
        </Section>
      </div>
    );
  }
}
Login.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Login);

//                ? "You are logged in and will be redirected"
//                : "Login with Facebook"
