import React, { Component } from "react";
import { generateMessage } from "../../actions";
import { connect } from "react-redux";

class FooterChat extends Component {
  render() {
    // console.log(this.props);
    let input = "";
    let message = [];

    const handleChange = (e) => {
      input = e.target.value;
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      message = [...message, input];
      console.log(message);
      this.props.generateMessage(message);
    };

    return (
      <React.Fragment>
        <div className="footer">
          <div className="footer-chat">
            <div className="plus-icon icon">
              <i className="fas fa-plus"></i>
            </div>

            <div className="record-icon icon">
              <i className="far fa-dot-circle"></i>
            </div>

            <div className="form-chat">
              <form type="submit" onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Type a message..."
                  value={this.input}
                  onChange={handleChange}
                />
              </form>
            </div>

            <div className="like-icon icon">
              <i className="fas fa-thumbs-up"></i>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    messages: [...state.messages],
  };
};

export default connect(mapStateToProps, { generateMessage })(FooterChat);
