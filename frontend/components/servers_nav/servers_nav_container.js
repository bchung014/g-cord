import { connect } from 'react-redux';
import ServersNav from './servers_nav';
import { fetchServers } from '../../actions/server_actions';

const msp = state => ({
  servers: Object.values(state.entities.servers)
});

const mdp = dispatch =>  ({
  fetchServers: () => dispatch(fetchServers())
});

export default connect(msp, mdp)(ServersNav);