import { connect } from 'react-redux';
import SplashNavbar from './splash_navbar';

const msp = state => ({
  loggedIn: Boolean(state.session.currentUserId)
});


const mdp = dispatch => {

};

export default connect(msp, null)(SplashNavbar);