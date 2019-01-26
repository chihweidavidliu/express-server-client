import React, { Component } from "react";
import { signout } from "../../actions";
import { connect } from "react-redux";

class SignOut extends Component {
  componentDidMount() {
    this.props.signout();
  }
  
  render() {
    return <div>Sorry to see you go!</div>
  }
}

export default connect(null, { signout: signout })(SignOut);
