import React, { Component } from "react";
import "./App.css";

import UsersList from "./components/main/UsersList";
import Chat from "./components/chat/Chat";

import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
// import { selectPath, selectUser } from "./actions";

class App extends Component {
  render() {
    return (
      <div>
        <div className="content">
          <Switch>
            <Route path="/" exact component={UsersList} />
            <Route path="/:id" exact component={Chat} />
          </Switch>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    path: state.selectedPath,
  };
};

export default connect(mapStateToProps)(App);
