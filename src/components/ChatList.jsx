import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { selectUser, fetchUsers } from "../actions";

class ChatList extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }
  render() {
    const { users = [] } = this.props;
    // console.log(this.props);
    return (
      <div className="users">
        <ul>
          {users.map((user) => (
            <Link
              key={user.id}
              to={`/${user.id}`}
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <div
                className="chat-list"
                key={user.id}
                onClick={() => {
                  this.props.selectUser(user.name);
                }}
              >
                <div>
                  <img
                    className="avatar"
                    src="https://source.unsplash.com/random"
                    alt="avatar"
                  />
                </div>
                <div className="username">
                  <li>{user.name}</li>
                  <p>{user.company.bs} </p>
                </div>
              </div>
            </Link>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  //   console.log(state);
  return {
    users: state.users,
  };
};

export default connect(mapStateToProps, { selectUser, fetchUsers })(ChatList);
