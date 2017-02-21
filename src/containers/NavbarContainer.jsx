import { connect } from 'react-redux'
import { Navbar } from '../components/Navbar.jsx'

const mapStateToProps = (state) => {
  //const location = state.routing.locationBeforeTransitions.pathname;

  //return { location };
}

const NavbarContainer = connect(mapStateToProps)(Navbar);

export default NavbarContainer;