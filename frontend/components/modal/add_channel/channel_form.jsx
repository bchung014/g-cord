import React from 'react';

export default class ChannelForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = 
      {
        channel: this.props.channel
      };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    const { submitRequest, closeModal, history } = this.props;

    submitRequest(this.state.channel)
      .then(({ channel }) => {
        closeModal();
        history.push(`${channel.server_id}/channels/${channel.id}`);
      });
  }

  update() {
    return (e) => {
      this.setState(
        {
          channel: Object.assign({}, this.state.channel, { name: e.currentTarget.value })
        }
      );
    };
  }

  render() {
    const { closeModal } = this.props;
    
    return(
      <div className='channel-form-container'>
        <div className='channel-form-inner-container'>
          {/* Replace with formType header */}
          <header className='channel-form-header'>
            <p>Create Text Channel</p>
          </header>

          <div className='channel-form-input-container'>
            {/* Replace with dynamic channel name when editing? */}
            <p>Channel Name</p>
            <form>
              <input
                type="text"
                value={this.state.channel.name}
                onChange={this.update()}/>
            </form>
          </div>
        </div>

        <footer className='channel-form-footer'>
          <button 
            className='channel-form-cancel'
            onClick={() => closeModal()}>
            Cancel
          </button>
          <button
            className='channel-form-create'
            onClick={this.handleSubmit}>
            Create Channel
          </button>
        </footer>
      </div>
    );
  }
}