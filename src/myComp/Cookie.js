import React from "react";
import { render } from "react-dom";
import { Redirect } from "react-router-dom";

import { withCookies, Cookies } from "react-cookie";

class CookieCheck extends React.Component {
  render() {
    const { cookies } = this.props;

    return (
      <div>
        {!cookies.get("auth") && window.location.pathname != "/Login" ? (
          <Redirect to="/Login" />
        ) : null}
      </div>
    );
  }
}

export default withCookies(CookieCheck);
