import React, { Component } from "react";
import { connect } from "react-redux";

export default (ChildComponent) => {

  class ComposedCompenent extends Component {
    checkAuth() {
      if(this.props.auth === null) {
        this.props.history.push("/")
      }
    }

    componentDidMount() {
      this.checkAuth();
    }

    componentDidUpdate() {
      this.checkAuth();
    }

    render() {
      return (
        <ChildComponent {...this.props} />
      )
    }
  }

  return connect(mapStateToProps) (ComposedCompenent);
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth.authenticated,
  }
};
