import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

class HeaderChat extends Component {
  renderUser() {
    if (!this.props.users) {
      return <h4>Loading...</h4>;
    } else
      return this.props.users.map((user) => {
        if (user.id === parseInt(this.props.userId)) {
          return <h4 key={user.id}>{user.name}</h4>;
        } else return;
      });
  }

  render() {
    return (
      <React.Fragment>
        <div className="header">
          <div className="header-chat">
            <Link
              key={this.props.users.id}
              to="/"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <i className="profile settings fas fa-chevron-left"></i>
            </Link>
            <div>
              <img
                className=" avatar profile-chat"
                src="https://source.unsplash.com/random"
                alt="avatar"
              />
            </div>
            <div className="username-chat">
              {this.renderUser()}
              <p>Active {getRandomInt(60)} min ago</p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    users: state.users,
  };
};

export default connect(mapStateToProps)(HeaderChat);
