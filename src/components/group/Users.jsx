import React, { Component } from "react";
import SearchBar from "../SearchBar";

class Users extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <SearchBar />
        <ul>
          {listNames.map((name) => (
            <React.Fragment>
              <div className="chat-list">
                <div>
                  <img
                    className="avatar profile user"
                    src="https://source.unsplash.com/random"
                    alt="avatar"
                  />
                </div>
                <div className="user username">
                  <li>{name}</li>
                </div>
                <form className="select">
                  <input type="radio"></input>
                </form>
              </div>
            </React.Fragment>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

export default Users;
