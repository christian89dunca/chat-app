import React, { Component } from "react";

// const onChange = () => {};

class SearchBar extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="form">
          <form>
            <input type="text" placeholder="search" />
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default SearchBar;
