import { connect } from 'react-redux';
import RightSidebar from './RightSidebar';

const mapStateToProps = ({ parameters }) => ({
  parameters: parameters
});

export default connect(
  mapStateToProps
)(RightSidebar);
