import { connect } from 'react-redux';
import RightSidebar from './RightSidebar';
import { updateColor } from '../../../actions/parameter_actions';

const mapStateToProps = ({ parameters }) => ({
  parameters: parameters
});

const mapDispatchToProps = dispatch => ({
  updateColor: (color, amt) => dispatch(updateColor(color, amt))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RightSidebar);
