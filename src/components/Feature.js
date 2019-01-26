import React, { Component } from "react";
import requireAuth from "./auth/requireAuth";

class Feature extends Component {
  render() {
    return (
      <div>This is a feature</div>
    )
  }
}

export default requireAuth(Feature);
