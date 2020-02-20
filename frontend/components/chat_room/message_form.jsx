import React from "react";

class MessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { body: "" };
  }

  update(field) {
    return e =>
      this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    App.cable.subscriptions.subscriptions[0].speak({ message: this.state.body });
    this.setState({ body: "" });
  }

  render() {
    return (
      <div className='message-form-container'>
        <div className='message-form-inner-container'>
          <form
            onSubmit={this.handleSubmit.bind(this)}
            className='message-form'>
            <input
              className='message-form-input'
              type="text"
              value={this.state.body}
              onChange={this.update("body")}
              placeholder="Ai, so what had happened was..."
            />
          </form>
        </div>
      </div>
    );
  }
}

export default MessageForm;