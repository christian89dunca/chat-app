import React, { Component } from "react";
import HeaderMain from "./HeaderMain";
import SearchBar from "../SearchBar";
import ChatList from "../ChatList";
import FooterMain from "./FooterMain";

class UsersList extends Component {
  render() {
    // console.log(this.props);
    return (
      <React.Fragment>
        <HeaderMain />
        <SearchBar />
        <ChatList />
        <FooterMain />
      </React.Fragment>
    );
  }
}

export default UsersList;
