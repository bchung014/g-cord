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

  componentWillUnmount() {
    this.props.clearChannelErrors();
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
    const { closeModal, formType, errors } = this.props;

    const channelFormTitle = formType === 'create' ?
      <header className='channel-form-header'>
        <p>Create Text Channel</p>
      </header> :
      <header className='channel-form-header'>
        <p>Edit Text Channel</p>
      </header>

    const channelInputErrors = errors.length ?
      <div className='channel-form-input-errors'>
        <p>Channel Name</p>
        <span>&nbsp;&nbsp;-&nbsp;&nbsp;{errors}</span> 
      </div> :
      <div className='channel-form-input-no-errors'>
        <p>Channel Name</p>
      </div>
    
    const submitButton = formType === 'create' ?
      <button
        className='channel-form-create'
        onClick={this.handleSubmit}>
        Create Channel
      </button>:
      <button
        className='channel-form-create'
        onClick={this.handleSubmit}>
        Edit Channel
      </button>

    return(
      <div className='channel-form-container'>
        <div className='channel-form-inner-container'>
          {channelFormTitle}

          <div className='channel-form-input-container'>
            {channelInputErrors}
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
          {submitButton}
        </footer>
      </div>
    );
  }
}