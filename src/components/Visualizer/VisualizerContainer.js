import { connect } from 'react-redux';
import Visualizer from './Visualizer';

const mapStateToProps = ({ effect, parameters }) => ({
  effect: effect,
  parameters: parameters
});

export default connect(
  mapStateToProps
)(Visualizer);
