import { connect } from 'react-redux';
import LeftSidebar from './LeftSidebar';

const mapStateToProps = ({ effect }) => ({
  effect: effect
});

export default connect(
  mapStateToProps
)(LeftSidebar);
