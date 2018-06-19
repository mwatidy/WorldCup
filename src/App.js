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
import INVITEDNEW from "./INVITEDNEW";
import Team from "./Team";
import Dashboard from "./Dashboard";
import QuestionsPre from "./QuestionsPre";
import Questions from "./Questions";
import QuestionsPost from "./QuestionsPost";
import { Helmet } from "react-helmet";

import Title from "./myComp/Title";
import CookieCheck from "./myComp/Cookie";

import { Cookies, withCookies } from "react-cookie";

const styles = {
  main: {
    fontFamily: "sans-serif",
    margin: "0px",
    position: "absolute",
    left: 0,
    top: 0,
    minWidth: 350
    //backgroundColor: "green"
  },
  ul: {
    listStyleType: "none"
  }
};
const NotFound = () => (
  <div>
    <h3>404 page not found</h3>
    <p>We are sorry but the page you are looking for does not exist.</p>
  </div>
);

class App extends React.Component {
  constructor(props) {
    super(props);
  }
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

  //componentDidMount() {
  //var name = store.getState().name;
  //console.log(name);
  //onClick={() => }
  //console.log("component mounted");
  //}

  render() {
    return (
      <Router>
        <div style={styles.main}>
          <Helmet>
            <meta charSet="utf-8" />
            <title>THIS IS MY APP</title>
            <link rel="canonical" href="http://mysite.com/example" />
          </Helmet>
          <h2>Pages inside the App</h2>
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
            <Route exact path="/Invited" component={INVITEDNEW} />
            <Route path="/Invited/:referrer" component={INVITEDNEW} />
            <Route path="/Instructions" component={Instructions} />
            <Route path="/Login" component={Login} />
            <Route path="/Team" component={Team} />
            <Route path="/Dashboard" component={Dashboard} />
            <Route path="/QuestionsPre" component={QuestionsPre} />
            <Route path="/Questions" component={Questions} />
            <Route path="/QuestionsPost" component={QuestionsPost} />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
