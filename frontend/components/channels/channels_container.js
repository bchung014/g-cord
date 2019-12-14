import { connect } from 'react-redux';
import Channels from './channels';
import { logout } from '../../actions/session_actions';

const msp = state => {
};

const mdp = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(null, mdp)(Channels);