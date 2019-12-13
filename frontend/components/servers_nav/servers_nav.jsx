import React from 'react';
import ServersNavItem from './servers_nav_item';

export default class ServersNav extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchServers();
  }

  render() {
    const { servers } = this.props;
    const ServerLis = servers.map((server, idx) => {
      return (
        <ServersNavItem 
          key={idx}
          server={server}/>
      );
    });

    return (
      <>
        <h1>ServersNav</h1>
        <ul>
          {ServerLis}
        </ul>

      </>
    );
  }

}