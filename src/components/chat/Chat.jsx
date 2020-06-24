import React, { Component } from "react";
import { connect } from "react-redux";

import HeaderChat from "./HeaderChat";
import FooterChat from "./FooterChat";
import ChatCanvas from "./ChatCanvas";
import { fetchUsers } from "../../actions/index";

class Chat extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    // console.log(this.props);
    return (
      <React.Fragment>
        <HeaderChat userId={this.props.match.params.id} />
        <ChatCanvas />
        <FooterChat />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  // console.log(state);
  // console.log(ownProps);
  return {
    users: state.users,
  };
};

export default connect(mapStateToProps, { fetchUsers })(Chat);
