import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./HeaderStyle.css";

class Header extends Component {
  renderLinks() {
    if(this.props.authenticated === null) {
      return (
        <React.Fragment>
          <Link to="/signup">Sign up</Link>
          <Link to="/signin">Sign in</Link>
        </React.Fragment>
      )
    } else {
      return (
        <React.Fragment>
          <Link to="/signout">Sign out</Link>
          <Link to="/feature">Feature</Link>
        </React.Fragment>
      )
    }
  }
  render() {
    return (
      <div className="header">
        <Link to="/">Redux Auth</Link>
        {this.renderLinks()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { authenticated: state.auth.authenticated }
}
export default connect(mapStateToProps) (Header);
