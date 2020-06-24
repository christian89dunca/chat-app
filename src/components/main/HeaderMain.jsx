import React, { Component } from "react";

class HeaderMain extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="header">
          <div className="header-main">
            <div>
              <img
                className="avatar profile"
                src="https://source.unsplash.com/random"
                alt="avatar"
              />
            </div>
            <h4 className="title">Chats</h4>
            <div>
              <i className="profile settings fas fa-cog"></i>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default HeaderMain;
