import React from 'react';

export default class Activity extends React.Component {

  render() {
    return (
      <>
        <h1>G-cord FOO</h1>
        <button onClick={this.props.logout}>LOGOUT HERE</button>
      </>
    );
  }

}