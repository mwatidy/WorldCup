import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Instructions from "./Instructions";
import Login from "./Login";
import Invited from "./Invited";
import Team from "./Team";
import Dashboard from "./Dashboard";
import QuestionsPre from "./QuestionsPre";
import Title from "./myComp/Title";

const styles = {
  main: {
    fontFamily: "sans-serif"
  },
  ul: {
    listStyleType: "none"
  }
};

class App extends React.Component {
  render() {
    return (
      <Router>
        <div style={styles.main}>
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
          </ul>
          <hr />

          <Switch>
            <Route exact path="/Instructions" component={Instructions} />
            <Route exact path="/Login" component={Login} />
            <Route exact path="/Invited" component={Invited} />
            <Route exact path="/Team" component={Team} />
            <Route exact path="/Dashboard" component={Dashboard} />
            <Route exact path="/QuestionsPre" component={QuestionsPre} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
