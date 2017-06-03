import { connect } from 'react-redux';
import LeftSidebar from './LeftSidebar';
import { updateEffect } from '../../../actions/effect_actions';

const mapDispatchToProps = dispatch => ({
  updateEffect: effectName => dispatch(updateEffect(effectName))
});

export default connect(
  null,
  mapDispatchToProps
)(LeftSidebar);
