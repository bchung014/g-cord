import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MenuHeaderDropdown from './menu_header_dropdown'

class MenuHeader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dropdownOpen: false
    };

    this.toggleDropdown = this.toggleDropdown.bind(this);
  }

  toggleDropdown() {
    this.setState(prevState => ({ dropdownOpen: !prevState.dropdownOpen }));
  }

  render() {
    const { server } = this.props;
    let sanitizedServerName;

    if (server) {
      if (server.name.length > 20) {
        sanitizedServerName = server.name.slice(0, 21) + '...';
      } else {
        sanitizedServerName = server.name;
      }
    }

    const menuDropdown = this.state.dropdownOpen ? <MenuHeaderDropdown /> : '';

    return (
      <div
        onClick={() => this.toggleDropdown()}
        onBlur={() => this.setState({ dropdownOpen: false })}
        tabIndex='0'
        className='menu-header'>
        {menuDropdown}
        <div className='menu-header-title'>
          {sanitizedServerName}
        </div>

        <div className='menu-header-icon'>
          <i className="fas fa-chevron-down"></i>
        </div>
      </div>
    );
  }

}

const msp = (state, ownProps) => ({
  server: state.entities.servers[ownProps.match.params.serverId]
});

const mdp = () => {
};

export default withRouter(connect(msp, null)(MenuHeader));