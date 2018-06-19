import React from "react";
import { render } from "react-dom";
import { Redirect } from "react-router-dom";

import { withCookies, Cookies } from "react-cookie";

class CookieCheck extends React.Component {
  setCookie = cookie => {
    window.auth = cookie;
  };

  render() {
    const { cookies } = this.props;
    const auth = cookies.get("auth");
    return <div>{!auth ? <Redirect to="/Login" /> : this.setCookie(auth)}</div>;
  }
}

export default withCookies(CookieCheck);
