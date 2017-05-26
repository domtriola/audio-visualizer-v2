import { connect } from 'react-redux';
import RightSidebar from './RightSidebar';
import { updateColor, updateParam } from '../../../actions/parameter_actions';

const mapStateToProps = ({ parameters }) => ({
  parameters: parameters
});

const mapDispatchToProps = dispatch => ({
  updateParam: (param, amt) => dispatch(updateParam(param, amt)),
  updateColor: (color, amt) => dispatch(updateColor(color, amt))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RightSidebar);
