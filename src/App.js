import React from "react";
import { render } from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import Instructions from "./Instructions";
import Login from "./Login";
import Invited from "./Invited";
import Team from "./Team";
import Dashboard from "./Dashboard";
import QuestionsPre from "./QuestionsPre";
import Questions from "./Questions";
import QuestionsPost from "./QuestionsPost";
import { Helmet } from "react-helmet";
import Title from "./myComp/Title";

import { createStore } from "redux";
import game from "./Reducers";
import { getLeader, logIn } from "./Actions";

const store = createStore(game);

const styles = {
  main: {
    fontFamily: "sans-serif",
    margin: "0px",
    position: "absolute",
    left: 0,
    top: 0
    //backgroundColor: "green"
  },
  ul: {
    listStyleType: "none"
  }
};

class App extends React.Component {
  state = {
    logged: true,
    showInstruction: true,
    user: {
      fbId: "",
      name: "",
      score: "",
      role: ""
    },
    team: {
      name: "mak",
      members: [
        {
          name: "ahmd",
          pic:
            "https://pbs.twimg.com/profile_images/724965716932218880/wTyXplXm_400x400.jpg",
          score: 20
        },
        {
          name: "ahmed",
          pic:
            "https://pbs.twimg.com/profile_images/724965716932218880/wTyXplXm_400x400.jpg",
          score: 20
        }
      ]
    }
  };

  componentDidMount() {
    //var name = store.getState().name;
    //console.log(name);
    //store.dispatch(logIn());
    //onClick={() => store.dispatch(getLeader())}
    console.log("component mounted");
    window.fbAsyncInit = function() {
      FB.init({
        appId: "362073350865440",
        cookie: true,
        xfbml: true,
        version: "v3.0"
      });

      FB.getLoginStatus(function(response) {
        console.log(response);
      });
    }.bind(this);

    // Load the SDK asynchronously
    (function(d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  }
  render() {
    return (
      <Router>
        <div style={styles.main}>
          <Helmet>
            <meta charSet="utf-8" />
            <title>THIS IS MY APP</title>
            <link rel="canonical" href="http://mysite.com/example" />
          </Helmet>
          <h2>These are the main app components</h2>
          <ul style={styles.ul}>
            <li>
              <Link to={"/Instructions"}>Instructions</Link>
            </li>
            <li>
              <Link to={"/Login"}>Login</Link>
            </li>
            <li>
              <Link to={"/Invited"}>Invited</Link>
            </li>
            <li>
              <Link to={"/Team"}>Team</Link>
            </li>
            <li>
              <Link to={"/Dashboard"}>Dashboard</Link>
            </li>
            <li>
              <Link to={"/QuestionsPre"}>QuestionsPre</Link>
            </li>
            <li>
              <Link to={"/Questions"}>Questions</Link>
            </li>
            <li>
              <Link to={"/QuestionsPost"}>QuestionsPost</Link>
            </li>
          </ul>
          <hr />

          <div id="status" />
          <Switch>
            <Route exact path="/Instructions" component={Instructions} />
            <Route exact path="/Login" component={Login} />
            <Route exact path="/Invited" component={Invited} />
            <Route exact path="/Team" component={Team} />
            <Route exact path="/Dashboard" component={Dashboard} />
            <Route exact path="/QuestionsPre" component={QuestionsPre} />
            <Route exact path="/Questions" component={Questions} />
            <Route exact path="/QuestionsPost" component={QuestionsPost} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
