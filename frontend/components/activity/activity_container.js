import { connect } from 'react-redux';
import Activity from './activity';
import { logout } from '../../actions/session_actions';

const msp = state => {
};

const mdp = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(null, mdp)(Activity);