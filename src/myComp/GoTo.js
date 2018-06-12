import React from "react";
import { render } from "react-dom";
import { Redirect } from "react-router-dom";

class GoTo extends React.Component {
  render() {
    return (
      <div>
        <Redirect to={"/" + this.props.to} />
      </div>
    );
  }
}

export default GoTo;
