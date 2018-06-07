import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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

import FacebookLogin from "react-facebook-login";

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
  constructor(props) {
    super(props);
    if (window.logged) {
      this.state = { logged: true };
    } else {
      this.state = { logged: false };
      window.login;
    }
  }
  responseFacebook(response) {
    console.log(response);
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
          <p>{this.state.logged ? "LOGGED IN" : "NOT LOGGED"}</p>

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
