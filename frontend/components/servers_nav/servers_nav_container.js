import { connect } from 'react-redux';
import ServersNav from './servers_nav';
import { fetchServers } from '../../actions/server_actions';
import { openModal } from '../../actions/modal_actions';

const msp = state => ({
  servers: Object.values(state.entities.servers)
});

const mdp = dispatch =>  ({
  fetchServers: () => dispatch(fetchServers()),
  openModal: modal => dispatch(openModal(modal))
});

export default connect(msp, mdp)(ServersNav);