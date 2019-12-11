import { connect } from 'react-redux';
import Splash from './splash';

const msp = state => ({
  loggedIn: Boolean(state.session.currentUserId)
});

const mdp = dispatch => {
  
};

export default connect(msp, null)(Splash);