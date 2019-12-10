import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Greeting from './greeting';

const msp = state => {
  const currentUserId = state.session.currentUserId;
  const currentUser = currentUserId ? state.entities.users[currentUserId] : undefined;

  return { currentUser };
};

const mdp = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(msp, mdp)(Greeting);