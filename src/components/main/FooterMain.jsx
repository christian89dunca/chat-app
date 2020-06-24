import React, { Component } from "react";

class FooterMain extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="footer">
          <div className="footer-main">
            <div className="chat-icon icon active">
              <i className="fas fa-comments"></i>
              <p>chats</p>
            </div>
            <div className="people-icon icon">
              <i className="fas fa-users"></i>
              <p>groups</p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default FooterMain;
