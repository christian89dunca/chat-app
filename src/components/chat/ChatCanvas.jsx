import React, { Component } from "react";
import { connect } from "react-redux";

import { generateMessage } from "../../actions";

class ChatCanvas extends Component {
  render() {
    const { messages } = this.props;

    return (
      <div className="chat-canvas">
        {messages.map((message) => (
          <p key={message}>{message}</p>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    messages: state.messages,
  };
};

export default connect(mapStateToProps, { generateMessage })(ChatCanvas);
